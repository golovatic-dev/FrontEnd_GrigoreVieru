import React, { useState, useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

const eventsData = [
  {
    category: 'Evenimente Educaționale',
    events: [
      {
        title: 'Concursul de Ortografie',
        date: '2025-02-12',
        description:
          'Un concurs unde elevii își testează cunoștințele de ortografie și gramatică într-o competiție distractivă și educativă.',
      },
      {
        title: 'Ziua Proiectelor Științifice',
        date: '2025-03-20',
        description:
          'Elevii prezintă proiecte științifice realizate individual sau în echipă, încurajând curiozitatea și cercetarea.',
      },
      {
        title: 'Lectura în Parc',
        date: '2025-04-10',
        description:
          'Activitate de lectură în aer liber, unde elevii citesc și discută cărți în grupuri.',
      },
    ],
  },
  {
    category: 'Evenimente Culturale',
    events: [
      {
        title: 'Festivalul de Teatru',
        date: '2025-05-25',
        description:
          'Elevii pun în scenă piese de teatru clasice și moderne, dezvoltându-și abilitățile artistice.',
      },
      {
        title: 'Săptămâna Tradițiilor',
        date: '2025-06-15',
        description:
          'Un eveniment dedicat tradițiilor și culturii naționale, cu ateliere de meșteșuguri și dansuri populare.',
      },
      {
        title: 'Expoziția de Artă',
        date: '2025-07-05',
        description:
          'Lucrările de artă ale elevilor, inclusiv desene, picturi și colaje, sunt expuse pentru colegi și părinți.',
      },
    ],
  },
  {
    category: 'Evenimente Sportive',
    events: [
      {
        title: 'Campionatul Gimnaziului',
        date: '2025-09-10',
        description:
          'Competiții sportive între clase la fotbal, volei, și atletism, promovând spiritul de echipă.',
      },
      {
        title: 'Ziua Mișcării',
        date: '2025-10-03',
        description:
          'Activități fizice pentru toți elevii, inclusiv dans, yoga și jocuri interactive.',
      },
      {
        title: 'Crosul de Primăvară',
        date: '2025-04-18',
        description:
          'Cros pe terenul școlii sau în apropiere, destinat promovării unui stil de viață activ și sănătos.',
      },
    ],
  },
]

const Events = () => {
  const [activeCategory, setActiveCategory] = useState(
    'Evenimente Educaționale'
  )

  useEffect(() => {
    AOS.init({ duration: 1000, once: true })
  }, [])

  const handleCategoryClick = (category) => {
    setActiveCategory(category)
  }

  const renderEvents = () => {
    const categoryData = eventsData.find(
      (data) => data.category === activeCategory
    )
    return categoryData ? (
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categoryData.events.map((event, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            data-aos="zoom-in"
            data-aos-delay={index * 100}
          >
            <div className="p-6">
              <h4 className="text-xl font-bold mb-2 text-indigo-700">
                {event.title}
              </h4>
              <p className="text-gray-600 mb-3 text-sm">
                {new Date(event.date).toLocaleDateString('ro-RO', {
                  weekday: 'long',
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </p>
              <p className="text-gray-700">{event.description}</p>
            </div>
          </div>
        ))}
      </div>
    ) : (
      <p className="text-center text-gray-600">
        Nu au fost găsite evenimente pentru această categorie.
      </p>
    )
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <h2
        className="text-4xl font-bold text-center mb-12 text-indigo-900"
        data-aos="fade-down"
      >
        Evenimente Viitoare
      </h2>
      <div
        className="flex flex-wrap justify-center gap-4 mb-12"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        {eventsData.map((data, index) => (
          <button
            key={index}
            className={`px-6 py-3 rounded-full transition-all duration-300 ${
              activeCategory === data.category
                ? 'bg-indigo-700 text-white font-bold shadow-lg'
                : 'bg-white text-indigo-700 hover:bg-indigo-100'
            }`}
            onClick={() => handleCategoryClick(data.category)}
          >
            {data.category}
          </button>
        ))}
      </div>
      <div data-aos="fade-up" data-aos-delay="200">
        {renderEvents()}
      </div>
    </div>
  )
}

export default Events
