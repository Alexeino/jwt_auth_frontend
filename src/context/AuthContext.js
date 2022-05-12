import { createContext, useState } from "react";
import jwt_decode from 'jwt-decode';
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export default AuthContext

export const AuthProvider = ({children})=>{
    console.log("Auth Provider")
    const navigate= useNavigate();
    let [user,setUser] = useState(()=> localStorage.getItem('authTokens')? jwt_decode(localStorage.getItem('authTokens')):null)
    let [authTokens,setAuthTokens] =  useState(()=> localStorage.getItem('authTokens') ? JSON.parse(localStorage.getItem('authTokens')) : null);
    let [loading,setLoading] = useState(false)
    // let [user,setUser] = useState(null);

    const loginUser = async(e)=>{
        e.preventDefault();
        // console.log(e.target.email.value);
        let res = await fetch('http://127.0.0.1:8000/api/token/',{
            method : 'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body: JSON.stringify({
                "email": e.target.email.value, 'password': e.target.password.value
            })
        });
        let data = await res.json()
        console.log("res Data : ",data);

        if (res.status === 200){
            setAuthTokens(data)
            setUser(jwt_decode(data.access));
            console.log(jwt_decode(data.access));
            localStorage.setItem('authTokens',JSON.stringify(data))
            navigate("/")
        }else{
            alert(res.statusText);
        }
    }

    let logoutUser = () =>{
        setAuthTokens(null);
        setUser(null);
        localStorage.removeItem('authTokens')
        navigate('/login');
    }

    let contextData = {
        user : user,
        authTokens : authTokens,
        loginUser : loginUser,
        logoutUser : logoutUser
    }
    return (
         <AuthContext.Provider value={contextData}>
        {loading ? null : children}
    </AuthContext.Provider>
    )
}