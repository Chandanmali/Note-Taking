"use client"

import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

function NoteTaking() {
  const navigate = useNavigate()

  const [task, setTask] = useState("")
  const [status, setStatus] = useState("")
  const [create, setCreate] = useState([])

  const handleNoteCreate = () => {
    const token = localStorage.getItem("token")

    if (!token) {
      alert("You are not logged in, please login first")
      navigate("/signin")
      return
    }

    if (status === "" || task === "") {
      alert("Please enter required fileds")
      return
    }

    const updateNote = [
      ...create,
      {
        task: task,
        status: status,
      },
    ]

    setCreate(updateNote)

    localStorage.setItem("notes", JSON.stringify(updateNote))

    setTask("")
    setStatus("")
  }

  useEffect(() => {
    const storeNotes = JSON.parse(localStorage.getItem("notes"))
    console.log("what is this", storeNotes)
    if (storeNotes) {
      setCreate(storeNotes)
    }
  }, [])

  const removeNotes = (index) => {
    const filterNotes = create.filter((_, i) => index !== i)
    setCreate(filterNotes)
    localStorage.setItem("notes", JSON.stringify(filterNotes))
  }

  const username = localStorage.getItem("username")

  return (
    <div>
      {/* Upper banner */}
      <div className="flex flex-col md:flex-row md:justify-between bg-cyan-900 py-3 text-white px-4 md:px-10 lg:px-20 items-center shadow-xl gap-3 md:gap-0">
        <div>
          <p className="text-xl md:text-2xl lg:text-3xl font-bold font-serif">Note-Taking-App</p>
        </div>

        {username && (
          <div className="md:flex-1 md:text-center">
            <p className="font-semibold text-base md:text-lg">Welcome {username}</p>
          </div>
        )}

        <div className="flex gap-3 md:gap-5">
          <button
            onClick={() => navigate("/signup")}
            className="border rounded-2xl px-4 md:px-5 py-1.5 md:py-2 font-bold text-base md:text-lg cursor-pointer"
          >
            signup
          </button>

          <button
            onClick={() => navigate("/signin")}
            className="border rounded-2xl px-4 md:px-5 py-1.5 md:py-2 font-bold text-base md:text-lg cursor-pointer"
          >
            signin
          </button>
        </div>
      </div>

      {/* Main todo */}

      <div>
        <div className="flex flex-col md:flex-row justify-center mt-6 md:mt-10 gap-3 md:gap-5 items-center px-4">
          <div className="flex flex-col md:flex-row gap-3 w-full md:w-auto">
            <input
              className="w-full md:w-[300px] lg:w-[400px] border border-gray-300 shadow-xl px-4 md:px-5 py-2 rounded-xl text-base md:text-lg"
              type="text"
              placeholder="Enter your Task"
              value={task}
              onChange={(e) => setTask(e.target.value)}
            />

            <input
              className="w-full md:w-auto border border-gray-300 shadow-xl px-4 md:px-5 py-2 rounded-xl text-base md:text-lg"
              type="text"
              placeholder="current status"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
            />
          </div>
          <div className="text-3xl md:text-4xl cursor-pointer">
            <i onClick={handleNoteCreate} class="ri-add-circle-fill"></i>
          </div>
        </div>
      </div>

      <div className="flex flex-col mt-8 md:mt-12 justify-center items-center gap-3 px-4">
        {create.map((element, index) => {
          return (
            <div
              key={index}
              className="flex justify-center w-full md:w-[600px] lg:w-[720px] border rounded-xl border-gray-300 shadow-xl py-2"
            >
              <div className="flex justify-between w-full px-4 md:px-13 items-center gap-2">
                <div className="flex flex-col md:flex-row md:justify-between w-full text-base md:text-xl font-semibold font-serif gap-1 md:gap-0">
                  <h1 className="break-words">{element.task}</h1>
                  <h1 className="text-sm md:text-xl text-gray-600">{element.status}</h1>
                </div>

                <div className="ml-2 md:ml-15 text-red-700 text-xl md:text-2xl cursor-pointer flex-shrink-0">
                  <i onClick={() => removeNotes(index)} class="ri-delete-bin-5-fill"></i>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default NoteTaking
