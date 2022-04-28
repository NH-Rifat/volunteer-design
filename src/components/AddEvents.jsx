import React from "react";

const AddEvents = () => {
  return (
    <section className="addevents">
      <div className="addevents__wrapper">
        <div className="addevents__content">
          <form className="addevents__content-form">
            <div className="addevents__content-form-flex">
              <div className="addevents__content-form-input">
                <h4>Event Title</h4>
                <input
                  type="text"
                  name="title"
                  id="title"
                  placeholder="Enter title"
                />
              </div>
              <div className="addevents__content-form-input">
                <h4>Event Date</h4>
                <input type="date" name="date" id="date" placeholder="Date" />
              </div>
            </div>
            <div className="addevents__content-form-flex">
              <div className="addevents__content-form-input">
                <h4>Description</h4>
                <input
                  type="text"
                  name="description"
                  id="description"
                  placeholder="Enter Description"
                />
              </div>
              <div className="addevents__content-form-input">
                <h4>Banner</h4>
                <input type="file" name="banner" id="banner" />
              </div>
            </div>
            <button className="addevents__content-form-btn">Submit</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default AddEvents;
