import React from 'react'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div className="bg-gradient-to-b from-blue-50 to-white py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h1 className="text-5xl font-bold mb-6 text-blue-800">
            Gimnaziul Grigore Vieru
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Formăm minți tinere și pregătim liderii de mâine din 1972
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between mb-20">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h2 className="text-3xl font-semibold mb-6 text-blue-700">
              Despre Noi
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              La Gimnaziul Grigore Vieru, ne dedicăm formării unui mediu
              educațional care promovează excelența academică, creativitatea și
              dezvoltarea armonioasă a elevilor. Cu dotări moderne și un
              colectiv didactic pasionat, le oferim elevilor noștri sprijinul
              necesar pentru a-și atinge întregul potențial.
            </p>
          </div>
          <div className="md:w-1/2 md:pl-10">
            <img
              src="https://encyclopediaofarkansas.net/wp-content/uploads/2022/08/SpringdaleHS2_f.jpg"
              alt="Campusul gimnaziului"
              className="w-full h-auto object-cover rounded-lg shadow-2xl"
            />
          </div>
        </div>

        <div className="bg-white p-10 rounded-xl shadow-lg">
          <h2 className="text-3xl font-semibold mb-6 text-blue-700 text-center">
            Moștenirea Noastră
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Încă din 1972, Gimnaziul Grigore Vieru s-a dezvoltat într-o
            instituție de învățământ apreciată pentru angajamentul său față de
            educația de calitate. Am evoluat constant, integrând metode moderne
            de predare și adaptând programa școlară pentru a răspunde nevoilor
            elevilor noștri. Mediul nostru cald și dinamic de învățare ne-a adus
            o reputație durabilă.
          </p>
        </div>

        <div className="mt-20 text-center">
          <Link
            to="/events"
            className="bg-blue-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition duration-300"
          >
            Descoperă Programele Noastre
          </Link>
        </div>
      </div>
    </div>
  )
}

export default About
