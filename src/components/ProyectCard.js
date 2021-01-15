import React from "react";

const ProyectCard = ({ title, description, img, link }) => {
  return (
    <a className="col-12 col-md-6 mb-4" href={link} target="_blank" alt="title">
      <div className="proyects__card">
        <div className={`proyects__img proyects__${img}`}></div>
        <h5 className="mt-3">{title}</h5>
        <p className="mb-3">{description}</p>
      </div>
    </a>
  );
};

export default ProyectCard;
