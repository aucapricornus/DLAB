import React from 'react'


export const MenuSidebarButton = ({text, icon}) => {
  return (
    <button 
    type="button" 
    className="w-[20rem] h-20 bg-ligth-blue focus:bg-blue focus:text-white text-base text-bright-blue leading-7 pl-32 font-medium text-start">
    {icon}
    {text}
    </button>
  )
}
