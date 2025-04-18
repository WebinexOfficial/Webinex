import React from 'react'
import { Link } from 'react-router-dom'


const categories = [
  {
    title: 'Website Development',
    image: '/dev.jpg',
    slug: 'web-development',
    tag: 'Web Dev',
    gradient: 'from-green-900 via-emerald-800 to-green-950',
  },
  {
    title: 'Logo Design',
    image: '/logo.jpg',
    slug: 'logo-design',
    tag: 'Branding',
    gradient: 'from-rose-900 via-rose-800 to-pink-950',
  },
  {
    title: 'SEO',
    image: '/seo.jpg',
    slug: 'seo',
    tag: 'SEO',
    gradient: 'from-pink-900 via-rose-800 to-rose-950',
  },
  {
    title: 'UI/UX Design',
    image: '/uiux.jpg',
    slug: 'ui-ux-design',
    tag: 'UI/UX',
    gradient: 'from-indigo-900 via-indigo-800 to-indigo-950',
  },
  {
    title: 'Voice Over',
    image: '/voice.jpg',
    slug: 'voice-over',
    tag: 'Audio',
    gradient: 'from-yellow-800 via-orange-600 to-yellow-900',
  },
]

const PortfolioSection = () => {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Explore Our Portfolio
        </h2>

        <div className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory">
          {categories.map((item, index) => (
            <Link
              to={`/portfolio/${item.slug}`}
              key={index}
              className={`min-w-[240px] sm:min-w-[260px] md:min-w-[280px] snap-start rounded-3xl bg-gradient-to-br ${item.gradient} p-4 transition-transform transform hover:scale-105 shadow-md hover:shadow-xl`}
            >
              <div className="flex flex-col justify-between h-full">
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-white mb-4">
                    {item.title}
                  </h3>
                  <div className="rounded-xl overflow-hidden aspect-[4/3] mb-3">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="object-cover w-full h-full"
                    />
                  </div>
                </div>
                <span className="inline-block bg-white text-xs text-gray-900 px-3 py-1 rounded-full font-medium w-fit">
                  {item.tag}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default PortfolioSection