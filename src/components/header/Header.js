import React from "react";
import classes from "./Header.module.css";

const Header = () => {
  return (
    <div className={classes.Header}>
      <div className="container">
        <h1>Coffee time.</h1>
        <p className={classes.paragraph}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores eveniet dolorum dolor magnam aut autem, sint optio sed, quidem quasi totam necessitatibus repellendus hic perferendis ad explicabo dignissimos minima delectus quaerat eaque quo culpa. Consequuntur quam corrupti sapiente, voluptatum architecto dicta necessitatibus suscipit? Itaque praesentium dolorem eum placeat, rerum beatae.
        </p>
      </div>
    </div>
  );
};

export default Header;
