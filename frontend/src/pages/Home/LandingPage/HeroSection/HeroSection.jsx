import React from 'react'


const HeroSection = () => {
  return (
    <section className="mb-8">
      <div className="bg-hero bg-cover relative bg-no-repeat bg-center h-full">
        <div className="flex flex-col mx-4 px-5 py-24 md:mx-0 md:px-0 md:pl-5 md:py-0 md:pt-16 lg:pt-12 h-full">
          <div className="text-center md:text-left">
            <h1 className="text-white text-7xl font-bold leading-27 md:pl-10 lg:pl-14 xl:pl-28">¿Buscas <span className="text-ligth-blue">talento TI?</span></h1>
          </div>

          <div className="md:flex h-full">
            <div className="md:w-1/2 mt-6 mb-20 md:pl-10 lg:pl-14 xl:pl-28">
              <div className="w-full xl:w-10/12 mb-6 text-center md:text-left">
                <h3 className="text-3xl font-normal text-white leading-10">
                  Contrata <span className="text-blue">Talento TI </span> rápido, inteligente y eficiente
                </h3>
              </div>
              <div className="w-full xl:w-11/12 mb-24 text-center md:text-left">
                <p className="text-sm font-normal leading-7 text-white">Te encontramos profesionales en 5 días y los acompañamos por 3 meses con tutores senior para potenciar y acelerar sus habilidades técnicas</p>
              </div>
              <div className="w-full flex items-center justify-center md:justify-start">
                <button type="button" className="py-4 px-6 text-base font-bold text-bright-blue uppercase leading-9 bg-white rounded-3xl w-72 h-16">Quiero contratar</button>
              </div>
            </div>

            <div className="w-1/2 flex flex-col justify-end mb-0 mx-0 place-items-end ">
              <img className="hidden md:block mt-auto" src="src/assets/images/img-landing-hero.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>

  )
}

export default HeroSection