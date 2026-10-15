import React from 'react'

const WelcomeView = () => {
  return (
    <>
    <main className='w-full h-100 mx-auto md:mx-5  md:pl-40  '>
    <section className='mt-9  flex flex-col justify-center md:mx-5 mx-1 md:justify-start'>
    <h1 className='mt-8 text-2xl md:mt-10 md:text-4xl font-bold mx-auto md:mx-5'>¡Bienvenido!</h1>
    <h3 className='mt-8 text-xl md:mt-10 md:text-2xl font-bold mx-auto md:mx-5 '>Mapa para recibir ofertas automáticas</h3>
    </section>

    <section className='flex flex-col md:flex-row md:mx-5 flex-wrap justify-start w-full h-100 mt-10 '>

    <div className="flex flex-col justify-center items-center md:items-start  md:justify-start  md:mx-5 mx-3 my-3 md:pr-5  bg-ligth-blue border border-gray-200 rounded-lg shadow-lg  max-w-screen-xl h-56 md:w-48 md:h-48 ">
    <div className=' text-white flex justify-center items-center bg-dark-blue w-10 h-10 md:p-2  md:ml-5 md:mb-1 md:mr-0 md:mt-6 rounded-full'>
    <p>1</p>
    </div>
    
    <p className="font-normal text-gray-700 dark:text-gray-400 p-3  m-3 text-xl"><b>Completa</b> tu perfil de usuario</p>
    </div>
    
    <div className="flex flex-col justify-center items-center md:items-start  md:justify-start  md:mx-5 mx-3 my-3 md:pr-5 bg-ligth-blue border border-gray-200 rounded-lg shadow-lg max-w-screen-xl h-56 md:w-48 md:h-48 ">
    <div className=' text-white flex justify-center items-center bg-dark-blue w-10 h-10 md:p-2  md:ml-5 md:mb-1 md:mr-0 md:mt-6 rounded-full'>
    <h5 className=" rounded-full">2</h5>
    </div>
   
    <p className="font-normal text-gray-700 dark:text-gray-400 p-3  m-3 text-xl"><b>Realiza</b> test técnicos</p>
    </div>


    <div className="flex flex-col justify-center items-center md:items-start  md:justify-start  md:mx-5 mx-3 my-3 md:pr-5 bg-ligth-blue border border-gray-200 rounded-lg shadow-lg max-w-screen-xl h-56 md:w-48 md:h-48 ">
    <div className=' text-white flex justify-center items-center bg-dark-blue w-10 h-10 md:p-2   md:ml-5 md:mb-1 md:mr-0 md:mt-6 rounded-full'>
    <h5 className=" rounded-full">3</h5>
    </div>
    
    <p className="font-normal text-gray-700 dark:text-gray-400 p-3  m-3 text-xl"><b>Participa</b> en Show The Codes</p>
    </div>


    <div className="flex flex-col justify-center items-center md:items-start  md:justify-start md:mx-5 mx-3 my-3 bg-ligth-blue border border-gray-200 rounded-lg shadow-lg max-w-screen-xl h-56 md:w-48 md:h-48 ">
    <div className=' text-white flex justify-center items-center bg-dark-blue w-10 h-10 md:p-2   md:ml-5 md:mb-1 md:mr-0 md:mt-6 rounded-full'>
    <h5 className=" rounded-full">4</h5>
    </div>
    <p className="font-normal text-gray-700 dark:text-gray-400 p-3  m-3 text-xl "><b>Recibe</b> ofertas de trabajo</p>
    </div>

    </section>
    </main>
    </>
  )
}

export default WelcomeView