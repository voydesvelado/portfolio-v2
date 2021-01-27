import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/base.scss";
import Portfolio from "./components/Portfolio";
import Loader from "./components/Loader";

gsap.registerPlugin(ScrollTrigger);

function App() {
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoader(false), 2100);
    return () => clearTimeout(timer);
  }, []);

  const { t, i18n } = useTranslation();
  const [language, setLenguage] = useState("en");

  const changeToEn = () => {
    i18n.changeLanguage(language);
    setLenguage("es");
  };

  const changeToEs = () => {
    i18n.changeLanguage(language);
    setLenguage("en");
  };

  return (
    <>
      {loader ? (
        <Loader />
      ) : (
        <Portfolio
          t={t}
          lang={language}
          handleEn={changeToEn}
          handleEs={changeToEs}
        />
      )}
    </>
  );
}

export default App;
