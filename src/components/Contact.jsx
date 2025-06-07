import React, { useRef, useEffect } from 'react'
import emailjs from '@emailjs/browser'
import { useNavigate } from 'react-router-dom'
import { AccessTime, LocationOn, GetApp } from '@mui/icons-material'
import AOS from 'aos'
import 'aos/dist/aos.css'

function Contact() {
  const form = useRef()
  const navigate = useNavigate()

  useEffect(() => {
    AOS.init({ duration: 900, once: true })
  }, [])

  const sendEmail = async (e) => {
    e.preventDefault()
    try {
      await emailjs.sendForm(
        'service_1wsdsbs',
        'template_2jsjr16',
        form.current,
        'xFJO3SgSgTXZVEesd'
      )
      await emailjs.sendForm(
        'service_1wsdsbs',
        'template_t8d4nts',
        form.current,
        'xFJO3SgSgTXZVEesd'
      )
      alert('Mesajul a fost trimis cu succes!')
      navigate('/home')
    } catch (error) {
      alert('A apărut o eroare la trimiterea mesajului.')
      console.error(error)
    }
  }

  return (
    <div
      className="bg-gradient-to-b from-blue-50 to-white min-h-screen"
      data-aos="fade-in"
      data-aos-duration="1200"
    >
      <div
        className="relative h-[90vh] bg-cover bg-center"
        style={{
          backgroundImage: "url('src/assets/gymnasium.png')",
        }}
        data-aos="zoom-in"
        data-aos-duration="1200"
      >
        <div
          className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center"
          data-aos="fade"
          data-aos-delay="200"
        >
          <div
            className="container mx-auto px-6 mt-5 lg:mt-0 lg:mb-0 mb-5"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <form
              ref={form}
              onSubmit={sendEmail}
              className="bg-white bg-opacity-95 max-w-2xl mx-auto p-10 rounded-3xl shadow-2xl transform hover:scale-105 transition duration-300"
              data-aos="fade-up"
              data-aos-delay="600"
            >
              <h2
                className="text-5xl font-extrabold mb-8 text-center text-blue-800 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400"
                data-aos="fade-down"
                data-aos-delay="800"
              >
                Contactează-ne
              </h2>
              <input
                type="email"
                name="email"
                placeholder="Adresa ta de email"
                className="w-full p-4 mb-6 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
                required
                data-aos="fade-right"
                data-aos-delay="1000"
              />
              <textarea
                name="message"
                placeholder="Mesajul tău"
                className="w-full p-4 mb-6 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
                rows="5"
                required
                data-aos="fade-left"
                data-aos-delay="1200"
              ></textarea>
              <button
                type="submit"
                className="w-full py-4 bg-gradient-to-r from-blue-500 to-teal-400 text-white rounded-lg shadow-lg hover:from-blue-600 hover:to-teal-500 transition duration-300 text-lg font-semibold transform hover:scale-105"
                data-aos="zoom-in"
                data-aos-delay="1400"
              >
                Trimite Mesajul
              </button>
            </form>
          </div>
        </div>
      </div>

      <div
        className="container mx-auto py-20 px-6"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        <h2
          className="text-5xl font-extrabold mb-16 text-center text-blue-900 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400"
          data-aos="fade-down"
          data-aos-delay="400"
        >
          Ia legătura cu noi
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div
            className="p-8 bg-white shadow-xl rounded-3xl hover:shadow-2xl transition duration-300 transform hover:scale-105 text-center"
            data-aos="fade-right"
            data-aos-delay="600"
          >
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
          <div
            className="p-8 bg-white shadow-xl rounded-3xl hover:shadow-2xl transition duration-300 transform hover:scale-105 text-center"
            data-aos="fade-left"
            data-aos-delay="800"
          >
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

      <div
        className="bg-blue-50 py-20 px-6"
        data-aos="fade-up"
        data-aos-delay="400"
      >
        <div className="container mx-auto">
          <h2
            className="text-5xl font-extrabold text-center mb-16 text-blue-900 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400"
            data-aos="fade-down"
            data-aos-delay="600"
          >
            Informații Admitere
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div
              className="p-8 bg-white shadow-xl rounded-3xl hover:shadow-2xl transition duration-300 transform hover:scale-105"
              data-aos="flip-left"
              data-aos-delay="800"
            >
              <h3 className="text-2xl font-semibold mb-4 text-blue-800">
                Procesul de Admitere
              </h3>
              <p className="text-gray-600 mb-6">
                Formularele de înscriere pot fi descărcate online. Formularul
                completat, împreună cu documentele necesare, se depun la
                secretariat.
              </p>
              <a
                href="src/assets/apply_form/Formular_Inscriere_Admitere_Gimnaziul_Grigore_Vieru.docx"
                target="_blank"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-teal-400 text-white rounded-full hover:from-blue-600 hover:to-teal-500 transition duration-300 transform hover:scale-105"
                data-aos="zoom-in"
                data-aos-delay="1000"
              >
                <GetApp className="mr-2" />
                Descarcă formularul
              </a>
            </div>
            <div
              className="p-8 bg-white shadow-xl rounded-3xl hover:shadow-2xl transition duration-300 transform hover:scale-105"
              data-aos="flip-up"
              data-aos-delay="1000"
            >
              <h3 className="text-2xl font-semibold mb-4 text-blue-800">
                Criterii
              </h3>
              <p className="text-gray-600">
                Admiterea se face în baza performanțelor școlare și a locurilor
                disponibile. Pot fi organizate teste de evaluare pentru anumite
                clase.
              </p>
            </div>
            <div
              className="p-8 bg-white shadow-xl rounded-3xl hover:shadow-2xl transition duration-300 transform hover:scale-105"
              data-aos="flip-right"
              data-aos-delay="1200"
            >
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

      <div
        className="container mx-auto py-20 px-6"
        data-aos="fade-up"
        data-aos-delay="600"
      >
        <h2
          className="text-5xl font-extrabold text-center mb-16 text-blue-900 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400"
          data-aos="fade-down"
          data-aos-delay="800"
        >
          Găsește-ne pe hartă
        </h2>
        <div
          className="rounded-3xl overflow-hidden shadow-2xl transform hover:scale-105 transition duration-300"
          data-aos="zoom-in-up"
          data-aos-delay="1000"
        >
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
