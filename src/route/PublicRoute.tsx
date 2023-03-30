import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

interface PublicRouteProps {
  children: any;
}

const PublicRoute = (props: PublicRouteProps) => {
  const { children } = props;
  const { isLoggedIn } = useSelector((state: any) => state.isLoggedIn) || false;
  return isLoggedIn === false ? (
    <Navigate to={children} />
  ) : (
    <Navigate to={"/"} />
  );
};

export default PublicRoute;
