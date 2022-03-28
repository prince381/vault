import React from 'react'
import { Outlet, NavLink } from 'react-router-dom'
import logo from '../assets/images/lock.png'
import '../assets/css/publicLayout.css'

export default function PublicLayout() {
    return (
        <div className='public-layout'>
            <nav className="public-nav">
                <div className="nav-content">
                    <NavLink to="/" className="logo">
                        <img src={logo} alt="app icon" />
                        <span>Vault</span>
                    </NavLink>
                </div>
            </nav>
            <Outlet />
        </div>
    )
}
