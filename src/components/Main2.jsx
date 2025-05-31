import React from 'react'

function Main2() {
  const downloadBroucher = () => {
    const anchor = document.createElement('a')
    anchor.href = 'src/assets/brouchure/Brosura_Gimnaziul_Grigore_Vieru.pdf'
    anchor.download = 'brosura-gimnaziul-grigore-vieru.pdf'
    anchor.click()
  }

  return (
    <div className="pb-5 bg-gradient-to-br from-indigo-800 to-gray-800">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="mt-5 flex flex-col justify-center">
            <span className="text-info">Informații utile</span>
            <h1 className="font-bold text-3xl lg:text-5xl mb-4 text-white">
              Despre Gimnaziul „Grigore Vieru”
            </h1>
            <p className="text-white text-lg lg:text-xl">
              Gimnaziul „Grigore Vieru” din Sărata Veche este o instituție
              publică de învățământ care promovează educația incluzivă și
              dezvoltarea competențelor esențiale pentru viață. Cu o capacitate
              de 650 de elevi, gimnaziul oferă condiții moderne de studiu și se
              implică activ în proiecte educaționale menite să îmbunătățească
              infrastructura și calitatea procesului educațional.
            </p>
            <button
              className="bg-primary p-2 lg:px-6 lg:py-3 rounded-lg text-lg font-bold mt-5 text-light"
              onClick={downloadBroucher}
            >
              Descarcă broșura
            </button>
          </div>
          <div className="lg:mt-0 mt-5 flex justify-center items-center">
            <a
              href="src/assets/brouchure/Brosura_Gimnaziul_Grigore_Vieru.pdf"
              download="brosura-gimnaziul-grigore-vieru.pdf"
            >
              <img
                src="src/assets/brouchure/brouchure_preview.png"
                className="lg:w-full rounded-lg"
                alt="Broșura Gimnaziului Grigore Vieru"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Main2
