import React, { useEffect, useRef } from "react";
import useCursorTrail from "../utils/cursor-trail";
import Layout from "./Layout";

function CursorTrailCanvas(props) {
  const { refCanvas, cleanUp, renderTrailCursor } = useCursorTrail({
    color: props.color,
  });

  useEffect(() => {
    renderTrailCursor();

    return () => {
      cleanUp();
    };
  }, [props.color, cleanUp, renderTrailCursor]);

  return (
    <>
    <Layout></Layout>
    {/* <canvas
      ref={refCanvas}
      className={props.className}
      style={{
        position: "fixed",
        background:"red",
        top: 0,
        left: 0,
        zIndex: 9, // Largest z-index value to ensure it's on top
        ...props.style, // You can pass additional styles from props
      }}
    ></canvas> */}
        </>

  );
}

export default CursorTrailCanvas;
