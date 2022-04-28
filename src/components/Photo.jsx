import React from "react";
import { PhotoInfo } from "../data";
const Photo = () => {
  return (
    <>
      <section className="photo">
        <div className="photo__wrapper">
          <div className="photo__content">
            {PhotoInfo.map((photo) => {
              return (
                <div className="photo__content-single" id={photo.id}>
                  <img
                    src={photo.img}
                    alt="photoImg"
                    className="photo__content-single-img"
                  />
                  <div
                    className="photo__content-single-heading"
                    style={{ backgroundColor: `${photo.color}` }}
                  >
                    {photo.text}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Photo;
