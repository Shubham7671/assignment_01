import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Navbar() {


    const navigate = useNavigate();

    return (
        <div>
            <nav >
                <div>
                    <img src="https://anilviji.files.wordpress.com/2016/02/geeksynergy.png?w=687" alt="" />
                    <h2>GEEKSYNERGY</h2>
                </div>
                <div>
                    <div><p>Company Info</p> </div>
                    <div onClick={() => navigate('/account')}><p>Login</p></div>
                </div>

            </nav>
        </div>
    )
}
