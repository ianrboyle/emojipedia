import React from "react";
import Entry from "./Entry";
import CreateEntry from "./CreateEntry";
import emojipedia from "../emojipedia.js";
function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">{emojipedia.map(CreateEntry)}</dl>
    </div>
  );
}

export default App;
