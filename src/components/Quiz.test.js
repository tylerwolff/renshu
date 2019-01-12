import React from "react";
import ReactDOM from "react-dom";
import Quiz from "./Quiz";

it("renders component", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Quiz />, div);
  ReactDOM.unmountComponentAtNode(div);
});
