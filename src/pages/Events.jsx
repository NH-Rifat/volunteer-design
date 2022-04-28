import React from "react";
import { EventsData } from "../data";

const Events = () => {
  return (
    <section className="events">
      <div className="events__wrapper">
        <div className="events__content">
          {EventsData.map((event) => {
            return (
              <div className="events__content-single" key={event.id}>
                <div className="events__content-single-img">
                  <img src={event.img} alt="eventImg" />
                </div>
                <div className="events__content-single__info">
                  <h4>{event.name}</h4>
                  <p>{event.date}</p>
                  <button className="events__content-single__info-btn">
                    Cancel
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Events;
