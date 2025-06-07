import React, { useState } from 'react';
import Dropdown from './Dropdown';
import Button from './Button';
import { Bell, Search, CircleUserRound } from 'lucide-react';

const Navbar = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [showLogout, setShowLogout] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <>
      <div className='flex justify-between items-center h-[10vh] px-[5vw] py-0'>
        <img src="images/logo.png" alt="NetFlix logo" className='w-[15%] h-auto' />

        {/* conditional rendering based on loggedIn */}
        <div style={{ display: loggedIn ? 'block' : 'none' }}>
          <ul>
            <li className='inline-block mx-[1vw] text-white font-semibold'>Home</li>
            <li className='inline-block mx-[1vw] text-white font-semibold'>TV Shows</li>
            <li className='inline-block mx-[1vw] text-white font-semibold'>Movies</li>
            <li className='inline-block mx-[1vw] text-white font-semibold'>New & Popular</li>
            <li className='inline-block mx-[1vw] text-white font-semibold'>My List</li>
            <li className='inline-block mx-[1vw] text-white font-semibold'>Browse by Language</li>
          </ul>
        </div>

        <div className="flex justify-center items-center gap-[1vw]" >
          <div className='flex gap-[1vw] items-center' style={{ display: loggedIn ? 'flex' : 'none' }}>

            <Search size={26} />
            <Bell size={26} />
            <Dropdown name="language" />

            {/* CircleUserRound + Login/Logout Dropdown */}
            <div className="relative">
              <CircleUserRound
                size={26}
                onClick={() => {
                  if (loggedIn) {
                    setShowLogout(!showLogout);
                    setShowLogin(false);
                  } else {
                    setShowLogin(!showLogin);
                    setShowLogout(false);
                  }
                }}
                className="cursor-pointer"
              />
              {showLogin && (
                <div className="absolute top-10 right-0 z-10 appearance-none bg-white text-black font-bold text-base rounded-md border border-white flex flex-col w-[max-content] gap-0.5">
                  <div className='px-[1vw] py-[1vh] bg-black text-white rounded-t-md hover:bg-[#2c2c2c] '>Login</div>
                  <div className='px-[1vw] py-[1vh] bg-black text-white rounded-b-md hover:bg-[#2c2c2c]'>Sign Up</div>
                </div>
              )}
              {showLogout && (
                <div className="absolute top-8 right-0 z-10">
                  <div className="absolute top-10 right-0 z-10 appearance-none bg-white text-black font-bold text-base rounded-md border border-white flex flex-col w-[max-content] gap-0.5">
                  <div className='px-[1vw] py-[1vh] bg-black text-white rounded-t-md hover:bg-[#2c2c2c] '>Log out</div>
                </div>
                </div>
              )}
            </div>
          </div>

          <Button text="Sign Up" />
        </div>
      </div>
    </>
  );
};

export default Navbar;
