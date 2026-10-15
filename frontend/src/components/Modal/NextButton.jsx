import { RightIcon } from "../../assets/Icons/RightIcon"

export const NextButton = ({ errors, onClick }) => {
    const disabled = Object.keys(errors).length > 0 ? 'bg-bright-blue/70 cursor-not-allowed' : 'bg-bright-blue hover:bg-blue'

    return (
        <button
            type='submit'
            className={`text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center mr-2 ${disabled}`}
            onClick={onClick}
        >
            <RightIcon />
        </button>
    )
}
