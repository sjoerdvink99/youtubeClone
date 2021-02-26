import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

const tijd = "00.07.00";

function App() {
  return (
    <div className='app'>
      <Navbar />
      <div className='app__body'>
        <div className='app__bodySidebar'>
          <Sidebar />
        </div>
      </div>
    </div>
  );
}

export default App;
