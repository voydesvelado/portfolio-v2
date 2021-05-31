import React, { useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/base.scss";
import Loader from "./components/Loader";
import { Projects } from "./components/Projects";

gsap.registerPlugin(ScrollTrigger);

function App() {
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoader(false), 2100);
    return () => clearTimeout(timer);
  }, []);

  return <>{loader ? <Loader /> : <Projects />}</>;
}

export default App;
