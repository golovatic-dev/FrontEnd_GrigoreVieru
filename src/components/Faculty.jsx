import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

const images = import.meta.glob('../assets/teachers/*.{jpg,png}', {
  eager: true,
  as: 'url',
})

const aboutData = [
  {
    name: 'Aliona Railean',
    description: 'Director',
    image: 'd_aliona.jpg',
    quote:
      'Bine ați venit în comunitatea noastră școlară! Ne dedicăm creării unui mediu prietenos care promovează dezvoltarea academică și personală.',
  },
  {
    name: 'Zinaida Țurcan',
    description: 'Director adjunct',
    image: 'd_zinaida.jpg',
    quote:
      'Împreună putem atinge excelența. Să colaborăm pentru a construi un mediu școlar prosper.',
  },
  {
    name: 'Svetlana Golovatic',
    description: 'Profesor de limba română',
    image: 'd_svetlana.jpg',
    quote:
      'Limba română este sufletul culturii noastre. Să o explorăm și să o iubim împreună.',
  },
  {
    name: 'Angela Railean',
    description: 'Profesor de matematică și informatică',
    image: 'd_angela.jpg',
    quote:
      'Matematica și informatica ne învață să gândim logic și creativ. Împreună descoperim soluții pentru orice provocare!',
  },
  {
    name: 'Nicolae Popa',
    description: 'Profesor de fizică și educație tehnologică',
    image: 'teacher_male.png',
    quote:
      'Știința ne deschide uși către înțelegerea lumii. Să explorăm universul cunoașterii împreună.',
  },
  {
    name: 'Maria Balan',
    description: 'Profesor de matematică',
    image: 'teacher.png',
    quote:
      'Matematica dezvoltă gândirea logică și creativitatea. Să rezolvăm împreună misterele numerelor!',
  },
  {
    name: 'Ion Cebotari',
    description: 'Profesor de istorie',
    image: 'teacher_male.png',
    quote:
      'Istoria ne ajută să înțelegem cine suntem. Să descoperim împreună trecutul nostru bogat.',
  },
  {
    name: 'Elena Rusu',
    description: 'Profesor de limba engleză',
    image: 'teacher.png',
    quote:
      'Limba engleză deschide porți către lume. Învățăm împreună să comunicăm global!',
  },
  {
    name: 'Vasile Munteanu',
    description: 'Profesor de educație fizică',
    image: 'teacher_male.png',
    quote:
      'Mișcarea este cheia sănătății. Să fim activi și plini de energie în fiecare zi!',
  },
  {
    name: 'Natalia Grosu',
    description: 'Profesor de biologie',
    image: 'teacher.png',
    quote:
      'Biologia ne învață să prețuim viața în toate formele ei. Să explorăm natura împreună!',
  },
  {
    name: 'Sergiu Rotaru',
    description: 'Profesor de geografie',
    image: 'teacher_male.png',
    quote:
      'Geografia ne arată frumusețea și diversitatea lumii. Să călătorim cu mintea și inima!',
  },
  {
    name: 'Tatiana Cazacu',
    description: 'Profesor de chimie',
    image: 'teacher.png',
    quote:
      'Chimia este magia științei. Să descoperim reacțiile fascinante ale lumii!',
  },
  {
    name: 'Olesea Lungu',
    description: 'Profesor de informatică',
    image: 'teacher.png',
    quote:
      'Tehnologia modelează viitorul. Învățăm să programăm și să inovăm împreună!',
  },
  {
    name: 'Mihai Ursu',
    description: 'Profesor de educație civică',
    image: 'teacher_male.png',
    quote:
      'Educația civică formează cetățeni responsabili. Să construim o societate mai bună!',
  },
  {
    name: 'Veronica Sârbu',
    description: 'Profesor de arte plastice',
    image: 'teacher.png',
    quote:
      'Arta ne ajută să exprimăm ceea ce simțim. Să colorăm lumea cu imaginație!',
  },
]

const aboutDataWithImages = aboutData.map((item) => ({
  ...item,
  image: images[`../assets/teachers/${item.image}`],
}))

function Faculty() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true })
  }, [])

  const director = aboutDataWithImages.find(
    (member) => member.description === 'Director'
  )
  const adjunct = aboutDataWithImages.find(
    (member) => member.description === 'Director adjunct'
  )
  const otherFaculty = aboutDataWithImages.filter(
    (member) => !['Director', 'Director adjunct'].includes(member.description)
  )

  return (
    <div className="container mx-auto px-4 py-16 overflow-hidden">
      <h1
        className="text-4xl font-bold text-center mb-16 text-indigo-800"
        data-aos="fade-right"
        data-aos-duration="1200"
      >
        Cadrele Didactice
      </h1>

      <div className="grid md:grid-cols-2 gap-8 mb-16">
        {director && (
          <div
            className="rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105"
            data-aos="fade-up"
          >
            <div className="md:flex">
              <div className="md:flex-shrink-0">
                <img
                  className="h-full w-full object-cover md:w-48"
                  src={director.image}
                  alt={director.name}
                />
              </div>
              <div className="p-8">
                <div className="uppercase tracking-wide text-sm text-blue-600 font-semibold">
                  {director.description}
                </div>
                <h2 className="block mt-1 text-2xl leading-tight font-medium text-black">
                  {director.name}
                </h2>
                <p className="mt-2 text-gray-500">{director.quote}</p>
              </div>
            </div>
          </div>
        )}

        {adjunct && (
          <div
            className="rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className="md:flex">
              <div className="md:flex-shrink-0">
                <img
                  className="h-full w-full object-cover md:w-48"
                  src={adjunct.image}
                  alt={adjunct.name}
                />
              </div>
              <div className="p-8">
                <div className="uppercase tracking-wide text-sm text-green-600 font-semibold">
                  {adjunct.description}
                </div>
                <h2 className="block mt-1 text-2xl leading-tight font-medium text-black">
                  {adjunct.name}
                </h2>
                <p className="mt-2 text-gray-500">{adjunct.quote}</p>
              </div>
            </div>
          </div>
        )}
      </div>

      {otherFaculty.length > 0 && (
        <div>
          <h2
            className="text-3xl font-bold mb-8 text-center text-indigo-800"
            data-aos="fade-left"
            data-aos-duration="1000"
          >
            Profesori Dedicati
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {otherFaculty.map((data, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105"
                data-aos="fade-up"
                data-aos-delay={100 * (index + 1)}
              >
                <img
                  className="h-56 w-full object-cover object-top"
                  src={data.image}
                  alt={data.name}
                />
                <div className="p-6">
                  <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                    {data.description}
                  </div>
                  <h3 className="mt-1 text-xl leading-tight font-medium text-black">
                    {data.name}
                  </h3>
                  <p className="mt-2 text-gray-500">{data.quote}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default Faculty
