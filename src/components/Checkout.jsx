import React from 'react'

import qrcode from '../assets/qr.png'
import { Link } from 'react-router-dom'

function Checkout() {
  return (
    <div className="pb-5 bg-body-secondary d-flex  flex-column justify-content-center pt-5 align-items-center ">
      <h1 className="lg:text-start text-center mb-5 lg:text-5xl text-2xl font-bold ">
        Exploră Expoziția Noastră Anuală
      </h1>
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-3 lg:gap-[100px]">
        <div className="w-full flex flex-col gap-5 justify-center items-center ">
          <img
            src={qrcode}
            alt=""
            className="w-[300px] h-[300px] lg:w-[400px] lg:h-[400px] shadow-lg rounded-5"
          />
        </div>
        3
        <div className="w-full flex flex-col gap-2 lg:gap-5 justify-center items ">
          <div className="flex text-left flex-col lg:p-0 p-3">
            <span className="text-xl lg:text-3xl font-bold lg:mb-3">
              Premii Speciale de Recunoaștere
            </span>
            <span className="lg:text-2xl">
              Prezentare Remarcabilă: 2000 MDL
            </span>
            <span className="lg:text-2xl">
              Cel Mai Creativ Afișaj: 1,100 MDL
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Checkout
