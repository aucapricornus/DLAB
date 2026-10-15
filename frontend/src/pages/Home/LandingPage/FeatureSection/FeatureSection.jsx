import React from 'react'

const FeatureSection = () => {
  return (
    <div className='bg-ligth-blue h-100 pb-6   mx-0 px-10'>


    <div className='text-center pt-3 mx-5 px-5 '>
     <h1 className='screen600:pt-6 pt-6 font-bold text-2xl'>Sin juniors no hay seniors</h1>
     <h3 className='screen600:pt-4 p-6  mx-14 '>En este programa unimos la <b className='text-[#2738f5]'>rapidez, eficiencia y visión de un desarrollador junior</b> junto con la <b className='text-[#2738f5]'>experiencia y liderazgo de un senior TI</b>, quien acompañará al talento junior contratado para potenciar tu área digital, acá te explicamos cómo:</h3>
    </div>

    <div className=' screen600:flex screen600:flex-col text-center screen600:flex-wrap screen600:items-center screen600:pt-4 screen600:pb-6 grid grid-cols-3 grid-rows-1 gap-6  justify-items-center content-center  my-10 mx-5 px-10'>
      
      <div className='screen600:flex screen600:flex-col screen600:flex-wrap screen600:items-center screen600:pt-3 flex flex-col items-center  mt-5 mx-5 px-5' >
      <img  className='w-64 screen600:pt-3  pt-3  pb-8' src="src/assets/pablita-girls-holding-hourglass 1.png" alt="pablita-holding" />
      <h2 className=' font-bold screen600:pt-4  pt-6'>Aceleramos</h2>
      <p className='pt-6'><b>Aceleramos el proceso de contratación.</b> Una vez que nos envíes tu necesidad de talento digital recibirás un listado con los mejores candidatos en 5 días.</p>
      </div>

      <div className='screen600:flex screen600:flex-col screen600:flex-wrap screen600:items-center screen600:pt-3 flex flex-col items-center mx-5 px-5 '>
      <img className='w-64 screen600:pt-3 pt-3  pb-7' src="src\assets\pablita-636 1.png" alt="pablita" />
      <h2 className='font-bold screen600:pt-4 pt-6'>Acompañamos</h2>
      <p className='pt-6'>Nosotros nos hacemos cargo, tú creces. Todos los desarrolladores que contrates <b>serán guiados y apoyados a nivel técnico</b> por un mentor senior TI experto en tu área <b>sin ningún costo ($0)</b>.</p>
      </div>


      <div className='screen600:flex screen600:flex-col screen600:flex-wrap screen600:items-center screen600:pt-3 screen600:pb-5 flex flex-col items-center  mt-5 mx-5 px-5'>
      <img  className='w-64 screen600:pt-3 pt-3 pb-8'src="src\assets\pablita-people-holding-pieces-of-puzzle 1.png" alt="pablita-puzzle" />
      <h2 className='font-bold screen600:pt-4 pt-6'>Potenciamos</h2>
      <p className='pt-6'>Potenciamos y retenemos el talento. Realizamos un <b>seguimiento</b> de alta calidad para <b>potenciar el crecimiento y desarrollo técnico</b> de todos los desarrolladores contratados.</p>
      </div>
    </div> 


    </div>
  )
}

export default FeatureSection