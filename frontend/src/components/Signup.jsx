"use client"
import { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"

function Signup() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const backendUrl = import.meta.env.VITE_BACKEND_URL;

  const navigate = useNavigate()

  const handleSignUp = async () => {
    if (!name || !email || !password) {
      alert("Please fill all required fields")
      return // Stop function here
    }

    await axios.post(`${backendUrl}/signup`, {
      name: name,
      email: email,
      password: password,
    })

    alert("User registered successfully")
    navigate("/signin")
  }

  return (
    <div className="min-h-screen px-4 py-8 md:py-1">
      <div>
        <div className="">
          <p className="text-center font-bold text-3xl md:text-4xl mt-20 md:mt-10 font-serif">SIGN-UP</p>
          <div className="border border-gray-300 flex flex-col w-full max-w-[600px] mx-auto mt-6 md:mt-10 shadow-2xl px-5 md:px-10 py-8 md:pt-15 md:pb-10 gap-5 md:gap-7 rounded-2xl">
            <input
              className="shadow-2xl border border-gray-400 bg-gray-200 px-4 md:px-8 py-2 md:py-3 rounded-2xl text-sm md:text-base"
              type="text"
              placeholder="Name"
              onChange={(e) => setName(e.target.value)}
            />

            <input
              className="shadow-2xl border border-gray-400 bg-gray-300 px-4 md:px-8 py-2 md:py-3 rounded-2xl text-sm md:text-base"
              type="email"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />

            <input
              className="shadow-2xl border border-gray-400 bg-gray-300 px-4 md:px-8 py-2 md:py-3 rounded-2xl text-sm md:text-base"
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />

            <div className="flex flex-col gap-3 md:gap-4 mt-2 md:mt-4">
              <button
                onClick={handleSignUp}
                className="bg-blue-500 cursor-pointer text-gray-100 rounded-lg py-2 md:py-3 font-bold text-base md:text-xl hover:bg-blue-600 transition-colors"
              >
                SignUp
              </button>

              <button
                onClick={() => navigate("/signin")}
                className="bg-blue-500 cursor-pointer text-gray-100 rounded-lg py-2 md:py-3 font-bold text-sm md:text-xl hover:bg-blue-600 transition-colors"
              >
                Already have an account ?
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Signup
