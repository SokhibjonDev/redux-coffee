import React from "react";
import classes from "./Navbar.module.css";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className={classes.Navbar}>
      <ul className={classes.AllCatalog}>
        <Link className={classes.Logo} to={"/"}>
          Americano
        </Link>
        <ul className={classes.Navigation}>
          <Link className={classes.list} to={"/products"}>
            All Coffees
          </Link>
          <Link className={classes.list} to={"/controls"}>
            Controls
          </Link>
          <Link className={classes.list} to={"/favorites"}>
            Favorites
          </Link>
          <Link className={classes.list} to={"/about"}>
            About
          </Link>
        </ul>
        <Link className={classes.Account} to={"/account"}>
          Account
        </Link>
      </ul>
    </div>
  );
};

export default Navbar;
