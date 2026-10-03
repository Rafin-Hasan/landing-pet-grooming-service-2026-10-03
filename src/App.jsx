export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 py-6">
        <span className="font-bold text-xl">Wag & Wash</span>
        <a href="#cta" className="bg-pink-600 text-white px-4 py-2 rounded-lg hover:bg-pink-700 transition">
          Book a Groom
        </a>
      </nav>

      <header className="max-w-4xl mx-auto text-center px-6 py-24">
        <p className="uppercase tracking-wide text-pink-600 font-semibold mb-4">Mobile Pet Grooming</p>
        <h1 className="text-4xl sm:text-5xl font-extrabold mb-6">Grooming that comes to your driveway</h1>
        <p className="text-lg text-slate-600 mb-10">Full-service mobile grooming, so your pet never has to wait in a cage.</p>
        <a href="#cta" className="inline-block bg-pink-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-pink-700 transition">
          Schedule a Visit
        </a>
      </header>

      <section className="max-w-6xl mx-auto px-6 py-16 grid sm:grid-cols-3 gap-8">
        <div className="p-6 rounded-xl border border-slate-100 shadow-sm">
          <h3 className="font-semibold text-lg mb-2">Comes to You</h3>
          <p className="text-slate-600">A fully equipped grooming van at your door.</p>
        </div>

        <div className="p-6 rounded-xl border border-slate-100 shadow-sm">
          <h3 className="font-semibold text-lg mb-2">Low-Stress Handling</h3>
          <p className="text-slate-600">Calm, one-on-one grooming, no cages.</p>
        </div>

        <div className="p-6 rounded-xl border border-slate-100 shadow-sm">
          <h3 className="font-semibold text-lg mb-2">All Breeds Welcome</h3>
          <p className="text-slate-600">Experienced with everything from puppies to seniors.</p>
        </div>
      </section>

      <section id="cta" className="bg-pink-600 text-white text-center px-6 py-20">
        <h2 className="text-3xl font-bold mb-4">Give your pet the spa treatment</h2>
        <p className="mb-8 text-pink-100">Serving your neighborhood six days a week.</p>
        <a href="#" className="inline-block bg-white text-pink-700 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-slate-100 transition">
          Schedule a Visit
        </a>
      </section>

      <footer className="text-center py-8 text-slate-400 text-sm">
        © 2026 Wag & Wash. All rights reserved.
      </footer>
    </div>
  )
}
