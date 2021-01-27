import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Resume({ t }) {
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
            <h3 className="title">{t("resume.t1")}</h3>
          </div>
        </div>
        <div className="row resume__row">
          <div className="col-12 col-md-6 resume__col mb-48">
            <h4>{t("resume.t2")}</h4>
            <h5>Condusef</h5>
            <h6 className="resume__type">{t("resume.p1")}</h6>
            <p>2019-2020</p>
          </div>
          <div className="col-12 col-md-6 resume__col">
            <h4>{t("resume.t3")}</h4>
            <h5>Instituto Politécnico Nacional</h5>
            <h6 className="resume__type">{t("resume.p3")}</h6>
            <p>2016 - {t("resume.p4")}</p>
          </div>
        </div>

        <div className="row">
          <div className="col-12 resume__col">
            <h4>{t("resume.t4")}</h4>
          </div>
        </div>
        <div className="row resume__row">
          <div className="col-12 col-md-6 resume__col mb-48">
            <h5>{t("resume.t5")}</h5>
            <p>Responsive Web Design</p>
            <p>Single Page Applications</p>
            <p>Agile Development</p>
          </div>
          <div className="col-12 col-md-6 resume__col">
            <h5>{t("resume.t6")}</h5>
            <p>UI/UX Design</p>
            <p>Prototyping</p>
            <p>Wireframing</p>
          </div>
        </div>

        <div className="row">
          <div className="col-12 resume__col">
            <h4>{t("resume.t7")}</h4>
          </div>
        </div>
        <div className="row resume__row">
          <div className="col-6 col-md-6 resume__col">
            <p>HTML / CSS / JS</p>
            <p>React</p>
            <p>SASS</p>
            <p>API REST</p>
            <p>Next js</p>
            <p>Jquery</p>
            <p>GIT</p>
          </div>
          <div className="col-6 col-md-6 resume__col">
            <p>Bootstrap</p>
            <p>Tailwind CSS</p>
            <p>Lottie</p>
            <p>Figma</p>
            <p>Adobe XD</p>
            <p>GSAP</p>
            <p>VSCode</p>
          </div>
        </div>
      </div>
    </div>
  );
}
