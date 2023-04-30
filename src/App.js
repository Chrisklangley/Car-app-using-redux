import React from "react";
import "./App.css";
import CarFrom from "./Components/CarFrom";
import CarList from "./Components/CarList";
import CarSearch from "./Components/CarSearch";
import CarValue from "./Components/CarValue";

function App() {
  return (
    <div className="container is-fluid">
      <CarFrom />
      <CarSearch />
      <CarList />
      <CarValue />
    </div>
  );
}

export default App;
