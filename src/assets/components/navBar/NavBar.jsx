import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { MdHome, MdLocalOffer, MdPerson, MdSettings, MdRemove } from "react-icons/md"
import { FaTimes } from "react-icons/fa"
import profile_img from "../../images/profile.jpg";

export default function NavBar() {
    const [isOpen, setOpen] = useState(false)
    return (
        <><div className="nav-icon" onClick={() => setOpen(true)}>
            <span></span>
            <span></span>
            <span></span>
        </div>
            <header className={isOpen ? "open" : null}>

                <h1 className="logo">AGRIvironment</h1>
                <div className="exit-icon" onClick={() => setOpen(false)}>
                    <FaTimes />
                </div>
                <nav>
                    <ul>
                        <NavLink to='/user/home'><li className="active"><span><MdHome /></span>overview</li></NavLink>
                        <NavLink to="#services"><li><span><MdLocalOffer /></span>services</li></NavLink>
                        <NavLink to="#services"><li>Lands</li></NavLink>
                        <NavLink to="#services"><li>seeds</li></NavLink>
                        <NavLink to="#services"><li>contact</li></NavLink>
                    </ul>
                    <ul>
                        <NavLink to="/login"><li><span><MdSettings /></span>setting</li></NavLink>
                        <NavLink to="/login"><li> <span><MdPerson /></span>logout</li></NavLink>
                    </ul>
                </nav>
            </header>
        </>
    )
}
