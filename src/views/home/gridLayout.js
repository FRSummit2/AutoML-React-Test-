import React, { useState } from "react";
import GridLayout from 'react-grid-layout';

import "../../../node_modules/react-grid-layout/css/styles.css";
import "../../../node_modules/react-resizable/css/styles.css";

const DraggableGridLayout = () => {
  const layout = [
    { i: "a", x: 0, y: 0, w: 1, h: 2, static: true },
    { i: "b", x: 1, y: 0, w: 3, h: 2, minW: 2, maxW: 4 },
    { i: "c", x: 4, y: 0, w: 1, h: 2 },
  ];

  return (
    <div>
      <GridLayout
        className="layout"
        layout={layout}
        cols={12}
        rowHeight={30}
        width={1200}
      >
        <div key="a" style={{background: '#6c7cd3'}}>a</div>
        <div key="b" style={{background: '#25af2b'}}>b</div>
        <div key="c" style={{background: '#8d7e00'}}>c</div>
        <div key="d" style={{background: '#6c7cd3'}}>a</div>
      </GridLayout>
    </div>
  );
};

export default DraggableGridLayout;

// Working
// https://bestofreactjs.com/repo/STRML-react-grid-layout-react-ui-layout
