import React, { useEffect, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/base.scss";
import ReactGA from "react-ga";
import ProyectCard from "./ProyectCard";
import Resume from "./Resume";
import david from "../assets/png/david.png";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Portfolio() {
  const proyectsRef = useRef(null);
  const heroRef = useRef(null);
  const h1Ref = useRef(null);
  const h2Ref = useRef(null);
  const h3Ref = useRef(null);
  const h4Ref = useRef(null);
  const h5Ref = useRef(null);
  const ctaRef = useRef(null);

  const PROYECTOS = [
    {
      title: "Finerio",
      img: "finerio",
      link: "https://finerioconnect.com/",
      description:
        "Landing page de una de las fintechs más importantes en México y toda Latinoamérica.",
    },
    {
      title: "Condusef",
      img: "condusef",
      link: "https://webapps.condusef.gob.mx/Login_RECO/index.jsp",
      description:
        "Desarrollo de aplicaciones web para facilitar la atención a usuarios de servicios financieros.",
    },
    {
      title: "Random Gradient",
      img: "random",
      link: "https://voydesvelado.github.io/random-grad/",
      description:
        "Aplicación generadora de gradientes aleatorios listos para usarse en css.",
    },
    {
      title: "Simple Store",
      img: "simplestore",
      link: "https://voydesvelado.github.io/simple-store/",
      description:
        "Maqueta minimalista de una tienda en línea. Layout simple y straight to the point.",
    },
  ];

  useEffect(() => {
    ReactGA.initialize("UA-187483667-1");
    ReactGA.pageview("/");

    const tl = gsap.timeline({
      defaults: { duration: 0.4, ease: "Power3.in" },
    });
    tl.to(heroRef.current, 0, { css: { visibility: "visible" } })
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
      .from(h5Ref.current, {
        opacity: 0,
        y: 50,
      });

    gsap.from(proyectsRef.current, {
      duration: 1.2,
      y: 50,
      opacity: 0,
      ease: "Power3.in",
      scrollTrigger: {
        id: "proyects",
        toggleActions: "play none none reverse",
      },
    });

    gsap.from(ctaRef.current, {
      duration: 1.2,
      y: 50,
      opacity: 0,
      ease: "Power3.in",
      scrollTrigger: {
        trigger: ctaRef.current,
        id: "proyects",
      },
    });
  }, []);

  return (
    <div>
      {/* hero section */}
      <main className="hero__banner py-4 mb-5" ref={heroRef}>
        <div className="container">
          <div className="row d-flex">
            <div className="col-12 d-flex justify-content-center">
              <div className="hero__avatar" ref={h1Ref}>
                <img alt="David" src={david} />
              </div>
            </div>
          </div>
          <div className="row d-flex justify-content-center text-center">
            <div className="col-12 col-md-9">
              <h3 className="hero__top" ref={h2Ref}>
                Hola, soy David <span>✌️</span>
              </h3>
              <h1 className="hero__title" ref={h3Ref}>
                Desarrollo interfaces, diseño experiencias.
              </h1>
              <p className="hero__description" ref={h4Ref}>
                Desarrollador Front-end radicando en la Ciudad de México. Me
                especializo en UI/UX, Responsive Web Design y SEO.
              </p>
              <a
                href="mailto:contactochka@gmail.com"
                className="hero__cta"
                ref={h5Ref}
              >
                ¡Conectemos!
              </a>
            </div>
          </div>
        </div>
      </main>

      {/* proyects section */}
      <section className="proyects py-4" id="proyects" ref={proyectsRef}>
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6">
              <h3>Trabajos que he realizado.</h3>
            </div>
          </div>
          <div className="row">
            {PROYECTOS.map((p) => {
              return (
                <ProyectCard
                  key={p.title}
                  title={p.title}
                  img={p.img}
                  link={p.link}
                  description={p.description}
                />
              );
            })}
          </div>
        </div>
      </section>

      <Resume />

      {/* call to action */}
      <section ref={ctaRef}>
        <div className="container py-4 mb-5">
          <div className="row d-flex justify-content-center">
            <div className="col-12 col-md-8">
              <h4 className="cta__main">
                Colaboremos, estoy dispuesto a escuchar tu oferta de trabajo o
                freelance.
              </h4>
              <a href="mailto:contactochka@gmail.com" className="cta__link">
                contactar
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* footer */}
      <footer className="footer">
        <div className="container">
          <div className="row py-4">
            <div className="col-12 text-center">
              <p>Diseñado y desarrollado por David Herrera</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Portfolio;