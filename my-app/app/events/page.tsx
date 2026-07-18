import NavBar from '../modules/navbar';
import Carousel from '../components/Carousel';
import { client, urlFor } from '../../sanity/lib/sanity';

interface Event {
  _id: string;
  title: string;
  subtitle: string;
  image: any;
  date: string;
  category: 'upcoming' | 'recent';
  location: string;
}

async function getEvents() {
  const query = `*[_type == "event"] | order(date desc) {
    _id,
    title,
    subtitle,
    image,
    date,
    category,
    location
  }`;
  
  const events = await client.fetch(query);
  return events;
}

export default async function EventsPage() {
  const events: Event[] = await getEvents();
  
  const upcomingEvents = events
    .filter(event => event.category === 'upcoming')
    .map(event => ({
      image: urlFor(event.image).url(),
      title: event.title,
      subtitle: event.subtitle || event.location || ''
    }));
  
  const recentEvents = events
    .filter(event => event.category === 'recent')
    .map(event => ({
      image: urlFor(event.image).url(),
      title: event.title,
      subtitle: event.subtitle || event.location || ''
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