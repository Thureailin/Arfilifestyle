import React  from 'react';
import { Children } from 'react';
import { Navigate } from 'react-router-dom';

const RouteGuard = ({children}) => {
     const auth_token = localStorage.getItem('auth_token')
    if(auth_token !=null){
return children
    }else{
        return <Navigate to={'/login'}/>
    }
    
 
}

export default RouteGuard