import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import RecommendedVideos from "./components/RecommendedVideos";
import SearchPage from "./components/SearchPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const tijd = "03.10.00";

function App() {
  return (
    <div className='app'>
      <Router>
        <Navbar />
        <div className='app__body'>
          <Sidebar />
          <Switch>
            <Route path='/search/:searchTerm'>
              <SearchPage />
            </Route>
            <Route path='/'>
              <RecommendedVideos />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
