import NavBar from '../modules/navbar';
import Carousel from '../components/Carousel';

export default function EventsPage() {
  const upcomingEvents = [
    { image: "/team/irlprofiles/Mitchell-Moundraty.jpg", title: "sorry mitchell for using ur face as a test", subtitle: "sorry mitchell for using ur face as a test" },
    { image: "/placeholder-event.jpg", title: "Game Night", subtitle: "test subtitle" },
    { image: "/placeholder-event.jpg", title: "Roblox Workshop", subtitle: "test subtitle" },
    { image: "/placeholder-event.jpg", title: "smth smth", subtitle: "test subtitle" },
  ];

  const recentEvents = [
    { image: "/placeholder-event.jpg", title: "past stuff", subtitle: "wowza" },
    { image: "/placeholder-event.jpg", title: "more past stuff", subtitle: "insanely cool" },
    { image: "/placeholder-event.jpg", title: "more more past stuff", subtitle: "so so cool" },
    { image: "/placeholder-event.jpg", title: "more more more past stuff", subtitle: "so so cool" },
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
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