import React from 'react'
import {BiBriefcaseAlt} from 'react-icons/bi'


export const JobReadyButton = () => {
  return (
    
       <button type="button" class="w-48 h-12 bg-white rounded-2xl border-bright-blue border-2 text-bright-blue font-bold text-lg leading-9 uppercase focus:outline-none focus:ring focus:ring-bright-blue-300 inline-flex py-1 px-2">
        <BiBriefcaseAlt className="w-6 h-6 inline-flex mx-2 mt-1"/>
        Job Ready</button>
  )
}
