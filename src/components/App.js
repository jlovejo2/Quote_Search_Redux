import React from "react";
//Switch allows ability to declare that only one route will match
import { Route, Switch } from "react-router-dom";
import HomePage from "./home/HomePage";
import AboutPage from "./about/AboutPage";
import ProfilePage from "./profile/ProfilePage";
import JokesPage from "./jokePage/JokePage";
import Header from "./common/Header";
import Footer from "./common/Footer";
import PageNotFound from "./PageNotFound";
import CoursesPage from "./courses/CoursesPage";
import SearchQuotesPage from "./SearchQuotes";
import ManageCoursePage from "./courses/ManageCoursePage"; //eslint-disable-line import/no-named-as-default
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./styles/index.css";
import ManageProfilePage from "./profile/ManageProfilePage"; //eslint-disable-line import/no-named-as-default

function App() {
  return (
    <div className="container-fluid">
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/profile" component={ProfilePage} />
        <Route path="/findQuotes" component={SearchQuotesPage} />
        <Route path="/findJokes" component={JokesPage} />
        <Route path='/newJokeOrQuote' component={ManageProfilePage} />
        <Route path="/courses" component={CoursesPage} />
        <Route path="/course/:slug" component={ManageCoursePage} />
        <Route path="/course" component={ManageCoursePage} />
        <Route component={PageNotFound} />
      </Switch>
      <ToastContainer autoClose={3000} hideProgressBar />
      <Footer childrenLeft={""} childrenRight={""} />
    </div>
  );
}

export default App;
