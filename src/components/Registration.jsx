import React from "react";

const Registration = () => {
  return (
    <section className="registration">
      <div className="registration__wrapper">
        <form className="registration__form">
          <h2 className="registration__form-heading">
            Register as a Volunteer
          </h2>
          <input
            type="text"
            name="fullname"
            id="fullname"
            placeholder="Full Name"
          />
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Username or Email"
          />
          <input type="date" name="date" id="date" placeholder="Date" />
          <input
            type="text"
            name="description"
            id="description"
            placeholder="Description"
          />
          <input
            type="text"
            name="books"
            id="books"
            placeholder="Organize books at the library."
          />
          <button className="registration__form-btn">Registration</button>
        </form>
      </div>
    </section>
  );
};

export default Registration;
