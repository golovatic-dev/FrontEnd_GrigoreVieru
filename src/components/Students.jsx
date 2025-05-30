import React from 'react'

const Students = () => {
  return (
    <div className="container mx-auto px-4 py-16 bg-gray-100">
      <h1 className="text-5xl font-bold text-center mb-16 text-indigo-800">
        Viața Elevilor la Gimnaziul Grigore Vieru
      </h1>

      <section className="mb-20 bg-white rounded-xl shadow-lg p-8">
        <h2 className="text-3xl font-semibold mb-6 text-center text-indigo-700">
          Activități Extrașcolare
        </h2>
        <p className="text-xl text-gray-600 text-center mb-8">
          Elevii noștri participă la diverse activități extrașcolare, printre
          care:
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            'Muzică',
            'Dans',
            'Bucătărit',
            'Artă',
            'Sport',
            'Robotică',
            'Lemnărit',
            'Fotografie',
          ].map((activitate, index) => (
            <div
              key={index}
              className="bg-indigo-100 rounded-lg p-4 text-center"
            >
              <span className="text-lg font-medium text-indigo-700">
                {activitate}
              </span>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-20 bg-white rounded-xl shadow-lg p-8">
        <h2 className="text-3xl font-semibold mb-6 text-center text-indigo-700">
          Cercuri și Cluburi
        </h2>
        <p className="text-xl text-gray-600 text-center mb-8">
          Elevii pot participa la diverse cercuri și cluburi pentru a-și explora
          pasiunile:
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            'Cercul literar',
            'Cercul de ecologie',
            'Cercul de astronomie',
            'Clubul de informatică',
          ].map((club, index) => (
            <div
              key={index}
              className="bg-green-100 rounded-lg p-4 text-center"
            >
              <span className="text-lg font-medium text-green-700">{club}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-20">
        <h2 className="text-3xl font-semibold mb-6 text-center text-indigo-700">
          Reușite
        </h2>
        <div className="bg-white p-8 rounded-xl shadow-lg">
          <ul className="space-y-4">
            {[
              {
                name: 'Ion Popescu',
                achievement: 'Câștigător la Olimpiada Națională de Matematică',
              },
              {
                name: 'Elena Rusu',
                achievement: 'Medalie de aur la Campionatul Raional de Înot',
              },
              {
                name: 'Clubul de Robotică',
                achievement: 'Locul I la Concursul Interșcolar de Robotică',
              },
            ].map((item, index) => (
              <li key={index} className="flex items-center">
                <span className="w-3 h-3 bg-yellow-400 rounded-full mr-3"></span>
                <span className="font-semibold text-gray-800">
                  {item.name}:
                </span>
                <span className="ml-2 text-gray-600">{item.achievement}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-semibold mb-6 text-center text-indigo-700">
          Consiliul Elevilor
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              role: 'Președinte',
              name: 'Maria Vasilache',
              grade: 'Clasa a IX-a',
              description:
                'Maria conduce consiliul elevilor cu scopul de a stimula implicarea și succesul școlar.',
            },
            {
              role: 'Vicepreședinte',
              name: 'Andrei Lungu',
              grade: 'Clasa a VIII-a',
              description:
                'Andrei sprijină președintele și coordonează diverse activități ale elevilor.',
            },
            {
              role: 'Secretar',
              name: 'Irina Munteanu',
              grade: 'Clasa a VII-a',
              description:
                'Irina gestionează comunicarea și evidențele consiliului, asigurând buna funcționare.',
            },
          ].map((member, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              <h3 className="text-xl font-semibold text-indigo-700 mb-2">
                {member.role}
              </h3>
              <p className="text-lg text-gray-800 mb-1">{member.name}</p>
              <p className="text-md text-gray-600 mb-4">{member.grade}</p>
              <p className="text-gray-600">{member.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Students
