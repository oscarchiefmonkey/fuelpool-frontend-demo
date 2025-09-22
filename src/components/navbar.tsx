import React from "react";

const Navbar: React.FC = () => {
  return (
    <nav className="sticky shadow-md">
      <div className="navbarContainer">
        <div className="navbarLogo">
            <img src="/fuelpoolLogo.svg" />
            <img src="/fuelpoolText.svg" />
        </div>
        <div className="navbarLinks">
            <a href="#" className="">Platform</a>
            <a href="#" className="">Om Oss</a>
            <a href="#" className="">Kontakt</a>
            <a href="#" className="" style={{visibility: "hidden"}}>Hemlig</a>
            <a href="#" className="navbarLogin">Logga in</a>
        </div>      
      </div>
    </nav>
  );
};

export default Navbar;
