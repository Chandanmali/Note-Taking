import React from 'react'
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Signup from './components/Signup'
import NoteTaking from './components/NoteTaking'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <NoteTaking />
      </div>
    </>
  )
}

export default App
