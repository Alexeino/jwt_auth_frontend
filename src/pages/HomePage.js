import React, { useState } from 'react'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import AuthContext from '../context/AuthContext'
import { useEffect } from 'react';
const HomePage = () => {
  let {user,authTokens,logoutUser} = useContext(AuthContext);
  const [msg,setMsg] = useState("Test")
  console.log(authTokens);
  useEffect(()=>{
    testView()
  },[])

  let testView= async ()=>{
    let res = await fetch('http://127.0.0.1:8000/api/test/',{
      method:'GET',
      headers:{
        'Content-Type':'application/json',
        'Authorization':'JWT ' + String(authTokens.access)
      }
    });
    if(res.status === 200){
      let data = await res.json()
      setMsg(data.message)
    }else if(res.statusText === "Unauthorized"){
      //Logout
      logoutUser()
    }
  }
  console.log("Home Page User ",user.email);
  return (
    <div>
      <h4>User {user.email}</h4>
      {/* <h4>authTokens {authTokens.access}</h4> */}
      <div className="text-center m-auto">
        {msg}
      </div>
    </div>
  )
}

export default HomePage