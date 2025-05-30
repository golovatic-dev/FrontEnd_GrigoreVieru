import React, { useState } from 'react'

import { Link } from 'react-router-dom'
import { Menu } from '@mui/icons-material'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <nav className="w-[100vw]">
      <div className="container-fluid ">
        <div className="row hidden lg:flex lg:items-center lg:justify-between p-3 text-white bg-gradient-to-br from-indigo-800 to-gray-800">
          <div className="col-6 d-flex items-center">
            <h5 className="fw-bold ">
              Site-ul școlii gimnaziale din Satul Sărata Veche
            </h5>
          </div>
          <div className="col-6 d-flex justify-content-end">
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
            <Link to="/" className="navbar-brand flex items-center">
              <img
                src="src/assets/logo.png"
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
                <Link to="/" className="nav-item">
                  <a className="nav-link " aria-current="page" href="#">
                    ACASĂ
                  </a>
                </Link>
                <Link to="/aboutus" className="nav-item me-3">
                  <a className="nav-link" href="#">
                    DESPRE NOI
                  </a>
                </Link>
                <Link to="/faculty" className="nav-item">
                  <a className="nav-link " aria-current="page" href="#">
                    ACTIVITĂȚI
                  </a>
                </Link>
                <Link to="/students" className="nav-item">
                  <a className="nav-link " aria-current="page" href="#">
                    ELEVI
                  </a>
                </Link>
                <Link to="/events" className="nav-item me-3">
                  <a className="nav-link"> EVENIMENTE</a>
                </Link>
                <Link to="/curriculum" className="nav-item me-3">
                  <a className="nav-link"> ACADEMICE</a>
                </Link>
                <Link to="/moto" className="nav-item me-3">
                  <a className="nav-link" href="#">
                    MISIUNI
                  </a>
                </Link>
                <Link to="/campus" className="nav-item me-3">
                  <a className="nav-link" href="#">
                    OBSERVĂ
                  </a>
                </Link>

                <li className="nav-item  me-3">
                  <button className="btn  shadow btn-primary">
                    <Link
                      to="/contact"
                      className="text-light text-decoration-none"
                    >
                      <span>Admitere și Contact</span>
                    </Link>
                  </button>
                </li>
              </ul>
              <div className="d-lg-none d-block">
                <Menu
                  className="fw-bold fs-1 cursor-pointer "
                  onClick={() => setIsOpen(true)}
                />
              </div>
              <div
                className={`fixed top-0 right-0 h-full bg-gray-800 text-white p-4 w-64 transform ${
                  isOpen ? 'translate-x-0' : 'translate-x-full'
                } transition-transform duration-300 ease-in-out z-50`}
              >
                <div className="cursor-pointer text-2xl" onClick={toggleMenu}>
                  &times;
                </div>
                <ul className="mt-8 space-y-4 flex flex-col gap-3">
                  <Link to="/">
                    <a href="#" className="text-white">
                      ACASĂ
                    </a>
                  </Link>
                  <Link to="/aboutus">
                    <a href="#" className="text-white">
                      DESPRE NOI
                    </a>
                  </Link>
                  <Link to="/faculty">
                    <a href="#" className="text-white">
                      ACTIVITĂȚI
                    </a>
                  </Link>
                  <Link to="/students">
                    <a href="#" className="text-white">
                      ELEVI
                    </a>
                  </Link>
                  <Link to="/events">
                    <a href="#" className="text-white">
                      EVEMINEMTE
                    </a>
                  </Link>
                  <Link to="/curriculum">
                    <a href="#" className="text-white">
                      ACADEMICE
                    </a>
                  </Link>
                  <Link to="/moto">
                    <a href="#" className="text-white">
                      MISIUNE
                    </a>
                  </Link>
                  <Link to="/campus">
                    <a href="#" className="text-white">
                      OBSERVĂ
                    </a>
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
