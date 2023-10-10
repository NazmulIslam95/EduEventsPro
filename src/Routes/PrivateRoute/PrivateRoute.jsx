/* eslint-disable react/prop-types */
import { useContext } from "react";
import { AuthContext } from "../../firebase/AuthProvider";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user } = useContext(AuthContext);
  console.log(user);

  if (user) {
    return children;
  }
  return <Navigate to="/logIn" replace></Navigate>
};

export default PrivateRoute;
