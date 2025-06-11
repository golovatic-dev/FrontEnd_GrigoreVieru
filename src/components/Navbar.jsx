import React, { useState, useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

import { Link } from 'react-router-dom'
import { Menu } from '@mui/icons-material'
import { useLocation } from 'react-router-dom'
import './styles/Navbar.css'
import logo from '../assets/logo.png'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }
  const location = useLocation()

  useEffect(() => {
    AOS.init({ once: true })
  }, [])

  return (
    <nav className="w-[100vw]">
      <div className="container-fluid ">
        <div
          className="row hidden lg:flex lg:items-center lg:justify-between p-3 text-white bg-gradient-to-br from-indigo-800 to-gray-800"
          data-aos="fade-down"
          data-aos-delay="0"
        >
          <div
            className="col-6 d-flex items-center"
            data-aos="fade-right"
            data-aos-delay="100"
          >
            <h5 className="fw-bold ">
              Site-ul școlii gimnaziale din Satul Sărata Veche
            </h5>
          </div>
          <div
            className="col-6 d-flex justify-content-end"
            data-aos="fade-left"
            data-aos-delay="200"
          >
            <a
              href="https://www.linkedin.com/in/daniel-golovatic-8621a5308/"
              target="_blank"
              className="btn shadow text-light fw-bold btn-sm btn-primary ms-2 me-2"
            >
              Visit My LinkedIn Profile
            </a>
            <span className="d-flex justify-content-safe"></span>
          </div>
        </div>

        <div className="lg:h-fit p-0 row navbar navbar-expand-lg d-flex bg-light ">
          <div className="container-fluid ">
            <Link
              to="/"
              className="navbar-brand flex items-center"
              data-aos="fade-right"
              data-aos-delay="300"
            >
              <img
                src={logo}
                alt=""
                className="navbar-brand rounded-full  object-fill  w-[50px] lg:w-[80px]  "
              />

              <div className=" flex-col justify-center hidden lg:flex">
                <span className="font-bold ">Gimnaziul Grigore Vieru</span>
                <span className="small text-gray-500">Sărata Veche</span>
              </div>
              <span className="lg:hidden block text-sm">
                Gimnaziul Grigore Vieru
              </span>
            </Link>

            <div className="flex " id="navbarNav">
              <ul className="navbar-nav hidden lg:flex align-items-center ">
                <Link
                  to="/"
                  className={`nav-item nav-link ${
                    location.pathname === '/' ? 'nav-active' : ''
                  }`}
                  data-aos="fade-left"
                  data-aos-delay="0"
                >
                  ACASĂ
                </Link>
                <Link
                  to="/aboutus"
                  className={`nav-item me-3 nav-link ${
                    location.pathname === '/aboutus' ? 'nav-active' : ''
                  }`}
                  data-aos="fade-left"
                  data-aos-delay="100"
                >
                  DESPRE NOI
                </Link>
                <Link
                  to="/faculty"
                  className={`nav-item nav-link ${
                    location.pathname === '/faculty' ? 'nav-active' : ''
                  }`}
                  data-aos="fade-left"
                  data-aos-delay="200"
                >
                  ECHIPA
                </Link>
                <Link
                  to="/students"
                  className={`nav-item nav-link ${
                    location.pathname === '/students' ? 'nav-active' : ''
                  }`}
                  data-aos="fade-left"
                  data-aos-delay="300"
                >
                  ELEVI
                </Link>
                <Link
                  to="/events"
                  className={`nav-item me-3 nav-link ${
                    location.pathname === '/events' ? 'nav-active' : ''
                  }`}
                  data-aos="fade-left"
                  data-aos-delay="400"
                >
                  EVENIMENTE
                </Link>
                <Link
                  to="/curriculum"
                  className={`nav-item me-3 nav-link ${
                    location.pathname === '/curriculum' ? 'nav-active' : ''
                  }`}
                  data-aos="fade-left"
                  data-aos-delay="500"
                >
                  ACADEMICE
                </Link>
                <Link
                  to="/moto"
                  className={`nav-item me-3 nav-link ${
                    location.pathname === '/moto' ? 'nav-active' : ''
                  }`}
                  data-aos="fade-left"
                  data-aos-delay="600"
                >
                  MISIUNI
                </Link>
                <Link
                  to="/campus"
                  className={`nav-item me-3 nav-link ${
                    location.pathname === '/campus' ? 'nav-active' : ''
                  }`}
                  data-aos="fade-left"
                  data-aos-delay="700"
                >
                  OBSERVĂ
                </Link>
                <li
                  className="nav-item me-3 contactListBtn"
                  data-aos="fade-left"
                  data-aos-delay="800"
                >
                  <button className="btn shadow btn-primary">
                    <Link
                      to="/contact"
                      className="text-light text-decoration-none"
                    >
                      <span>Admitere și Contact</span>
                    </Link>
                  </button>
                </li>
              </ul>
              <div className="d-lg-none d-block menu-button">
                <Menu
                  className="fw-bold fs-1 cursor-pointer "
                  onClick={() => setIsOpen(true)}
                />
              </div>
              {/* Mobile nav: no AOS attributes here */}
              <div
                className={`fixed top-0 right-0 h-full bg-gray-800 text-white p-4 w-64 transform ${
                  isOpen ? 'translate-x-0' : 'translate-x-full'
                } transition-transform duration-300 ease-in-out z-50`}
              >
                <div className="cursor-pointer text-2xl" onClick={toggleMenu}>
                  &times;
                </div>
                <ul className="mt-8 space-y-4 flex flex-col gap-3">
                  <Link to="/" className="text-white">
                    ACASĂ
                  </Link>
                  <Link to="/aboutus" className="text-white">
                    DESPRE NOI
                  </Link>
                  <Link to="/faculty" className="text-white">
                    ACTIVITĂȚI
                  </Link>
                  <Link to="/students" className="text-white">
                    ELEVI
                  </Link>
                  <Link to="/events" className="text-white">
                    EVEMINEMTE
                  </Link>
                  <Link to="/curriculum" className="text-white">
                    ACADEMICE
                  </Link>
                  <Link to="/moto" className="text-white">
                    MISIUNE
                  </Link>
                  <Link to="/campus" className="text-white">
                    OBSERVĂ
                  </Link>
                  <li>
                    <button className="btn bg-blue-500 text-white">
                      <Link to="/contact" className="text-white">
                        <span>CONTACTEAZĂ-NE</span>
                      </Link>
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
