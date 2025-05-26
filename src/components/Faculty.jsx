import React from 'react'

const aboutData = [
  {
    name: 'Aliona Railean',
    description: 'Director',
    image: 'https://via.placeholder.com/150', // Înlocuiește cu o imagine reală dacă este disponibilă
    quote:
      'Bine ați venit în comunitatea noastră școlară! Ne dedicăm creării unui mediu prietenos care promovează dezvoltarea academică și personală.',
  },
  {
    name: 'Zinaida Țurcan',
    description: 'Director adjunct',
    image: 'https://via.placeholder.com/150', // Înlocuiește cu o imagine reală dacă este disponibilă
    quote:
      'Împreună putem atinge excelența. Să colaborăm pentru a construi un mediu școlar prosper.',
  },
  {
    name: 'Emilia Caras',
    description: 'Profesor de limba română',
    image: 'https://via.placeholder.com/150', // Înlocuiește cu o imagine reală dacă este disponibilă
    quote:
      'Limba română este sufletul culturii noastre. Să o explorăm și să o iubim împreună.',
  },
  {
    name: 'Cristian Lipcanu',
    description: 'Profesor de muzică',
    image: 'https://via.placeholder.com/150', // Înlocuiește cu o imagine reală dacă este disponibilă
    quote:
      'Muzica este limbajul universal al emoțiilor. Să descoperim armonia împreună.',
  },
  {
    name: 'Anatolie Poperecinîi',
    description: 'Profesor de fizică și educație tehnologică',
    image: 'https://via.placeholder.com/150', // Înlocuiește cu o imagine reală dacă este disponibilă
    quote:
      'Știința ne deschide uși către înțelegerea lumii. Să explorăm universul cunoașterii împreună.',
  },
]

function Faculty() {
  const director = aboutData.find((member) => member.description === 'Director')
  const adjunct = aboutData.find(
    (member) => member.description === 'Director adjunct'
  )
  const otherFaculty = aboutData.filter(
    (member) => !['Director', 'Director adjunct'].includes(member.description)
  )

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-center mb-16 text-indigo-800">
        Cadrele Didactice
      </h1>

      <div className="grid md:grid-cols-2 gap-8 mb-16">
        {director && (
          <div className="rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105">
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
          <div className="rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105">
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
          <h2 className="text-3xl font-bold mb-8 text-center text-indigo-800">
            Profesori Dedicati
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {otherFaculty.map((data, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105"
              >
                <img
                  className="h-56 w-full object-cover"
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
