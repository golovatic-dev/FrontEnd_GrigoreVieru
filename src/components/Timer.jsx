import React from 'react'

function Timer() {
  return (
    <div className="mt-3 mb-3 p-3 lg:p-5  text-light bg-gradient-to-br from-indigo-800 to-gray-800">
      <div className="container gap-3 lg:gap-0 flex flex-col lg:flex-row justify-around lg:p-5 p-4 items-center">
        <div className="flex flex-col lg:gap-5 gap-3 ">
          <span className="text-small  lg:text-2xl ">
            Evenimentele din 27 și 28 mai 2025
          </span>
          <span className="text-lg hidden lg:block  lg:text-4xl lg:w-[400px] w-auto font-bold">
            Gimnaziul Grigore Vieru <br />
            Expoziția Științifică Anuală
          </span>
        </div>
        <div className="flex justify-start items-center">
          <img src="src/assets/logo.png" className="w-[300px]" />
        </div>
      </div>
    </div>
  )
}

export default Timer
