import React from "react";
import ReactDOM from "react-dom";

import Lista from "./Lista";
import ListaItem from "./ListaItem";

it("Testa a Lista sem quebrar", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Lista />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it("Testa a Item sem quebrar", () => {
  const div = document.createElement("div");
  ReactDOM.render(<ListaItem />, div);
  ReactDOM.unmountComponentAtNode(div);
});
