import React from "react";

const Hero = () => {
  return (
    <>
      <section className="hero">
        <div className="hero__wrapper">
          <div className="hero__content">
            <h2 className="hero__content-heading">
              I grow by helping people in need.
            </h2>

            <div className="hero__content-search">
              <input
                name="search"
                placeholder="Search..."
                id="search"
                className="hero__content-search-input"
              />
              <button className="hero__content-search-btn">Search</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
