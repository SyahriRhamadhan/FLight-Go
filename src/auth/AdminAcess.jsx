import { Navigate } from "react-router-dom";

function isAdmin ({ children }) {
    const role = localStorage.getItem("role");

    if (role !== "admin") {
      return <Navigate to="/" />;
    }
    return children;
  }
  
  export default isAdmin;