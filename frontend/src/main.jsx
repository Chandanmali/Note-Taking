import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Signup from './components/Signup.jsx'
import SignIn from './components/SignIn.jsx'
import NoteTaking from './components/NoteTaking.jsx'

const appRouter = createBrowserRouter([
    {
        path: '/',
        element: <App />
    },

    {
        path: '/signup',
        element: <Signup />
    },

    {
        path: '/signin',
        element: <SignIn />
    },

    {
        path: '/note-taking',
        element: <NoteTaking />
    },


])

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <RouterProvider router={appRouter} />
    </StrictMode>,
)
