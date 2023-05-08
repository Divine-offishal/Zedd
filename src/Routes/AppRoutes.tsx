import React, { lazy, Suspense } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import AccItem from "../Pages/AcccitemPage";
import PrivateRoute from "./PrivateRoute";
import { AnimatePresence } from "framer-motion";

const Home = lazy(() => import("../Pages/Home"));
const Browse = lazy(() => import("../Pages/Browse"));
const Accessories = lazy(() => import("../Pages/Accessories"));
const Carpage = lazy(() => import("../Pages/Carpage"));
const Saved = lazy(() => import("../Pages/Saved/Saved"));
const SignUp = lazy(() => import("../Pages/Auth/SignUp"));
const Login = lazy(() => import("../Pages/Auth/Login"));

const AppRoutes = () => {

  const location = useLocation()
  return (
    <Suspense
      fallback={
        <div className="h-screen w-screen text-center text-secondary">
          Loading...
        </div>
      }
    >
      <AnimatePresence>
        <Routes key={location.pathname} location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/sales" element={<Browse />} />
          <Route path="/repairs" element={<Accessories />} />
          <Route path="/signup" element={<SignUp/> } />
          <Route path="/login" element={<Login/>} />
          <Route element={<PrivateRoute/>}>
            <Route path="/saved" element={<Saved />} />
          </Route>
          
          {/* Dynamic Routes */}
          <Route path="/cars/:slug" element={<Carpage />} />
          <Route path="/parts/:slug" element={<AccItem />} />

          <Route path="*" element={<div className="h-screen w-screen">There is an error</div>} />
        </Routes>
      </AnimatePresence>
    </Suspense>
  );
};

export default AppRoutes;
