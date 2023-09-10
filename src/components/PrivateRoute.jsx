import { useEffect } from "react";
import propTypes from "prop-types";
import { toast } from "react-toastify";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (!token) {
      toast.warning("You have to login first!", {
        position: "top-center",
        toastId: "1",
      });
    }
  }, [token]);
  if (token) {
    return children;
  } else {
    return <Navigate to="/login-recruiter" />;
  }
};
PrivateRoute.propTypes = {
  children: propTypes.element,
};

export default PrivateRoute;
