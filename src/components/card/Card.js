import React from "react";
import classes from "./Card.module.css";
const Card = () => {
  return (
    <div className={classes.Card}>
      <img
        src="https://globalassets.starbucks.com/assets/1fd99578d31f4072a52892398d8f1fa8.jpg?impolicy=1by1_tight_288"
        alt=""
      />
      <div className={classes.total}>
        <h1>Coffee Name</h1>
        <p>10 $</p>
      </div>
    </div>
  );
};

export default Card;
