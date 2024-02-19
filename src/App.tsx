import "./App.scss";

import Figure from "./components/molecules/Figure/Figure";
import React from "react";

function App() {
  return (
    <main className="App advicegenerator flex flex--column flex__align--center">
      <Figure />
    </main>
  );
}

export default App;
