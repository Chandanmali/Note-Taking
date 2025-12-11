import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function SignIn() {

    const [name, setName] = useState("")
    const [password, setPassword] = useState("")

    const navigate = useNavigate();

    const handleSignIn = async () => {

        if (!name || !password) {
            alert("Please fill all required fields");
            return; // Stop function here
        }

        const response = await axios.post("http://localhost:3000/signin", {
            name: name,
            password: password
        })
        
        if(response)
        {
            localStorage.setItem(response.data.token)
            alert("User registered successfully")
        }

        
    }
    return (
        <div>
            <div>
                <div className=''>
                    <p className='text-center font-bold text-4xl mt-10'>SIGN-IN</p>
                    <div className='border border-gray-300 flex flex-col w-[600px] mx-auto mt-10 shadow-2xl  px-10 pt-15 pb-10 gap-7 rounded-2xl'>

                        <input className='shadow-2xl border border-gray-400 bg-gray-200 px-8 py-2 rounded-2xl'
                            type="text"
                            placeholder='Name'
                            onChange={(e) => setName(e.target.value)} />


                        <input className='shadow-2xl border border-gray-400 bg-gray-300 px-8 py-2 rounded-2xl'
                            type="text"
                            placeholder='Password'
                            onChange={(e) => setPassword(e.target.value)} />

                        <div className='flex flex-col gap-4 mt-4'>

                            <button onClick={handleSignIn} className='bg-blue-500 cursor-pointer text-gray-100 rounded-lg py-2 font-bold text-xl'>SignIn</button>


                            <button onClick={() => navigate('/signup')} className='bg-blue-500 cursor-pointer text-gray-100 rounded-lg py-2 font-bold text-xl'>create account</button>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignIn
