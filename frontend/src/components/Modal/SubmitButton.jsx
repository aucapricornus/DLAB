export const SubmitButton = ({ onClick, errors, isSubmitting }) => {
    const disabled = Object.keys(errors).length > 0 || isSubmitting ? 'bg-bright-blue/70 cursor-not-allowed' : 'bg-bright-blue hover:bg-blue'

    return (
        <button
            type='submit'
            className={`text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm py-2.5 px-4 text-center inline-flex items-center mr-2 uppercase ${disabled}`}
            onClick={onClick}
        >
            Enviar
        </button>
    )
}
