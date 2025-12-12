import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


function Signup() {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const navigate = useNavigate();

    const handleSignUp = async () => {

        if (!name || !email || !password) {
            alert("Please fill all required fields");
            return; // Stop function here
        }

        await axios.post("http://localhost:3000/signup", {
            name: name,
            email: email,
            password: password
        })

        alert("User registered successfully")
        navigate('/signin')

    }

    return (
        <div>
            <div>
                <div className=''>
                    <p className='text-center font-bold text-4xl mt-10'>SIGN-UP</p>
                    <div className='border border-gray-300 flex flex-col w-[600px] mx-auto mt-10 shadow-2xl  px-10 pt-15 pb-10 gap-7 rounded-2xl'>

                        <input className='shadow-2xl border border-gray-400 bg-gray-200 px-8 py-2 rounded-2xl'
                            type="text"
                            placeholder='Name'
                            onChange={(e) => setName(e.target.value)} />

                        <input className='shadow-2xl border border-gray-400 bg-gray-300 px-8 py-2 rounded-2xl'
                            type="text"
                            placeholder='Email'
                            onChange={(e) => setEmail(e.target.value)} />

                        <input className='shadow-2xl border border-gray-400 bg-gray-300 px-8 py-2 rounded-2xl'
                            type="text"
                            placeholder='Password'
                            onChange={(e) => setPassword(e.target.value)} />

                        <div className='flex flex-col gap-4 mt-4'>

                            <button onClick={handleSignUp} className='bg-blue-500 cursor-pointer text-gray-100 rounded-lg py-2 font-bold text-xl'>SignUp</button>


                            <button onClick={() => navigate('/signin')} className='bg-blue-500 cursor-pointer text-gray-100 rounded-lg py-2 font-bold text-xl'>Already have an account ?</button>

                        </div>



                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signup
