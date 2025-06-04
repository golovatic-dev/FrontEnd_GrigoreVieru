import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { Lightbulb, Group, ThumbUp } from '@mui/icons-material'

const Moto = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true })
  }, [])

  return (
    <div className="bg-gradient-to-b from-blue-50 to-white py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h1
            className="text-5xl font-bold mb-6 text-blue-900"
            data-aos="fade-down"
          >
            Misiunea Noastră & Motto
          </h1>
          <p
            className="text-2xl font-semibold text-blue-700"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Provocă-te pe Tine Însuți, Inspiră Excelență
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-16">
          {mottoItems.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-xl p-8 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
              data-aos="zoom-in"
              data-aos-delay={index * 150}
            >
              <div className="flex items-center justify-center mb-6">
                <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center">
                  {React.cloneElement(item.icon, {
                    className: 'text-blue-600 text-3xl',
                  })}
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-blue-800 text-center">
                {item.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        <div
          className="bg-white rounded-xl shadow-xl p-8"
          data-aos="fade-up"
          data-aos-delay="500"
        >
          <h2 className="text-3xl font-bold mb-6 text-blue-800 text-center">
            Misiunea Noastră
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            La{' '}
            <span className="font-semibold text-blue-700">
              Gimnaziul Sărata Veche
            </span>
            , misiunea noastră este să cultivăm un mediu prietenos și incluziv,
            în care fiecare elev de gimnaziu este încurajat să-și atingă
            întregul potențial. Ne angajăm să oferim o educație completă, care
            să promoveze excelența academică, gândirea critică, creativitatea și
            dezvoltarea personală. Printr-o abordare echilibrată a învățării, ne
            propunem să le oferim elevilor noștri abilitățile și valorile
            necesare pentru a deveni cetățeni globali responsabili, empatici și
            de succes.
          </p>
        </div>
      </div>
    </div>
  )
}

const mottoItems = [
  {
    title: 'Inovație',
    description:
      'Ne străduim să cultivăm un spirit de inovație în rândul elevilor noștri, încurajându-i să gândească diferit, să exploreze idei noi și să găsească soluții originale pentru provocările reale ale lumii.',
    icon: <Lightbulb />,
  },
  {
    title: 'Lucru în echipă',
    description:
      'Recunoaștem importanța lucrului în echipă pentru succesul colectiv. Prin proiecte colaborative și activități extracurriculare, dezvoltăm o mentalitate de cooperare în rândul elevilor.',
    icon: <Group />,
  },
  {
    title: 'Calitate',
    description:
      'Calitatea se află în centrul a tot ceea ce facem. De la standardele academice riguroase, la facilitățile moderne și cadrele didactice cu experiență, ne angajăm să oferim o educație de excelență.',
    icon: <ThumbUp />,
  },
]

export default Moto
