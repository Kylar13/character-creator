import React from "react";

import CharacterEditor from "./components/CharacterEditor";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div
        style={{
          backgroundColor: "inherit",
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          height: "60%",
        }}
      />
      <div
        style={{
          backgroundColor: "hsl(195deg, 20%, 86%)",
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
          height: "40%",
        }}
      />
      <CharacterEditor />
      <Footer />
    </>
  );
}

export default App;
