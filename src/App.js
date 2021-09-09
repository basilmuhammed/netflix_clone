import React from "react";
import "./App.css";
import NavBar from "./Components/NavBar/NavBar";
import Banner from "./Components/Banner/Banner";
import RawPost from "./Components/RawPost/RawPost";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <RawPost title="netflix Originals" />
      <RawPost title="Action" isSmall />
    </div>
  );
}

export default App;
