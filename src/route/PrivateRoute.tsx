import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

interface PrivateRouteProps {
  children?: any;
}

const PrivateRoute = (props: PrivateRouteProps) => {
  const { isLoggedIn } = useSelector((state: any) => state.isLoggedIn) || false;
  console.log(isLoggedIn);
  const { children } = props;
  return isLoggedIn ? <Navigate to="/" /> : children;
};

export default PrivateRoute;
