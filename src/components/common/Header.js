import React from "react";
//anchor that react router dom manages for us
import { NavLink } from "react-router-dom";

const Header = () => {
  const activeStyle = { color: "#F15B2A" };

  return (
    <nav>
      <NavLink to="/" activeStyle={activeStyle} exact>
        Home
      </NavLink>
      {" | "}
      <NavLink to="/findQuotes" activeStyle={activeStyle}>
        Find a Quote
      </NavLink>
      {" | "}
      <NavLink to="/findJokes" activeStyle={activeStyle}>
        Find a Joke
      </NavLink>
      {" | "}
      <NavLink to="/courses" activeStyle={activeStyle}>
        Courses
      </NavLink>
      {" | "}
      <NavLink to="/about" activeStyle={activeStyle}>
        About
      </NavLink>
      {" | "}
      <NavLink to="/profile" activeStyle={activeStyle}>
        Profile
      </NavLink>
    </nav>
  );
};

export default Header;
