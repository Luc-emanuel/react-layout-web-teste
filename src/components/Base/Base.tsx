import React from "react";
import "./index.css";
import { BaseProps } from "../../utils/interfaces";

const Base = (props: BaseProps) => {
  const { size } = props;
  return (
    <div id="base">
      <div
        id="base-mid"
        style={{
          width:
            size === "xl"
              ? "70%"
              : size === "lg" || size === "lx"
              ? "80%"
              : size === "md"
              ? "85%"
              : "100%",
        }}
      >
        {props.children}
      </div>
    </div>
  );
};

export default Base;
