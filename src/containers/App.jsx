import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import HomePage from "../components/HomePage";
import CoursesPage from "../components/CoursesPage";
import AuthorsPage from "../components/AuthorsPage";
import AboutPage from "../components/AboutPage";
import Header from "../components/Header";

function App() {
  return (
    <div className="container-fluid">
      <BrowserRouter>
        <Header />
        <Route exact path="/" component={HomePage} />
        <Route path="/courses" component={CoursesPage} />
        <Route path="/authors" component={AuthorsPage} />
        <Route path="/about" component={AboutPage} />
      </BrowserRouter>
    </div>
  );
}

export default App;
