import React from 'react'

export default function Logo() {
  return (
    <div className='logo flex items-end gap-[15px] w-[300px] relative'>
      <img src='./images/logoIcon.svg' />
      <span className='primaryColor font-logo text-[35px] font-bold  absolute bottom-[-8px] right-0'>ProperLand</span>
    </div>
  )
}
