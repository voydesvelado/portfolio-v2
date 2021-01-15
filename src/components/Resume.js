import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Resume() {
  const resumeRef = useRef(null);
  useEffect(() => {
    gsap.from(resumeRef.current, {
      duration: 1.2,
      y: 50,
      opacity: 0,
      ease: "Power3.in",
      scrollTrigger: {
        trigger: resumeRef.current,
        id: "resume",
        toggleActions: "play none none reverse",
      },
    });
  }, []);

  return (
    <div className="resume py-4 mb-5" ref={resumeRef}>
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6">
            <h3 className="title">Currículum</h3>
          </div>
        </div>
        <div className="row resume__row">
          <div className="col-12 col-md-6 resume__col mb-48">
            <h4>Experiencia de trabajo</h4>
            <h5>Condusef</h5>
            <h6 className="resume__type">Desarrollador Front-end</h6>
            <p>2019-2020</p>
          </div>
          <div className="col-12 col-md-6 resume__col">
            <h4>Educación</h4>
            <h5>Instituto Politécnico Nacional</h5>
            <h6 className="resume__type">Lic. Ciencias de la Informática</h6>
            <p>2016 - actual</p>
          </div>
        </div>

        <div className="row">
          <div className="col-12 resume__col">
            <h4>Habilidades</h4>
          </div>
        </div>
        <div className="row resume__row">
          <div className="col-12 col-md-6 resume__col mb-48">
            <h5>Desarrollo</h5>
            <p>Responsive Web Design</p>
            <p>Single Page Applications</p>
            <p>Agile Development</p>
          </div>
          <div className="col-12 col-md-6 resume__col">
            <h5>Diseño</h5>
            <p>UI/UX Design</p>
            <p>Prototyping</p>
            <p>Wireframing</p>
          </div>
        </div>

        <div className="row">
          <div className="col-12 resume__col">
            <h4>Herramientas</h4>
          </div>
        </div>
        <div className="row resume__row">
          <div className="col-6 col-md-6 resume__col">
            <p>HTML / CSS / JS</p>
            <p>React</p>
            <p>SASS</p>
            <p>Next JS</p>
            <p>GIT</p>
            <p>SQL</p>
          </div>
          <div className="col-6 col-md-6 resume__col">
            <p>Bootstrap</p>
            <p>Lottie</p>
            <p>Figma</p>
            <p>Adobe XD</p>
            <p>GSAP</p>
            <p>Visual Studio Code</p>
          </div>
        </div>
      </div>
    </div>
  );
}
