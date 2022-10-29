import React from 'react'
import { NavLink, Outlet } from "react-router-dom";


const Page = () => {
    return (
        <>
            <header>
                <NavLink end to='/'>Home</NavLink>
                <NavLink to='/news'>News</NavLink>
            </header>
            
            <main className="container">
                <Outlet />
            </main>

            <footer>Test app for Pioneer Group of Yamilov R.R.</footer>
        </>
    )
}

export default Page