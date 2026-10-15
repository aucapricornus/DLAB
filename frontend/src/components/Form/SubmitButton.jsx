
export const SubmitButton = ({ children, disable }) => {
    return (
        <button
            className={`py-4 px-7 text-xl rounded-3xl font-extrabold border-none uppercase ${disable ? 'bg-grey text-black/70 cursor-not-allowed opacity-80' : 'text-bright-blue bg-white'} screen600:px-4 screen600:py-3 screen600:text-lg`}
            disabled={disable}
            type='submit'
        >
            {children}
        </button>
    )
}