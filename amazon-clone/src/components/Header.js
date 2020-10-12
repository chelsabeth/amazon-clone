import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";

function Header() {
  return (
    <nav className="header">
      {/* logo on left - img */}
      <Link to="/">
        <img
          className="header_logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="amazon logo"
        />
      </Link>
      {/* search box */}
      <div className="header_search"></div>
      <input type="text" className="header_searchInput" />
      <SearchIcon className="header_searchIcon" />
      {/* 3 links on the right - sign in, orders, and prime */}
      <div className="header_nav"></div>
      {/* basket icon with number based on items in cart */}
    </nav>
  );
}

export default Header;
