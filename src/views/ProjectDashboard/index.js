import React, { useEffect, useState, useRef } from "react";
import { connect } from "react-redux";

const ProjectDashboard = (props) => {
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
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {};
};

export default connect(mapStateToProps, {})(ProjectDashboard);
