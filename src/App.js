import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Nav from "./components/Nav/Nav";
import HomePage from "./pages/HomePage";
import ProjectPage from "./pages/ProjectPage";
import LoginPage from "./pages/LoginPage";
import CreatedProjectPage from "./pages/CreateProjectPage";

function App() {
  return (
    <Router>
      <div>
        <h1>Mission PAWssible</h1>
      </div>
      <div>
        <Nav />

        <Switch>
          <Route exact path="/createprojectpage">
            <CreatedProjectPage />
          </Route>
          <Route path="/project/:id">
            <ProjectPage />
          </Route>
          <Route path="/login">
            <LoginPage />
          </Route>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
