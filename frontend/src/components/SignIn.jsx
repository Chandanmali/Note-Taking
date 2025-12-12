import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

function SignIn() {

    const [name, setName] = useState("")
    const [password, setPassword] = useState("")

    const backendUrl = import.meta.env.VITE_BACKEND_URL;

    const navigate = useNavigate();

    const handleSignIn = async () => {

        if (!name || !password) {
            alert("Please fill all required fields");
            return; // Stop function here
        }

        

       
            const response = await axios.post(`${backendUrl}/signin`, {
                name: name,
                password: password
            });

            if(response.data.token)
            {
                localStorage.setItem("token", response.data.token);
            localStorage.setItem("username", name);
            alert("Login successful!");
            navigate("/");  // redirect to home

            }
            else{
                alert("User not registered, please create account first")
            }

            // localStorage.setItem("token", response.data.token);
            // localStorage.setItem("username", name);
            // alert("Login successful!");
            // navigate("/");  // redirect to home

        // } catch (error) {
        //     alert("User not registered, please create account first");
            
        // }

    }

    return (
        <div>
            <div className='min-h-screen px-4 py-8 md:py-1'>
                <div className=''>
                    <p className='text-center font-bold text-3xl md:mt-10 mt-20 font-serif md:text-4xl'>SIGN-IN</p>
                    <div className='border border-gray-300 flex flex-col w-full max-w-[600px] mx-auto mt-6 md:mt-10 shadow-2xl px-6 md:px-10 py-8 md:pt-15 md:pb-10 gap-5 md:gap-7 rounded-2xl'>

                        <input className='shadow-2xl border border-gray-400 bg-gray-200 px-4 md:px-8 py-2 md:py-3 rounded-2xl text-sm md:text-base'
                            type="text"
                            placeholder='Name'
                            onChange={(e) => setName(e.target.value)} />


                        <input className='shadow-2xl border border-gray-400 bg-gray-200 px-4 md:px-8 py-2 md:py-3 rounded-2xl text-sm md:text-base'
                            type="text"
                            placeholder='Password'
                            onChange={(e) => setPassword(e.target.value)} />

                        <div className='flex flex-col gap-4 mt-4'>

                            <button onClick={handleSignIn} className='bg-blue-500 cursor-pointer text-gray-100 rounded-lg py-2 md:py-3 font-bold text-sm md:text-xl hover:bg-blue-600 transition-colors'>SignIn</button>


                            <button onClick={() => navigate('/signup')} className='bg-blue-500 cursor-pointer text-gray-100 rounded-lg py-2 md:py-3 font-bold text-sm md:text-xl hover:bg-blue-600 transition-colors'>create account</button>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignIn
