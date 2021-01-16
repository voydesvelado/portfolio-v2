import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/base.scss";
import Portfolio from "./components/Portfolio";
import Loader from "./components/Loader";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function App() {
  const [loader, setLoader] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => setLoader(false), 2100);
    return () => clearTimeout(timer);
  }, []);
  return <>{loader ? <Loader /> : <Portfolio />}</>;
}

export default App;
