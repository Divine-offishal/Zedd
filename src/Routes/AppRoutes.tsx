import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import AccItem from "../Pages/AcccitemPage";
const Home = lazy(() => import("../Pages/Home"));
const Browse = lazy(() => import("../Pages/Browse"));
const Accessories = lazy(() => import("../Pages/Accessories"));
const Carpage = lazy(() => import("../Pages/Carpage"));
const Saved = lazy(() => import("../Pages/Saved/Saved"));
const SignUp = lazy(() => import("../Pages/Auth/SignUp"));
const Login = lazy(() => import("../Pages/Auth/Login"));

const AppRoutes = () => {
  return (
    <Suspense
      fallback={
        <div className="h-screen w-screen text-center text-secondary">
          Loading...
        </div>
      }
    >
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sales" element={<Browse />} />
        <Route path="/repairs" element={<Accessories />} />
        <Route path="/saved" element={<Saved />} />
        <Route path="/signup" element={<SignUp/> } />
        <Route path="/login" element={<Login/>} />
        
        {/* Dynamic Routes */}
        <Route path="/cars/:slug" element={<Carpage />} />
        <Route path="/parts/:slug" element={<AccItem />} />
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;
