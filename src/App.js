import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import RecommendedVideos from "./components/RecommendedVideos";

const tijd = "02.13.54";

function App() {
  return (
    <div className='app'>
      <Navbar />
      <div className='app__body'>
        <Sidebar />
        <RecommendedVideos />
      </div>
    </div>
  );
}

export default App;
