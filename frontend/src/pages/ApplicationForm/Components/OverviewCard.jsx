import { useContext } from "react"
import { FormContext } from "../ApplicationForm"

export const OverviewCard = () => {
    const { openModal, setOpenModal } = useContext(FormContext)
    return (
        <div className='bg-purple/90 text-white px-20 py-14 rounded-xl space-y-7 tracking-wider font-extralight'>
            <h1 className='text-3xl font-semibold '>¡POSTULA Y ÚNETE A DEVSAFÍO!</h1>
            <p>
                Devsafio es una iniciativa que une talento junior Latinoamericano (trainee, bootcamp, entre otros) con mentores senior TI para potenciar su empleabilidad inicial e impactar la industria tecnológica.
            </p>
            <p>
                Si estás <span className='font-bold'> buscando empleo como Junior o Trainee (Desarrollo, Diseño UX/UI y Data Science) </span> te dejamos este formulario para que seas parte de distintas ofertas laborales que tenemos junto a importantes empresas en latinoamérica.
            </p>
            <li className='font-bold'>
                ¿Debo pagar algo por inscribirme y participar?
            </li>
            <p>
                ¡No! Participar en nuestras ofertas <span className='font-bold'> no tiene costo para ti. </span> Una vez seas seleccionado para la contratación, se te hará una oferta remunerada inferior a la de mercado, sin embargo, tendrás el <span className='font-bold'> beneficio y la garantía de ser apoyado y guiado de forma personalizada por un mentor senior. </span>
                Este programa tiene una duración de 3 meses, posterior a esto tienes la posibilidad de ser contratado directamente por la empresa, con sus distintos beneficios y remuneración acorde al mercado.
            </p>
            <p>
                Si quieres saber más de nosotros y nuestras actividades, nos puedes seguir en: <a className='underline' href='https://www.linkedin.com/company/devsafio' target='_blank' rel='noopener'>https://www.linkedin.com/company/devsafio</a>
            </p>
            <p>¡Vamos con todo!</p>
            <div className='flex justify-between items-center'>
                <p className='font-bold'>Tiempo: 5-10 minutos</p>
                <button
                    className='rounded-xl border border-white px-5 py-3 hover:bg-purple/30'
                    onClick={() => setOpenModal(!openModal)}
                >
                    Comenzar
                </button>
            </div>
        </div>
    )
}