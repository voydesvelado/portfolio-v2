import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const Loader = () => {
  const loaderRef = useRef(null);
  const backRef = useRef(null);
  useEffect(() => {
    const timeline = gsap.timeline();

    timeline
      .to(loaderRef.current, 0, { css: { visibility: "visible" } })
      .from(loaderRef.current, {
        duration: 1,
        opacity: 0,
        y: 50,
        ease: "Power3.in",
      })
      .to(loaderRef.current, { opacity: 0 })
      .to(backRef.current, {
        width: "0%",
      });
  }, []);
  return (
    <section
      className="loader d-flex justify-content-center align-items-center"
      ref={backRef}
    >
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h4 className="loader__text text-white text-center" ref={loaderRef}>
              Has llegado al lugar indicado.
            </h4>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Loader;
