import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram'
import TwitterIcon from '@mui/icons-material/Twitter'
import FacebookIcon from '@mui/icons-material/Facebook'

function Footer() {
  return (
    <footer className="text-center text-lg-start text-muted">
      <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
        <div className="me-5 d-none d-lg-block"></div>
        <div className=""></div>
      </section>
      <section className="">
        <div className="container text-center text-md-start mt-5">
          <div className="row mt-3">
            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
                Gimnaziul Sarata Veche
              </h6>
              <p>
                Adresă: <br />
                Sărata Veche, <br />
                Fălești, <br />
                5947.
              </p>
            </div>
            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Contactați-ne</h6>
              <p>Email: contact@grigorevieru.edu</p>
              <h6 className="text-uppercase fw-bold mb-3 mt-3">Urmăriți-ne</h6>
              <a href="" target="_blank" className="text-3xl text-pink-700">
                <InstagramIcon />
              </a>
              <a
                href=""
                target="_blank"
                className="text-3xl text-blue-500 ml-3"
              >
                <TwitterIcon />
              </a>
              <a
                href=""
                target="_blank"
                className="text-3xl text-blue-700 ml-3"
              >
                <FacebookIcon />
              </a>
            </div>
            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Suport</h6>
              <div className="flex flex-col gap-3">
                <p>
                  Nume: Golovatic Daniel <br />
                  Telefon: +373 62 157 668
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div
        className="text-center p-4"
        style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}
      >
        © 2024 Gimnaziul Sărata Veche. Toate drepturile rezervate.
      </div>
    </footer>
  )
}

export default Footer
