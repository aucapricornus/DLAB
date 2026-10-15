import React from 'react'
import { Link } from "react-router-dom"


const NotFoundView = () => {
  return (
    <section className="flex items-center h-screen p-16 bg-gray-900 text-ligth-blue">
      <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
        <div className="max-w-md text-center">
          <h2 className="mb-8 font-extrabold text-9xl text-ligth-blue">
            <span className="sr-only">Error</span>404
          </h2>
          <p className="text-2xl font-semibold md:text-3xl pb-4">
            Lo sentimos, pero esta pagina no esta disponile.
          </p>
          <Link to="/"><button className="px-8 py-3 font-semibold rounded bg-bright-blue text-gray-900"> Volver al home </button></Link>
        </div>
      </div>
    </section>
  );
}

export default NotFoundView