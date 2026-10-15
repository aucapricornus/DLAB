import { useContext } from "react"
import { FormContext } from "../ApplicationForm"
import { NextButton, PrevButton } from "../../../components/Modal"

export const JobProfile = () => {
  const { page, handleNextPage, handlePrevPage } = useContext(FormContext)

  return (
    <div>
      <h1 className='text-purple text-3xl font-semibold my-5'>
        PERFIL LABORAL
      </h1>
      <div className='px-20'>
        <ul className='text-lg space-y-5 my-16'>
          <li>
            Queremos conocer tus competencias y experiencia. A continuación podrás elegir las competencias que conoces con respecto a 3 niveles:
          </li>
          <li className='text-base'>
            <strong>Nivel 1:</strong> No tengo experiencia laboral, pero he desarrollado proyectos utilizado esta tecnología/herramienta.
          </li>
          <li className='text-base'>
            <strong>Nivel 2:</strong> Tengo poca experiencia laboral, menos de dos años, necesito supervisión constante.
          </li>
          <li className='text-base'>
            <strong>Nivel 3:</strong> Tengo experiencia laboral (+2 años) y/o autonomía completa a la hora de desarrollar proyectos.
          </li>
          <li className='font-semibold'>
            Ten en cuenta, de acuerdo a las competencias declaradas, te pediremos que seas capaz de demostrarlo de forma práctica durante el proceso de selección.
          </li>
        </ul>
      </div>
      <div className='flex justify-between'>
        <PrevButton hidden={page === 1} onClick={handlePrevPage} />
        <NextButton onClick={handleNextPage} errors={{}} />
      </div>
    </div >
  )
}
