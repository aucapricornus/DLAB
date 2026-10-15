import React, {useState}from 'react';
import { Link } from "react-router-dom";

import { HiMenu } from "react-icons/hi";
import { BsPersonCheckFill } from "react-icons/bs";
import { BsFileEarmarkTextFill } from "react-icons/bs";
import { BsFillHouseDoorFill } from "react-icons/bs";

import { JobReadyButton } from '../Buttons/JobReadyButton';
import {MenuSidebarButton} from '../Buttons/MenuSidebarButton';


 const Sidebar = () => {
  const [open, setOpen] = useState(false)
  
  const icon1 = <BsFillHouseDoorFill className="w-4 h-4 inline-flex mx-1 mb-1"/>
  const icon2 = <BsPersonCheckFill className="w-4 h-4 inline-flex mx-1 mb-1"/>
  const icon3 = <BsFileEarmarkTextFill className="w-4 h-4 inline-flex mx-1 mb-1"/>
 
  return (
    <>
    <div>
      <div className="p-2 justify-start md:hidden rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-200">
        <HiMenu
          size={26}
          className={`${
            !open && 'hidden'
          }cursor-pointer`}
          onClick={() => setOpen(true)}
          />
      </div>
       
      <div className= {`${
        open ? 'block' : 'hidden'
        } md:block ease-in duration-300 h-screen bg-ligth-blue md:mt-10 rounded-tr-3xl flex flex-col items-center`}>
    
        <div className=" pt-9 flex items-center justify-center"><JobReadyButton/></div>
     
        <div className="mt-14 flex flex-col flex-start">
          <Link to="" onClick={() => setOpen(false)}>
            <MenuSidebarButton text="Home" icon={icon1} />
          </Link>
          <Link to="" onClick={() => setOpen(false)}>
            <MenuSidebarButton text="Perfil"icon={icon2}/>
          </Link>
          <Link to="" onClick={() => setOpen(false)}>
            <MenuSidebarButton text="Test técnicos"icon={icon3}/>
          </Link>
        </div>  
      </div>
    </div>
    
   
    </>
  )
}


export default Sidebar;