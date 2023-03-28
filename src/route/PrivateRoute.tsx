import { Navigate } from "react-router-dom";

interface PrivateRouteProps {
  children?: any;
}

const PrivateRoute = (props: PrivateRouteProps) => {
  const { children } = props;
  return false ? <Navigate to="/" /> : children;
};

export default PrivateRoute;
