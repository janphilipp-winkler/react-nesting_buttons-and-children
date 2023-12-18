import React from "react";
import "./styles.css";

export default function App() {
  return (
    <main>
      <Button>TRY ME</Button>
      <Button>HIDE ME</Button>
      <Button>LOVE ME</Button>
      <Button>SHOW ME</Button>
    </main>
  );
}

function Button({ children }) {
  return (
    <button className="button" type="button">
      {children}
    </button>
  );
}
