import { useContext } from 'react'
import { CloseIcon } from '../../assets/Icons/CloseIcon'
import { FormContext } from '../../pages/ApplicationForm/ApplicationForm'

export const CloseButton = () => {
    const { setOpenModal, setPage } = useContext(FormContext)

    const handleCloseModal = () => {
        setOpenModal(false)
        setPage(1)
    }

    return (
        <button
            className='text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 inline-flex items-center'
            onClick={handleCloseModal}
        >
            <CloseIcon />
        </button>
    )
}
