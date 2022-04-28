import React, { useState } from "react";

import { FiUsers, FiPlus } from "react-icons/fi";
import AddEvents from "../components/AddEvents";
import Volunteerlist from "../components/Volunteerlist";
const Admin = () => {
  const section = {
    AddEvents: <AddEvents />,
    VolunteerList: <Volunteerlist />,
  };
  const [selectedSection, setSelectedSection] = useState("AddEvents");
  return (
    <section className="admin">
      <div className="admin__page">
        <div className="admin__page-sidebar">
          <div className="admin__page-sidebar-btns">
            <div
              onClick={() => setSelectedSection("VolunteerList")}
              className={
                selectedSection === "VolunteerList"
                  ? "admin__page-sidebar-btn active"
                  : "admin__page-sidebar-btn"
              }
            >
              <FiUsers />
              <h4>Volunteer register list</h4>
            </div>
            <div
              onClick={() => setSelectedSection("AddEvents")}
              className={
                selectedSection === "AddEvents"
                  ? "admin__page-sidebar-btn active"
                  : "admin__page-sidebar-btn"
              }
            >
              <FiPlus />
              <h4>Add event</h4>
            </div>
          </div>
        </div>
        <div className="admin__page-content">{section[selectedSection]}</div>
      </div>
    </section>
  );
};

export default Admin;
