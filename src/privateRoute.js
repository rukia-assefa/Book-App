import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { BookFinderContext } from './context'; 

export default function PrivateRoute ({ children }){
  const { isAuth } = useContext(BookFinderContext);

  return <>{isAuth ? children : <Navigate to='/login' />}</>;
};