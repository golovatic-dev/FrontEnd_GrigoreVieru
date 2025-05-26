import React from 'react'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt'
import { Link } from 'react-router-dom'

function Main3() {
  return (
    <div className="parallax-container">
      <div
        className="parallax-bg d-flex justify-content-center align-items-center bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://cdn.pixabay.com/photo/2015/09/18/18/56/classroom-944493_960_720.jpg')", // imagine generică de școală
        }}
      ></div>
      <div className="container-fluid bg-dark position-absolute text-light d-flex justify-content-center align-items-center h-100 w-100 bg-opacity-25">
        <div className="container">
          <div className="w-100 h-100 grid grid-cols-1 lg:grid-cols-2">
            <div className="flex flex-col justify-center">
              <h1 className="fw-bold text-2xl lg:text-4xl mb-4">
                Gimnaziul „Grigore Vieru”
              </h1>
              <p className="text-lg lg:text-2xl">
                Gimnaziul „Grigore Vieru” oferă elevilor o educație modernă și
                un mediu prietenos de învățare. Ne mândrim cu o comunitate
                activă, profesori dedicați și activități extracurriculare care
                sprijină dezvoltarea armonioasă a fiecărui copil.
              </p>
              <span>
                <Link
                  to="/despre"
                  className="btn shadow-lg mt-5 fw-bold rounded-0 btn-primary"
                >
                  Află mai mult <ArrowRightAltIcon />
                </Link>
              </span>
            </div>

            <div className="hidden lg:flex justify-center">
              <img
                src="https://cdn.pixabay.com/photo/2016/03/27/21/16/school-1280028_960_720.jpg" // imagine alternativă reprezentativă
                alt="Imagine Gimnaziu"
                className="shadow-lg rounded-4 w-[700px] h-[400px]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Main3
