import React from "react";

const Hero: React.FC = () => {
  return (
    <section>
        <div className="hero">
            <div className="heroText">
                <h1 className="font-extrabold">
                  Din digitala nav för enkel och hållbar cisternhantering
                </h1>
                <p>
                  Fuelpool är en modern, digital plattform som förenklar och förbättrar hela kedjan kring mobila och fasta cisterner.
                </p>
            </div>

            <div>
                <img src="/navimage.svg" />
            </div>
        </div>
    </section>
  );
};

export default Hero;
