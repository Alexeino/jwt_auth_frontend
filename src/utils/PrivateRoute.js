import { Outlet,Navigate } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../context/AuthContext";

const PrivateRoute = ({component: Component, ...restParams}) => {
    let {user} = useContext(AuthContext);
    console.log("Private Route")
  return user ? <Outlet /> : <Navigate to="/login" />
}

export default PrivateRoute