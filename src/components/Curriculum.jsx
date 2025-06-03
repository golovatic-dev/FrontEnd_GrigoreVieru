import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Curriculum = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true })
  }, [])

  return (
    <div className="bg-gradient-to-b from-blue-50 to-white py-20">
      <div className="container mx-auto px-6">
        <h1
          className="text-5xl font-bold text-center mb-16 text-blue-900"
          data-aos="fade-down"
        >
          Curriculumul Nostru
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {[
            {
              title: 'Clasele 1–4',
              subjects: [
                'Limba și literatura română',
                'Matematica',
                'Educație civică',
                'Dezvoltare personală',
                'Muzică și mișcare',
                'Arte plastice',
                'Educație fizică',
              ],
              color: 'bg-green-500',
            },
            {
              title: 'Clasele 5–7',
              subjects: [
                'Limba și literatura română',
                'Limba străină (engleză, franceză etc.)',
                'Matematica',
                'Istoria',
                'Geografia',
                'Biologia',
                'Educația tehnologică',
                'Educația muzicală',
                'Educația fizică',
              ],
              color: 'bg-blue-500',
            },
            {
              title: 'Clasele 8–9',
              subjects: [
                'Limba și literatura română',
                'Limba străină (engleză, franceză etc.)',
                'Matematica (Algebră și Geometrie)',
                'Fizica',
                'Chimia',
                'Biologia',
                'Istoria',
                'Geografia',
                'Educația civică',
                'Informatica',
                'Educația fizică',
              ],
              color: 'bg-purple-500',
            },
          ].map((nivel, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
              data-aos="zoom-in"
              data-aos-delay={index * 100}
            >
              <div className={`${nivel.color} py-4 px-6`}>
                <h3 className="text-2xl font-bold text-white">{nivel.title}</h3>
              </div>
              <div className="p-6">
                <ul className="space-y-2">
                  {nivel.subjects.map((subject, idx) => (
                    <li key={idx} className="flex items-center">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                      {subject}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-10">
          {[
            {
              title: 'Metode de Predare',
              description:
                'Folosim o combinație de metode tradiționale și moderne pentru a răspunde diferitelor stiluri de învățare.',
              icon: '📚',
            },
            {
              title: 'Resurse Educaționale',
              description:
                'Săli de clasă digitale, module interactive de învățare și acces la platforme educaționale online.',
              icon: '💻',
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-xl p-8 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
              data-aos="fade-up"
              data-aos-delay={index * 150}
            >
              <div className="flex items-center mb-4">
                <span className="text-4xl mr-4">{item.icon}</span>
                <h3 className="text-2xl font-bold text-blue-800">
                  {item.title}
                </h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Curriculum
