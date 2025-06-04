import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

function Timer() {
  useEffect(() => {
    AOS.init({ once: true })
  }, [])

  return (
    <div className="mt-3 mb-3 p-3 lg:p-5  text-light bg-gradient-to-br from-indigo-800 to-gray-800">
      <div
        className="container gap-3 lg:gap-0 flex flex-col lg:flex-row justify-around lg:p-5 p-4 items-center"
        data-aos="fade-up"
        data-aos-delay="0"
      >
        <div
          className="flex flex-col lg:gap-5 gap-3 "
          data-aos="fade-right"
          data-aos-delay="100"
        >
          <span className="text-small  lg:text-2xl ">
            Evenimentele din 27 și 28 mai 2025
          </span>
          <span className="text-lg hidden lg:block  lg:text-4xl lg:w-[400px] w-auto font-bold">
            Gimnaziul Grigore Vieru <br />
            Expoziția Științifică Anuală
          </span>
        </div>
        <div
          className="flex justify-start items-center"
          data-aos="fade-left"
          data-aos-delay="200"
        >
          <img src="src/assets/logo_light.png" className="w-[300px]" />
        </div>
      </div>
    </div>
  )
}

export default Timer
