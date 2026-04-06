function About() {
  const stats = [
    { number: '10K+', label: 'Happy Customers' },
    { number: '500+', label: 'Products' },
    { number: '5+', label: 'Years Experience' },
    { number: '24/7', label: 'Support' },
  ]

  const team = [
    {
      name: 'Ahmed Hassan',
      role: 'Founder & CEO',
      image: 'https://i.pravatar.cc/400?img=11',
      bio: 'Visionary leader with 10+ years in tech industry.',
    },
    {
      name: 'Sara Mohamed',
      role: 'Head of Sales',
      image: 'https://i.pravatar.cc/400?img=47',
      bio: 'Customer-focused professional driving growth and satisfaction.',
    },
    {
      name: 'Omar Ali',
      role: 'Tech Lead',
      image: 'data:image/jpeg;base64,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',
      bio: 'Full-stack engineer passionate about clean and scalable code.',
    },
  ]
  return (
    <div className="min-h-screen bg-gray-50">

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-blue-800 via-blue-600 to-blue-400 text-white py-28 px-4 overflow-hidden">
        <div className="absolute inset-0 opacity-10"
          style={{ backgroundImage: 'radial-gradient(circle at 20% 50%, white 1px, transparent 1px), radial-gradient(circle at 80% 20%, white 1px, transparent 1px)', backgroundSize: '60px 60px' }}
        />
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <span className="inline-block bg-white/20 text-white text-sm font-medium px-4 py-1 rounded-full mb-6">
            🏪 Est. 2019
          </span>
          <h1 className="text-5xl font-bold mb-6 leading-tight">
            About <span className="text-blue-200">TechStore</span>
          </h1>
          <p className="text-blue-100 text-xl leading-relaxed">
            We are passionate about bringing you the latest and greatest in technology.
            TechStore has grown to become Egypt's most trusted electronics retailer.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="max-w-4xl mx-auto px-4 -mt-10 relative z-10">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {stats.map(stat => (
            <div key={stat.label} className="bg-white rounded-2xl p-6 text-center shadow-md border border-gray-100">
              <div className="text-3xl font-bold text-blue-600 mb-1">{stat.number}</div>
              <div className="text-sm text-gray-500">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-blue-600 font-medium text-sm uppercase tracking-widest">Our Mission</span>
            <h2 className="text-3xl font-bold text-gray-800 mt-2 mb-4">
              Technology for Everyone
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed mb-6">
              To make cutting-edge technology accessible to everyone in Egypt and beyond.
              We carefully curate every product to ensure quality, reliability, and value.
            </p>
            <ul className="space-y-3">
              {['Premium quality products', 'Competitive pricing', 'Expert customer support', 'Fast & free delivery'].map(item => (
                <li key={item} className="flex items-center gap-3 text-gray-600">
                  <span className="w-5 h-5 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-xs font-bold">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=600"
              alt="Our Mission"
              className="rounded-2xl shadow-lg w-full object-cover h-72"
            />
            <div className="absolute -bottom-4 -left-4 bg-blue-600 text-white rounded-2xl p-4 shadow-lg">
              <div className="text-2xl font-bold">5+</div>
              <div className="text-blue-200 text-sm">Years of Trust</div>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="bg-white py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-blue-600 font-medium text-sm uppercase tracking-widest">The People</span>
            <h2 className="text-3xl font-bold text-gray-800 mt-2">Meet the Team</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {team.map(member => (
              <div key={member.name} className="group bg-gray-50 rounded-2xl overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300">
                <div className="relative overflow-hidden h-56">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-800 mb-1">{member.name}</h3>
                  <p className="text-blue-600 font-medium text-sm mb-3">{member.role}</p>
                  <p className="text-gray-500 text-sm leading-relaxed">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      {/* CTA */}
      <section className="py-20 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Ready to Shop?</h2>
          <p className="text-gray-500 mb-8">Explore our wide range of tech products and find your next favorite gadget.</p>
          <button
            onClick={() => window.location.href = '/products'}
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium px-10 py-4 rounded-xl transition-colors text-lg"
          >
            Browse Products
          </button>
        </div>
      </section>

    </div>
  )
}

export default About