import { LeftIcon } from "../../assets/Icons/LeftIcon"

export const PrevButton = ({ hidden, onClick }) => {
  const showButton = hidden ? 'opacity-0 pointer-events-none' : 'visible'

  return (
    <button
      className={`text-white bg-bright-blue hover:bg-blue focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center mr-2 ${showButton}`}
      onClick={onClick}
    >
      <LeftIcon />
    </button>
  )
}
