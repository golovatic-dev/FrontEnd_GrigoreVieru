import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import director_img from '../assets/director.jpg'

function Main1() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true })
  }, [])

  return (
    <div
      className="lg:p-5 p-3 d-flex mt-4 mb-5 shadow bg-light flex-column align-items-center"
      style={{ backgroundColor: 'whitesmoke' }}
      data-aos="fade-up"
    >
      <div
        className="d-flex flex-column fw-bolder justify-content-center align-items-center"
        data-aos="fade-down"
      >
        <div className="flex lg:flex-row flex-col items-center justify-center gap-2 w-full lg:p-5 text-center">
          <span
            className="text-dark mt-3 text-2xl lg:text-5xl"
            data-aos="fade-right"
          >
            Viziunea de azi
          </span>
          <span
            className="text-primary text-2xl lg:text-5xl lg:mt-3"
            data-aos="fade-left"
            data-aos-delay="200"
          >
            Tehnologia de mâine
          </span>
        </div>
      </div>
      {/* <hr className="w-full mt-3" /> */}

      <div className="container pb-5 w-full grid grid-cols-1 lg:grid-cols-1 mt-5 relative">
        {/* <img
          src="https://www.creativefabrica.com/wp-content/uploads/2023/02/04/Ornament-frame-PNG-Graphics-59934430-1-1-580x390.png"
          alt=""
          className="absolute w-full h-[35rem] top-[-50px] lg:block hidden "
        /> */}
        <div
          className="bg-cover bg-center lg:p-[3rem] container lg:w-[1000px]"
          data-aos="zoom-in"
          data-aos-delay="300"
        >
          <div className="flex items-center gap-3 justify-start ">
            <img
              src={director_img}
              className="shadow rounded-full w-[80px] lg:w-[90px] h-[80px] lg:h-[90px] object-cover"
              alt="Director"
              data-aos="flip-left"
              data-aos-delay="400"
            />
            <div
              className="flex flex-col"
              data-aos="fade-up"
              data-aos-delay="500"
            >
              <span className="lg:text-2xl text-xl font-bold">
                Railean Aliona
              </span>
              <span className="text-sm text-grey-500">Directoare</span>
            </div>
          </div>
          <p
            className="mt-4 text-justify text-lg"
            data-aos="fade-up"
            data-aos-delay="600"
          >
            Stimată doamnă / Stimate domn, <br />
            „Bine ați venit la Gimnaziul „Grigore Vieru” din Sărata Veche – un
            loc în care educația de calitate, dezvoltarea personală și spiritul
            de echipă se întâlnesc. În cadrul gimnaziului nostru, punem accent
            pe formarea armonioasă a fiecărui elev, încurajând performanța
            academică, gândirea creativă și responsabilitatea civică. Avem o
            echipă dedicată de cadre didactice și un mediu prietenos, unde
            fiecare copil este valorificat și sprijinit în dezvoltarea sa. Vă
            invit să explorați pagina noastră web pentru a descoperi comunitatea
            noastră educațională și realizările elevilor noștri. Împreună,
            construim un viitor mai bun pentru fiecare copil.”
          </p>
        </div>
      </div>
    </div>
  )
}

export default Main1
