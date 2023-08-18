import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import { Spinner } from "react-bootstrap";


const PrivateRoute = ({Children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();
    console.log('user in private route', user);
    if(loading){
        return <Spinner animation="border" />; 
    }

    if(user){
        return Children;
    }
    return <Navigate state={{from: location}} to={'/login'} replace></Navigate>
   
};

export default PrivateRoute;