import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ReactGA from "react-ga";

import pr6 from "../assets/png/Pfm.png";
import pr7 from "../assets/png/Wizard.png";
import pr8 from "../assets/png/Synth.png";
import pr9 from "../assets/png/Efm.png";

// import pr1 from "../assets/png/pr-1.png";
// import pr2 from "../assets/png/pr-2.png";
// import pr3 from "../assets/png/pr-3.png";
// import pr4 from "../assets/png/pr-4.png";
// import pr5 from "../assets/png/pr-5.png";
import mail from "../assets/svg/mail.svg";
// import download from "../assets/svg/download.svg";
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
      id: 1,
      title: "Personal Finance Manager",
      description:
        "<p class='projects__description'>This product allows its users to have complete control of their finances. I was involved in all the design phases of the creation of this application, with an <b>emphasis on making the interface easy to use.</b></p>",
      tools: "Fintech, Start-up, PFM",
      link: "https://magiclink.finerioconnect.com/access/login",
      image: pr6,
      offwhite: false,
    },
    {
      id: 3,
      title: "Document Editor",
      description:
        "<p class='projects__description'>I was in charge of redesigning this platform, due to its volume it was very difficult to use so I made a lot of<b> tests with users so we could validate the usability.</b></p>",
      tools: "Synthesis, Redesign, UX Improvement",
      link: "https://finerioconnect.com/",
      image: pr8,
      offwhite: true,
    },
    {
      id: 2,
      title: "Account Aggregator",
      description:
        "<p class='projects__description'>This module allows linking bank accounts, so we required an experience that would provide safety to the user and we achieved it with a <b>professional, clean and minimalist UI.</b></p>",
      tools: "User sentiment, Open Banking, UI Minimalism.",
      link: "https://pricing.finerioconnect.com/",
      image: pr7,
      offwhite: false,
    },

    {
      id: 4,
      title: "E-commerce Manager",
      description:
        "<p class='projects__description'>Design of a dashboard experience and interface that allows its users to have control of their inputs and outputs as an e-commerce business. <b>Easy to use and intuitive.</b></p>",
      tools: "Dashboard, e-commerce",
      link: "https://www.figma.com/proto/Alsv32dL80ZtjWZHSDf9a3/Landing-Cotizamatico?page-id=1%3A3&node-id=234%3A66&viewport=153%2C490%2C0.8367149829864502&scaling=min-zoom",
      image: pr9,
      offwhite: true,
    },
    // {
    //   id: 5,
    //   title: "Cotizamático Calculadora",
    //   description:
    //     "Diseño visual para mini aplicación que te permite conocer el valor estimado de tu hogar. Este proyecto mantiene la misma línea visual de la landing page del cotizamático para generar mayor identidad de la marca.",
    //   tools: "Figma.",
    //   link: "https://www.figma.com/proto/Alsv32dL80ZtjWZHSDf9a3/Landing-Cotizamatico?page-id=1%3A3&node-id=238%3A0&viewport=-584%2C407%2C0.5590086579322815&scaling=min-zoom",
    //   image: pr5,
    //   offwhite: false,
    // },
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
        className={`hero__container mesh${getRandomArbitrary(1, 4)}`}
        ref={heroRef}
      >
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1 className="hero__main-title" ref={h1Ref}>
                David Herrera, UX/UI Designer
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
                  <img src={whatsapp} alt="send a message" className="svg-24" />
                </a>
                {/* <a
                  href="https://drive.google.com/file/d/1pGb_8e0scbqprA3NbMAj9Fxo-QlQd6Z5/view"
                  rel="noopener noreferrer"
                  target="_blank"
                  className="project__btn"
                  ref={h4Ref}
                >
                  <img src={download} alt="download CV" className="svg-24" />
                </a> */}
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
                  {p.id == 1 && (
                    <div className="col-12">
                      <p className="projects__showcase">Showcase</p>
                    </div>
                  )}

                  <div className="col-12">
                    <h3 className="projects__title">{p.title}</h3>
                  </div>
                  <div className="col-12 col-lg-10">
                    <div
                      dangerouslySetInnerHTML={{ __html: p.description }}
                    ></div>
                    {/* <p className="projects__description">{p.description}</p> */}
                  </div>
                  <div className="col-12 col-lg-2">
                    <h6 className="projects__tools-title">Key Words</h6>
                    <p className="projects__tools">{p.tools}</p>
                    {/* <a
                      rel="noopener noreferrer"
                      target="_blank"
                      className="projects__link"
                      href={p.link}
                    >
                      Visitar sitio
                    </a> */}
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

        <div className="projects__footer">
          <div className="d-flex align-items-center justify-content-center">
            <p className="mb-0">Made with ❤️ by myself. 2023.</p>
          </div>
        </div>
      </div>
    </div>
  );
};
