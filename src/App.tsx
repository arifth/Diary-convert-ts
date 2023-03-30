import React from "react";
import { Routes, Route } from "react-router-dom";
import PublicRoute from "./route/PublicRoute";
import PrivateRoute from "./route/PrivateRoute";
const HomePage = React.lazy(() => import("./pages/Home"));
const ListCards = React.lazy(() => import("./pages/ListCards"));
const DetailCard = React.lazy(() => import("./pages/Detail"));

function App() {
  console.log(process.env);
  return (
    <Routes>
      <Route
        path="/"
        element={
          <React.Suspense fallback={<div>Loading...</div>}>
            {/* <PublicRoute> */}
            <HomePage />
            {/* </PublicRoute> */}
          </React.Suspense>
        }
      />
      <Route
        path="/list-cards"
        element={
          <React.Suspense fallback={<div>Loading...</div>}>
            <PrivateRoute>
              <ListCards />
            </PrivateRoute>
          </React.Suspense>
        }
      />

      <Route
        path="/detail-card/:id"
        element={
          <React.Suspense fallback={<div>Loading...</div>}>
            <PrivateRoute>
              <DetailCard />
            </PrivateRoute>
          </React.Suspense>
        }
      />
    </Routes>
  );
}

export default App;
