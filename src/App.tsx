import { useEffect } from "react";
import Navbar from "./Components/Navbar/Navbar";
import MobileNav from "./Components/Navbar/MobileNav";
import Footer from "./Components/Footer";
import AppRoutes from "./Routes/AppRoutes";
import { Toaster } from 'react-hot-toast'

function App() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="h-screen w-screen bg-primary overflow-x-hidden">
      <Navbar />
      <MobileNav />
      <Toaster/>
      <AppRoutes />
      <Footer />
    </div>
  );
}

export default App;
