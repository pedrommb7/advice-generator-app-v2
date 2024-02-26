import "./App.scss";

import Figure from "./components/molecules/Figure/Figure";
import Heading from "./components/atoms/Heading/Heading";
import React from "react";

function App() {
  return (
    <main className="App advicegenerator flex flex--column flex__align--center">
      <Figure />
      <Heading type="h2" text="Get inspired, pick your advice" />
    </main>
  );
}

export default App;