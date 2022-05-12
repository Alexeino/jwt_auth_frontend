import React, { useContext } from 'react';
import AuthContext from '../context/AuthContext';
const LoginPage = () => {

    let {loginUser} = useContext(AuthContext);

  return (
        <form onSubmit={loginUser}>
            <div className="container mt-5">
            <div className="row d-flex justify-content-center">
                <div className="col-md-6">
                    <div className="card px-5 py-5" id="form1">
                        <div className="form-data" >
                            <div className="forms-inputs mb-4"> <span>Email</span> <input name="email"  className="w-100 px-2" placeholder='Enter Email' type="text"
                            />
                                <div className="invalid-feedback">A valid email is required!</div>
                            </div>
                            <div className="forms-inputs mb-4"> <span>Password</span> <input name="password"  className="w-100 px-2" placeholder='Enter Password' type="password"   
                            />
                                <div className="invalid-feedback">Password must be 8 character!</div>
                            </div>
                            <div className="mb-3"> <button className="btn btn-dark w-100">Login</button> </div>
                        </div>

                    </div>
                </div>

            </div>
        </div>
        </form>  )
}

export default LoginPage