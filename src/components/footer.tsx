import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-50">
      <div className="footerContainer">
        <div className="footerList">
          <div className="navbarLogo">
              <img src="/fuelpoolLogo.svg" />
              <img src="/fuelpoolText.svg" />
          </div>
          <p className="text-center text-base font-normal">© 2025 Fuelpool</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
