import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'


function NoteTaking() {

    const navigate = useNavigate();

    const [task, setTask] = useState("")
    const [status, setStatus] = useState("");
    const [create, setCreate] = useState([])

    const handleNoteCreate = () => {

        const updateNote = [...create, {
            task: task,
            status: status
        }]

        setCreate(updateNote)

        localStorage.setItem("note", JSON.stringify(updateNote))

        setTask("")
        setStatus("")

    }

    useEffect(() => {
        const storeNotes = JSON.parse(localStorage.getItem("note"))
        console.log("what is this", storeNotes)
        if(storeNotes)
        {
            setCreate(storeNotes)
        }
    }, [])

    return (
        <div>

            {/* Upper banner */}
            <div className='flex justify-between bg-cyan-900 py-3 text-white px-20 items-center shadow-xl'>
                <div>
                    <p className='text-3xl font-bold font-serif'>Note-Taking-App</p>
                </div>
                <div className='flex gap-5'>

                    <button onClick={() => navigate('/signup')} className='border rounded-2xl px-5 py-2 font-bold text-lg cursor-pointer'>signup</button>

                    <button onClick={() => navigate('/signin')} className='border rounded-2xl px-5 py-2 font-bold text-lg cursor-pointer'>signin</button>
                </div>
            </div>

            {/* Main todo */}

            <div>
                <div className='flex justify-center mt-10 gap-5 items-center'>
                    <div className='flex gap-3'>
                        <input className='w-[400px] border border-gray-300 shadow-xl px-5  py-2 rounded-xl text-lg '
                            type="text"
                            placeholder='Enter your Task'
                            value={task}
                            onChange={(e) => setTask(e.target.value)} />

                        <input className='border border-gray-300 shadow-xl px-5 py-2 rounded-xl text-lg'
                            type="text"
                            placeholder='current status'
                            value={status}
                            onChange={(e) => setStatus(e.target.value)} />

                    </div>
                    <div className='text-4xl cursor-pointer'>
                        <i onClick={handleNoteCreate} class="ri-add-circle-fill"></i>
                    </div>

                </div>
            </div>

            <div className='flex flex-col mt-12 justify-center items-center gap-3'>
                {
                    create.map((element, index) => {
                        return <div key={index} className='flex justify-center w-[720px] border rounded-xl border-gray-300 shadow-xl py-2'>
                            <div className=' flex justify-between w-full px-13 items-center'>
                                <div className='flex justify-between w-full text-xl font-semibold font-serif'>
                                    <h1>{element.task}</h1>
                                    <h1>{element.status}</h1>
                                </div>

                                <div className='ml-15 text-red-700 text-2xl cursor-pointer'>
                                    <i class="ri-delete-bin-5-fill"></i>
                                </div>

                            </div>



                        </div>
                    })
                }
            </div>

        </div>
    )
}

export default NoteTaking
