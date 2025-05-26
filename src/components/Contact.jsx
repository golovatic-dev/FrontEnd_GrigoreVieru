import React, { useRef } from 'react'
import emailjs from '@emailjs/browser'
import { useNavigate } from 'react-router-dom'
import { AccessTime, LocationOn, GetApp } from '@mui/icons-material'

function Contact() {
  const form = useRef()
  const navigate = useNavigate()

  const sendEmail = async (e) => {
    e.preventDefault()
    alert('Mesajul a fost trimis cu succes!')
    navigate('/home')
  }

  return (
    <div className="bg-gradient-to-b from-blue-50 to-white min-h-screen">
      <div
        className="relative h-[90vh] bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://springdale.peelschools.org/images/b82d5de2-8621-4a01-9259-2a45f8789911')",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="container mx-auto px-6 mt-5 lg:mt-0 lg:mb-0 mb-5">
            <form
              ref={form}
              onSubmit={sendEmail}
              className="bg-white bg-opacity-95 max-w-2xl mx-auto p-10 rounded-3xl shadow-2xl transform hover:scale-105 transition duration-300"
            >
              <h2 className="text-5xl font-extrabold mb-8 text-center text-blue-800 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">
                Contactează-ne
              </h2>
              <input
                type="email"
                name="email"
                placeholder="Adresa ta de email"
                className="w-full p-4 mb-6 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
                required
              />
              <textarea
                name="message"
                placeholder="Mesajul tău"
                className="w-full p-4 mb-6 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
                rows="5"
                required
              ></textarea>
              <button
                type="submit"
                className="w-full py-4 bg-gradient-to-r from-blue-500 to-teal-400 text-white rounded-lg shadow-lg hover:from-blue-600 hover:to-teal-500 transition duration-300 text-lg font-semibold transform hover:scale-105"
              >
                Trimite Mesajul
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="container mx-auto py-20 px-6">
        <h2 className="text-5xl font-extrabold mb-16 text-center text-blue-900 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">
          Ia legătura cu noi
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="p-8 bg-white shadow-xl rounded-3xl hover:shadow-2xl transition duration-300 transform hover:scale-105 text-center">
            <AccessTime
              className="text-5xl text-blue-500 mb-6 mx-auto "
              style={{ fontSize: '3rem' }}
            />
            <h3 className="text-2xl font-semibold mb-4 text-blue-800">
              Program Birou
            </h3>
            <p className="text-gray-600">Luni - Vineri: 8:00 - 17:00</p>
            <p className="text-gray-600">Sâmbătă: Închis</p>
            <p className="text-gray-600">Duminică: Închis</p>
          </div>
          <div className="p-8 bg-white shadow-xl rounded-3xl hover:shadow-2xl transition duration-300 transform hover:scale-105 text-center">
            <LocationOn
              className="text-5xl text-blue-500 mb-6 mx-auto"
              style={{ fontSize: '3rem' }}
            />
            <h3 className="text-2xl font-semibold mb-4 text-blue-800">
              Ne găsești aici
            </h3>
            <p className="text-gray-600">Sărata Veche, raionul Fălești</p>
          </div>
        </div>
      </div>

      <div className="bg-blue-50 py-20 px-6">
        <div className="container mx-auto">
          <h2 className="text-5xl font-extrabold text-center mb-16 text-blue-900 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">
            Informații Admitere
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="p-8 bg-white shadow-xl rounded-3xl hover:shadow-2xl transition duration-300 transform hover:scale-105">
              <h3 className="text-2xl font-semibold mb-4 text-blue-800">
                Procesul de Admitere
              </h3>
              <p className="text-gray-600 mb-6">
                Formularele de înscriere pot fi descărcate online. Formularul
                completat, împreună cu documentele necesare, se depun la
                secretariat.
              </p>
              <a
                href="https://i.pinimg.com/474x/88/6c/72/886c729c5e6310e29e269031d73a5625.jpg"
                target="_blank"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-teal-400 text-white rounded-full hover:from-blue-600 hover:to-teal-500 transition duration-300 transform hover:scale-105"
              >
                <GetApp className="mr-2" />
                Descarcă formularul
              </a>
            </div>
            <div className="p-8 bg-white shadow-xl rounded-3xl hover:shadow-2xl transition duration-300 transform hover:scale-105">
              <h3 className="text-2xl font-semibold mb-4 text-blue-800">
                Criterii
              </h3>
              <p className="text-gray-600">
                Admiterea se face în baza performanțelor școlare și a locurilor
                disponibile. Pot fi organizate teste de evaluare pentru anumite
                clase.
              </p>
            </div>
            <div className="p-8 bg-white shadow-xl rounded-3xl hover:shadow-2xl transition duration-300 transform hover:scale-105">
              <h3 className="text-2xl font-semibold mb-4 text-blue-800">
                Date Importante
              </h3>
              <ul className="text-gray-600 space-y-2">
                <li>Formulare disponibile: 1 Iunie</li>
                <li>Termen limită: 31 Iunie</li>
                <li>Test de admitere: 15 Iulie</li>
                <li>Rezultate: 30 Iulie</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto py-20 px-6">
        <h2 className="text-5xl font-extrabold text-center mb-16 text-blue-900 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">
          Găsește-ne pe hartă
        </h2>
        <div className="rounded-3xl overflow-hidden shadow-2xl transform hover:scale-105 transition duration-300">
          <iframe
            title="Google Maps"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d851.9392299564225!2d27.737120290261473!3d47.50312698273704!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40cb153e9c55c679%3A0x150cfc698d7d6c20!2sGimnaziul%20%22Grigore%20Vieru%22%20sat%20Sarata%20Veche!5e1!3m2!1sen!2s!4v1748263399481!5m2!1sen!2s"
            frameBorder="0"
            className="w-full h-[500px] border-0"
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  )
}

export default Contact
