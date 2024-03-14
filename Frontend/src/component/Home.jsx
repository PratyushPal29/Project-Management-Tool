import React from 'react'
import { useAuth } from '../contexts'


const Home = () => {
    const { currentUser } = useAuth()
    return (
        <div className='text-2xl font-bold pt-14'>Hello , you are now logged in.</div>
    )
}

export default Home