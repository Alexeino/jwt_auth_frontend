import React from 'react'
import {Link} from 'react-router-dom'
import { useContext } from 'react'
import AuthContext from '../context/AuthContext'
const Header = () => {
    let {user} = useContext(AuthContext);
    // console.log("User : ",user);
  return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid w-100">
            <Link className="navbar-brand" to="/"> JWT Auth </Link>
            <button 
                className="navbar-toggler"
                type="button" 
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav" 
                aria-controls="navbarNav" 
                aria-expanded="false" 
                aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                <div className="text-right d-flex">
                    {user ?
                        <div className="d-flex">
                             <p className='text-warning my-auto me-3'>{user.email}</p>
                            <Link to='/login' className="btn btn-outline-light me-2">Logout</Link>
                        </div>
                        : 
                    <Link to='/login' className="btn btn-outline-light me-2">Login</Link>
                    
                    }
                    
                </div>
            </div>
        </div>
        </nav>
  )
}

export default Header