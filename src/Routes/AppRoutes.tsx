import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
const Home = lazy(() => import("../Pages/Home"));
const Browse = lazy(() => import("../Pages/Browse"));
const Accessories = lazy(() => import("../Pages/Accessories"));
const Carpage = lazy(() => import("../Pages/Carpage"));
const Saved = lazy(() => import("../Pages/Saved/Saved"));

const AppRoutes = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Suspense fallback={<div>Loading...</div>}>
            <Home />
          </Suspense>
        }
      />
      <Route
        path="/sales"
        element={
          <Suspense fallback={<div>Loading...</div>}>
            <Browse />
          </Suspense>
        }
      />
      <Route
        path="/repairs"
        element={
          <Suspense fallback={<div>Loading...</div>}>
            <Accessories />
          </Suspense>
        }
      />
      <Route
        path="/saved"
        element={
          <Suspense fallback={<div>Loading...</div>}>
            <Saved />
          </Suspense>
        }
      />
      <Route
        path="/cars/:car"
        element={
          <Suspense fallback={<div>Loading...</div>}>
            <Carpage />
          </Suspense>
        }
      />
    </Routes>
  );
};

export default AppRoutes;
