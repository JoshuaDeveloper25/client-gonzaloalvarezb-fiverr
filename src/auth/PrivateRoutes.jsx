import { Navigate, Outlet } from "react-router-dom";
import AppContext from "../context/AppProvider";
import { useContext } from "react";

export const PrivateRoutes = () => {
  const { userInfo } = useContext(AppContext);
  return userInfo?.token ? <Outlet /> : <Navigate to="/" />;
};
