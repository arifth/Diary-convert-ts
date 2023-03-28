import { Navigate } from "react-router-dom";

interface PublicRouteProps {
  children: any;
}

const PublicRoute = (props: PublicRouteProps) => {
  const { children } = props;
  return false ? <Navigate to="/" /> : children;
};

export default PublicRoute;
