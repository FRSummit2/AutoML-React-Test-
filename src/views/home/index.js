/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState, useRef } from "react";
import { connect } from "react-redux";

import Header from "../../components/header";
// import DragResizeContainer from "react-drag-resize";
import { Resizable } from "re-resizable";
import GridExample from "./dragAndDrop";
import DraggableGridLayout from "./gridLayout";

const Home = (props) => {
  // const layout = [
  //   { key: "test", x: 0, y: 0, width: 200, height: 100, zIndex: 1 },
  // ];

  // const canResizable = (isResize) => {
  //   return {
  //     top: isResize,
  //     right: isResize,
  //     bottom: isResize,
  //     left: isResize,
  //     topRight: isResize,
  //     bottomRight: isResize,
  //     bottomLeft: isResize,
  //     topLeft: isResize,
  //   };
  // };

  return (
    <div>
      <Header />
      This is home
      <div>
        <p>Draggable</p>
        {/* <DragResizeContainer
          className="resize-container"
          resizeProps={{
            minWidth: 10,
            minHeight: 10,
            enable: canResizable(isResize),
          }}
          onDoubleClick={clickScreen}
          layout={layout}
          dragProps={{ disabled: false }}
          onLayoutChange={onLayoutChange}
          scale={scale}
        >
          {layout.map((single) => {
            return (
              <div
                key={single.key}
                className="child-container size-auto border"
              >
                text test
              </div>
            );
          })}
        </DragResizeContainer> */}
        <Resizable
          defaultSize={{
            width: 320,
            height: 200,
          }}
        >
          Sample with default size
        </Resizable>
        <DraggableGridLayout />
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {};
};

export default connect(mapStateToProps, {})(Home);
