import { useContext } from 'react'
import { CloseButton, TitleModal } from './'
import { FormContext } from '../../pages/ApplicationForm/ApplicationForm'

export const Modal = ({ children }) => {
  const { openModal } = useContext(FormContext)

  return (
    <div className='relative z-10' role='dialog' hidden={!openModal}>
      <div className='fixed inset-0 bg-gray-500 bg-opacity-90 transition-opacity'></div>
      <div className='fixed inset-0 z-10 overflow-y-auto'>
        <div className='flex min-h-full items-center justify-center p-20 text-center'>
          <div className='relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all max-w-7xl'>

            <div className='flex items-center p-4 border-b rounded-t'>
              <TitleModal title='Formulario de aplicación' />
              <CloseButton />
            </div>

            <div className='px-10 py-5'>
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
