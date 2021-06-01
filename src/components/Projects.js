import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ReactGA from "react-ga";
import pr1 from "../assets/png/pr-1.png";
import pr2 from "../assets/png/pr-2.png";
import pr3 from "../assets/png/pr-3.png";
import pr4 from "../assets/png/pr-4.png";
import pr5 from "../assets/png/pr-5.png";
import mail from "../assets/svg/mail.svg";
import phone from "../assets/svg/phone.svg";
import download from "../assets/svg/download.svg";
import whatsapp from "../assets/svg/whatsapp.svg";

export const Projects = () => {
  const mainRef = useRef(null);
  const prRef = useRef(null);
  const heroRef = useRef(null);
  const h1Ref = useRef(null);
  const h2Ref = useRef(null);
  const h3Ref = useRef(null);
  const h4Ref = useRef(null);
  const PROJECTS_2021 = [
    {
      id: 3,
      title: "Finerio Landing",
      description:
        "Diseño y desarrollo de landing page para una de las fintech mas importantes en latinoamérica. El objetivo de este producto es dar a conocer los productos de Finerio Connect. El sitio es completamente responsivo.",
      tools: "Figma, React, SASS, GSAP.",
      link: "https://finerioconnect.com/",
      image: pr4,
      offwhite: false,
    },
    {
      id: 2,
      title: "Finerio Calculadora",
      description:
        "Antes de este producto, para explicar el pricing de Finerio a clientes potenciales, se utilizaba una hoja de cálculo que era muy díficil de entender, por eso se creó esta herramienta con el objetivo de ser intuitiva y fácil de usar.",
      tools: "Figma, React, HTML, SASS.",
      link: "https://pricing.finerioconnect.com/",
      image: pr2,
      offwhite: true,
    },
    {
      id: 1,
      title: "Finerio Magic Link",
      description:
        "Magic Link es el producto más importante de Finerio, por lo tanto es constantemente actualizado. Yo me encargué de que las nuevas funciones dentro de esta plataforma fueran fáciles de usar y que el producto luciera premium.",
      tools: "Figma, Angular, HTML, CSS.",
      link: "https://magiclink.finerioconnect.com/access/login",
      image: pr1,
      offwhite: false,
    },
    {
      id: 4,
      title: "Cotizamático Landing",
      description:
        "Rediseño de mini landing page con el propósito de hacer lucir más moderna a AARCO (empresa de seguros) y estar a la altura de la actual competencia en el mercado de cotizadores online, se optó por una estética minimalista.",
      tools: "Figma.",
      link: "https://www.figma.com/proto/Alsv32dL80ZtjWZHSDf9a3/Landing-Cotizamatico?page-id=1%3A3&node-id=234%3A66&viewport=153%2C490%2C0.8367149829864502&scaling=min-zoom",
      image: pr3,
      offwhite: true,
    },
    {
      id: 5,
      title: "Cotizamático Calculadora",
      description:
        "Diseño visual para mini aplicación que te permite conocer el valor estimado de tu hogar. Este proyecto mantiene la misma línea visual de la landing page del cotizamático para generar mayor identidad de la marca.",
      tools: "Figma.",
      link: "https://www.figma.com/proto/Alsv32dL80ZtjWZHSDf9a3/Landing-Cotizamatico?page-id=1%3A3&node-id=238%3A0&viewport=-584%2C407%2C0.5590086579322815&scaling=min-zoom",
      image: pr5,
      offwhite: false,
    },
  ];

  function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }

  useEffect(() => {
    ReactGA.initialize("UA-187483667-1");
    ReactGA.pageview("/");

    const tl = gsap.timeline({
      defaults: { duration: 0.4, ease: "Power3.in" },
    });
    tl.to(mainRef.current, 0, { css: { visibility: "visible" } })
      .from(heroRef.current, {
        opacity: 0,
      })
      .from(h1Ref.current, {
        opacity: 0,
        y: 50,
      })
      .from(h2Ref.current, {
        opacity: 0,
        y: 50,
      })
      .from(h3Ref.current, {
        opacity: 0,
        y: 50,
      })
      .from(h4Ref.current, {
        opacity: 0,
        y: 50,
      })
      .from(prRef.current, {
        opacity: 0,
        y: 50,
        delay: -1.6,
      });
  }, []);

  return (
    <div ref={mainRef} className="main-container">
      <div
        className={`hero__container mesh${getRandomArbitrary(1, 5)}`}
        ref={heroRef}
      >
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1 className="hero__main-title" ref={h1Ref}>
                David Herrera, User Experience Engineer
              </h1>
            </div>
            <a
              ref={h2Ref}
              href="https://wa.me/5216641265999"
              rel="noopener noreferrer"
              target="_blank"
              className="project__btn fixed-btn d-flex d-lg-none"
            >
              <img src={whatsapp} alt="send and email" className="svg-24" />
            </a>
            <div className="col-12 d-flex justify-content-end project__negative">
              <div className="projects__buttons d-none d-lg-block">
                <a
                  href="mailto:contactochka@gmail.com"
                  className="project__btn"
                  ref={h2Ref}
                >
                  <img src={mail} alt="send and email" className="svg-24" />
                </a>
                <a
                  href="https://wa.me/5216641265999"
                  rel="noopener noreferrer"
                  target="_blank"
                  className="project__btn"
                  ref={h3Ref}
                >
                  <img src={phone} alt="send a message" className="svg-24" />
                </a>
                <a
                  href="https://drive.google.com/file/d/1Z6jKJYBX-AaqfWo_iBToAslszq_zKtrX/view"
                  rel="noopener noreferrer"
                  target="_blank"
                  className="project__btn"
                  ref={h4Ref}
                >
                  <img src={download} alt="download CV" className="svg-24" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div ref={prRef} id="prRef">
        {PROJECTS_2021.map((p) => {
          return (
            <div
              key={p.id}
              className={`projects__container ${
                p.offwhite && "projects__offwhite"
              }`}
            >
              <div className="container ">
                <div className="row">
                  <div className="col-12">
                    <h3 className="projects__title">{p.title}</h3>
                  </div>
                  <div className="col-12 col-lg-10">
                    <p className="projects__description">{p.description}</p>
                  </div>
                  <div className="col-12 col-lg-2">
                    <h6 className="projects__tools-title">Herramientas</h6>
                    <p className="projects__tools">{p.tools}</p>
                    <a
                      rel="noopener noreferrer"
                      target="_blank"
                      className="projects__link"
                      href={p.link}
                    >
                      Visitar sitio
                    </a>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12">
                    <img className="projects__img" src={p.image} alt="" />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
