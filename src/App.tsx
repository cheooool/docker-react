import React from "react";
import logo from "./logo.svg";
import "./App.css";
import HelloWorld from "./HelloWorld";

function App() {
  return (
    <div className="App">
      <HelloWorld />
      <img
        src={
          process.env.NODE_ENV === "development"
            ? "https://placehold.it/100x100"
            : "https://placehold.it/500x500"
        }
      />
    </div>
  );
}

export default App;
