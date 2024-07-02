import React from 'react'
import { CgNotes } from "react-icons/cg";
import ProfileInfo from './ProfileInfo';

const Navbar = () => {
  return (
    <div className='bg-white flex items-center justify-between px-6 py-2 drop-shadow'>
        <div className='flex items-center'>

        <CgNotes
        size={22}
        className='mr-2'
         />
        <h2 className='text-xl font-medium text-black py-2'>Notes</h2>
        </div>

        <ProfileInfo />
    </div>
  )
}

export default Navbar