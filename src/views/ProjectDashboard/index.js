/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState, useRef } from "react";
import { connect } from "react-redux";

const ProjectDashboard = (props) => {
    // const [initialTab, setinitialTab] = useState('Summery')
  const tabs = [
    { name: "Summary", id: "summery" },
    { name: "Asset Basic", id: "asset-basic" },
    { name: "Asset Specs", id: "asset-specs" },
    { name: "Line Basic", id: "line-basic" },
    { name: "Line Specs", id: "line-specs" },
  ];

  useEffect( () => {
      document.querySelector('#project-dashboard ul li button').className = "nav-link active"
      document.querySelector('#project-dashboard #tabContent .tab-pane').className = "tab-pane fade show active"
  }, [])

  return (
    <div id="project-dashboard">
      <div className="header-section">
        <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
          {tabs.map((tab, index) => (
            <li className="nav-item" role="presentation" key={index}>
              <button
                className="nav-link"
                id={tab.id + "-tab"}
                data-bs-toggle="pill"
                data-bs-target={"#" + tab.id}
                type="button"
                role="tab"
                aria-controls={tab.id}
                aria-selected="true"
              >
                {tab.name}
              </button>
            </li>
          ))}
          {/* <li className="nav-item" role="presentation">
            <button
              className="nav-link active"
              id="pills-home-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-home"
              type="button"
              role="tab"
              aria-controls="pills-home"
              aria-selected="true"
            >
              Home
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-link"
              id="pills-profile-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-profile"
              type="button"
              role="tab"
              aria-controls="pills-profile"
              aria-selected="false"
            >
              Profile
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-link"
              id="pills-contact-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-contact"
              type="button"
              role="tab"
              aria-controls="pills-contact"
              aria-selected="false"
            >
              Contact
            </button>
          </li> */}
        </ul>
        <div className="tab-content" id="tabContent">
          {tabs.map((tab, index) => (
            <div
              className="tab-pane fade"
              id={tab.id}
              role="tabpanel"
              aria-labelledby={tab.id + "-tab"}
              key={index}
            >
              {tab.name}
            </div>
          ))}
          {/* <div
            className="tab-pane fade show active"
            id="pills-home"
            role="tabpanel"
            aria-labelledby="pills-home-tab"
          >
            Home
          </div>
          <div
            className="tab-pane fade"
            id="pills-profile"
            role="tabpanel"
            aria-labelledby="pills-profile-tab"
          >
            Profile
          </div>
          <div
            className="tab-pane fade"
            id="pills-contact"
            role="tabpanel"
            aria-labelledby="pills-contact-tab"
          >
            Contact
          </div> */}
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {};
};

export default connect(mapStateToProps, {})(ProjectDashboard);
