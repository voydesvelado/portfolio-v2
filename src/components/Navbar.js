import React from "react";

const Navbar = ({ t, lang, handleEn, handleEs }) => {
  return (
    <nav className="navbar">
      <div className="container d-flex justify-content-end">
        <div className="row">
          <div className="col-12">
            <button
              className="nav__button"
              onClick={lang === "es" ? handleEs : handleEn}
            >
              {t("hero.nav")}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
