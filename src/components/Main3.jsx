import React from 'react'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt'
import { Link } from 'react-router-dom'
import gymnasium_img from '../assets/gymnasium.png'
import main3_img from '../assets/main3_bg.png'
function Main3() {
  return (
    <div className="parallax-container">
      <div
        className="parallax-bg   d-flex justify-content-center align-items-center  bg-center bg-no-repeat "
        style={{
          backgroundImage: `url(${main3_img})`,
        }}
      ></div>
      <div className="container-fluid bg-dark position-absolute text-light d-flex justify-content-center align-items-center h-100 w-100 bg-opacity-25 ">
        <div className=" container ">
          <div className="w-100 h-100 grid  grid-cols-1 lg:grid-cols-2 ">
            <div
              className=" flex flex-col   justify-center"
              data-aos="fade-right"
              data-aos-delay="0"
            >
              <h1
                className="fw-bold text-2xl lg:text-4xl  mb-4"
                data-aos="fade-down"
                data-aos-delay="100"
              >
                {' '}
                Gimnaziul „ Grigore Vieru ”
              </h1>
              <p
                className="text-lg lg:text-2xl "
                data-aos="fade-up"
                data-aos-delay="200"
              >
                {' '}
                Gimnaziul „Grigore Vieru” oferă elevilor o educație modernă și
                un mediu prietenos de învățare. Ne mândrim cu o comunitate
                activă, profesori dedicați și activități extracurriculare care
                sprijină dezvoltarea armonioasă a fiecărui copil.
              </p>
              <span data-aos="fade-up" data-aos-delay="300">
                <Link
                  to="/college"
                  className="btn shadow-lg  mt-5 fw-bold rounded-0 btn-primary"
                >
                  {' '}
                  Află mai mult
                  <ArrowRightAltIcon />{' '}
                </Link>
              </span>
            </div>

            <div
              className="hidden lg:flex justify-center"
              data-aos="fade-left"
              data-aos-delay="400"
            >
              <img
                src={gymnasium_img}
                alt=""
                className="shadow-lg  rounded-4 w-[700px] h-[400px]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Main3
