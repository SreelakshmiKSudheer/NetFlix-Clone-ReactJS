import React from 'react'
import Dropdown from './Dropdown'
import Button from './Button'


const Navbar = () => {
  return (
    <div className='flex justify-between items-center height-[10vh] px-[5vw] py-0'>
        <img src="images/logo.png" alt="NetFlix logo" className='w-[15%] h-auto' />
        <div className="flex justify-center items-center gap-[1vw]">
            <Dropdown />
            <Button text="Sign Up" />
        </div>
      </div>
  )
}

export default Navbar