import React from "react";

function NavBar() {
  return (
    <div>
      <nav className="navbar fixed-top navbar-light bg-light">
        <a href="#" className="navbar-brand">
          Navbar
        </a>
        <form className="form-inline">
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          ></input>
          <button
            className="btn btn-outline-success my-2 my-sm-0"
            type="submit"
          >
            Search
          </button>
        </form>
      </nav>
    </div>
  );
}

export default NavBar;
