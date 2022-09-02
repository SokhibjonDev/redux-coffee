import React from "react";
import classes from "./Footer.module.css";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className={classes.Footer}>
      <div className="container">
        <ul className={classes.AllCatalog}>
          <ul>
            <li>
              <Link className={classes.link} to={"./ads"}>McCoffee</Link>
            </li>
            <li>
              <Link className={classes.link} to={"./ads"}>Starbucks</Link>
            </li>
            <li>
              <Link className={classes.link} to={"./ads"}>KFC</Link>
            </li>
            <li>
              <Link className={classes.link} to={"./ads"}>McDonald</Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link className={classes.link} to={"./ads"}>McCoffee</Link>
            </li>
            <li>
              <Link className={classes.link} to={"./ads"}>Starbucks</Link>
            </li>
            <li>
              <Link className={classes.link} to={"./ads"}>KFC</Link>
            </li>
            <li>
              <Link className={classes.link} to={"./ads"}>McDonald</Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link className={classes.link} to={"./ads"}>McCoffee</Link>
            </li>
            <li>
              <Link className={classes.link} to={"./ads"}>Starbucks</Link>
            </li>
            <li>
              <Link className={classes.link} to={"./ads"}>KFC</Link>
            </li>
            <li>
              <Link className={classes.link} to={"./ads"}>McDonald</Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link className={classes.link} to={"./ads"}>McCoffee</Link>
            </li>
            <li>
              <Link className={classes.link} to={"./ads"}>Starbucks</Link>
            </li>
            <li>
              <Link className={classes.link} to={"./ads"}>KFC</Link>
            </li>
            <li>
              <Link className={classes.link} to={"./ads"}>McDonald</Link>
            </li>
          </ul>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
