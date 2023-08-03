import React from 'react'
import { NavLink } from 'react-router-dom'
import navdata from '../navdata'
import ContactButton from './Buttons/ContactButton'

export default function Navbar() {

  return (
    <div className='flex gap-[60px] items-center '>
      <div className='flex  gap-[10px]'>
        {
          navdata.map(item => {
            return <NavLink key={item.id} to={item.path} className="font-displayFont hover:text-primaryColor active:text-primaryColor text-[20px] gap-[5px] p-[5px] cursor-pointer font-normal text-lightGrey flex items-center capitalize ">{item.title}
            <span><img src={item.icon}/></span></NavLink>
          })
        }
      </div>
      <ContactButton />
    </div>
  )
}
