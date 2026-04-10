import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import { BookingProvider } from "./context/BookingContext";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import AppRoutes from "./routes/AppRoutes";
import Categories from "./pages/public/Categories";
import { useRef, useEffect } from "react";
import LocomotiveScroll from "locomotive-scroll";

function App() {
  const scrollRef = useRef(null);

  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
      multiplier: 1,
      lerp: 0.1,
    });
    return () => {
      scroll.destroy();
    };
  }, []);
  return (
    <Router>
      <AuthProvider>
        <BookingProvider>
          <div
            data-scroll-container
            ref={scrollRef}
            className="flex flex-col min-h-screen"
          >
            <Navbar />
            <main className="grow">
              <AppRoutes />
            </main>
            <Categories />
            {/* <Footer /> */}
          </div>
        </BookingProvider>
      </AuthProvider>
    </Router>
  );
}

export default App;
