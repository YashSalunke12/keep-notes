import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import PasswordInput from '../components/PasswordInput';
import { validateEmail } from '../utils/helper';
import { Link } from 'react-router-dom';

const SignUp = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPasswod] = useState("");
    const [error, setError] = useState(null);

    const handleSignup = async (e) => {
        e.preventDefault();

        if(!name) {
            setError("Please enter your name")
            return
        }

        if(!validateEmail(email)) {
            setError("Please enter a valid email address.")
            return
        }

        if(!password) {
            setError("Please enter the password")
            return
        }

        setError("");
    }

  return (
    <>
        <Navbar />
        <div className='flex items-center justify-center mt-28'>
            <div className='w-96 border rounded-lg bg-white px-7 py-10'>
                <form onSubmit={handleSignup}>
                    <h4 className='text-2xl mb-7'>Signup</h4>

                    
                    <input 
                    type='text' 
                    placeholder='Name' 
                    className='input-box'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    />

                    <input 
                    type='text' 
                    placeholder='Email' 
                    className='input-box'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    />

                    <PasswordInput
                    value={password}
                    onChange={(e) => setPasswod(e.target.value)}
                    placeholder={"Create Password"}
                     />

                    {error && <p className='text-red-500 text-xs pb-1'>{error}</p>}

                    <button type='submit' className='btn-primary'>Signup</button>

                    <p className='text-sm text-center mt-4'>
                        Already have an account?{" "}
                        <Link to={'/login'} className='font-medium text-primary underline'>
                            Login
                        </Link>
                    </p>
                    
                </form>
            </div>
        </div>
    </>
  )
}

export default SignUp