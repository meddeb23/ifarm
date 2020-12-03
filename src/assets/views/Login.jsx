import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Login() {
    return (
        <main className="login">
            <h1 className="logo">AGRIvironment</h1>
            <div className="warpper">
                <h2>login</h2>

                <div className="card">
                    <input type="text" placeholder="Email" />
                    <input type="password" placeholder="password" />
                </div>
                <NavLink to="/users"><button>connect</button></NavLink>

                <p className="row"><a href="#">forget password</a> <a href="#">create an account</a></p>

            </div>
        </main>
    )
}
