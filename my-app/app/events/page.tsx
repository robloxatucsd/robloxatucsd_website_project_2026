import NavBar from '../modules/navbar';
import Carousel from '../components/Carousel';
import { client, urlFor } from '../../sanity/lib/sanity';

interface Event {
  _id: string;
  title: string;
  subtitle: string;
  mainImage: any;
  date: string;
  categories: any[];
  instagramLink?: string;
}

async function getEvents() {
  const query = `*[_type == "post"] | order(date desc) {
    _id,
    title,
    "subtitle": body[0].children[0].text,
    mainImage,
    date,
    categories[]->{title, slug},
    instagramLink
  }`;
  
  const events = await client.fetch(query);
  return events;
}

// Clean text helper to remove extra whitespace and special characters
function cleanText(text: string): string {
  if (!text) return '';
  // Replace newlines and multiple spaces with a single space
  let cleaned = text.replace(/\s+/g, ' ').trim();
  // Remove any problematic Unicode characters
  cleaned = cleaned.normalize('NFKC');
  return cleaned;
}

// Truncate text helper
function truncateText(text: string, maxLength: number = 80): string {
  const cleaned = cleanText(text);
  if (cleaned.length <= maxLength) return cleaned;
  return cleaned.slice(0, maxLength) + '...';
}

export default async function EventsPage() {
  const events: Event[] = await getEvents();
  
  const hasCategory = (event: Event, categoryName: string) => {
    return event.categories?.some(cat => cat.title === categoryName);
  };
  
  const upcomingEvents = events
    .filter(event => hasCategory(event, 'Upcoming'))
    .map(event => ({
      image: event.mainImage ? urlFor(event.mainImage).url() : '/placeholder-event.jpg',
      title: cleanText(event.title || ''),
      subtitle: truncateText(event.subtitle || '', 80),
      instagramLink: event.instagramLink || null
    }));
  
  const recentEvents = events
    .filter(event => hasCategory(event, 'Recent'))
    .map(event => ({
      image: event.mainImage ? urlFor(event.mainImage).url() : '/placeholder-event.jpg',
      title: cleanText(event.title || ''),
      subtitle: truncateText(event.subtitle || '', 80),
      instagramLink: event.instagramLink || null
    }));

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a0a0a] to-[#1a1a1a] text-white">
      <NavBar />

      <main className="container mx-auto px-16 py-12 max-w-[1400px]">
        {/* Upcoming Section */}
        <section className="mb-20">
          <div className="mb-6">
            <h2 className="text-3xl font-bold">Upcoming</h2>
            <p className="text-gray-400">Mark your calendar for these exciting events!</p>
          </div>
          <Carousel items={upcomingEvents} />
        </section>

        {/* Recent Section */}
        <section>
          <div className="mb-6">
            <h2 className="text-3xl font-bold">Recent</h2>
            <p className="text-gray-400">See what we've been up to recently</p>
          </div>
          <Carousel items={recentEvents} />
        </section>
      </main>
    </div>
  );
}