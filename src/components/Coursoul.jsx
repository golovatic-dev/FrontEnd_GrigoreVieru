import React from 'react'

function Coursoul() {
  return (
    <div
      id="carouselExampleAutoplaying"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        <div
          className="carousel-item active"
          style={{
            backgroundImage: "url('src/assets/carousel/gimnaziu.png')",
            backgroundRepeat: 'none',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
          }}
        >
          <div className="h-[25rem] lg:h-[40rem]">
            <div className="bg-dark bg-opacity-50 w-100 h-100 d-flex flex-column justify-content-center align-items-center">
              <div className="  d-flex flex-column justify-content-center align-items-center ">
                <h1 className="text-xl lg:text-5xl text-center fw-bold gap-2 flex flex-col lg:flex-row text-light ">
                  <span>Gimnaziul Grigore Vieru</span>
                </h1>
                <h4 className="lg:text-xl text-lg  text-light  mt-3 font-bold">
                  Sărata Veche
                </h4>
              </div>
            </div>
          </div>
        </div>
        <div
          className="carousel-item "
          style={{
            backgroundImage: "url('src/assets/carousel/carousel_1.png')",
            backgroundRepeat: 'none',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
          }}
        >
          <div className="h-[25rem] lg:h-[40rem]">
            <div className="bg-dark bg-opacity-50 w-100 h-100 d-flex flex-column justify-content-center align-items-center ">
              <div className="  d-flex flex-column justify-content-center align-items-center ">
                <h1 className="text-xl lg:text-5xl text-center fw-bold gap-2 flex flex-col lg:flex-row text-light ">
                  <span>Gimnaziul Grigore Vieru</span>
                </h1>
                <h4 className="lg:text-xl text-lg  text-light  mt-3 font-bold">
                  Sărata Veche
                </h4>
              </div>
            </div>
          </div>
        </div>
        <div
          className="carousel-item "
          style={{
            backgroundImage: "url('src/assets/carousel/carousel_2.png')",
            backgroundRepeat: 'none',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
          }}
        >
          <div className="h-[25rem] lg:h-[40rem]">
            <div className="bg-dark bg-opacity-50 w-100 h-100 d-flex flex-column justify-content-center align-items-center">
              <div className="  d-flex flex-column justify-content-center align-items-center ">
                <h1 className="text-xl lg:text-5xl text-center fw-bold gap-2 flex flex-col lg:flex-row text-light ">
                  <span>Gimnaziul Grigore Vieru</span>
                </h1>
                <h4 className="lg:text-xl text-sm  text-light  mt-3 font-bold">
                  Sărata Veche
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button
        className="carousel-control-prev hideen lg:block"
        type="button"
        data-bs-target="#carouselExampleAutoplaying"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Precedent</span>
      </button>
      <button
        className="carousel-control-next hideen lg:block"
        type="button"
        data-bs-target="#carouselExampleAutoplaying"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Următor</span>
      </button>
    </div>
  )
}

export default Coursoul
