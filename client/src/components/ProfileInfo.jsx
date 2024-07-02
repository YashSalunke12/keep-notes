import React from 'react'
import { getInitials } from '../utils/helper'
import { useNavigate } from 'react-router-dom'

const ProfileInfo = () => {

    const navigate = useNavigate;

    const onLogout = () => {
        Navigate('/login');
    }
  return (
    <div className='flex items-center gap-3'>
        <div className='w-12 h-12 flex items-center rounded-full text-slate-950 font-medium bg-slate-400 pl-[15px]'>
            {getInitials("Yash Salunke")}
        </div>
        
        <div>
            <p className='text-sm font-medium'>Yash</p>
            <button 
            className='text-sm text-slate-700 underline'
            onLogout={onLogout}
            >Logout</button>
        </div>
    </div>
  )
}

export default ProfileInfo