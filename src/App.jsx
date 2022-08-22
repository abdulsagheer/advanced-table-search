import "./App.css";
import DataTable from "./DataTable";
import React from "react";

function App() {
  return (
    <div
      className="App"
      style={{
        margin: "auto",
        padding: "15px",
        maxWidth: "1400px",
        alignContent: "center",
      }}
    >
      <DataTable />
    </div>
  );
}

export default App;
