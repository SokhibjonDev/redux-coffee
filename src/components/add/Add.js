import React from "react";
import classes from "./Add.module.css";
const Add = () => {
  return (
    <div className={classes.Add}>
      <div className={classes.img}>
        <img
          src="https://images.prismic.io/coffeefellows-website/ef79ea0b-0e21-47c6-8933-92ce0c8df79c_coffee-fellows-einfach-guter-kaffee.jpeg?ixlib=gatsbyFP&auto=compress%2Cformat&fit=max&q=50"
          alt=""
        />
      </div>
      <div className={classes.info  }>
        <h1>Hello world</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi dolorem nesciunt aperiam quas accusantium, illum praesentium officia id voluptatibus! Eveniet veritatis enim sequi, accusamus animi sit, omnis quae vel est, fuga possimus modi rem? Dolores voluptatem veritatis molestias vero. Excepturi!</p><br />
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi dolorem nesciunt aperiam quas accusantium, illum praesentium officia id voluptatibus! Eveniet veritatis enim sequi, accusamus animi sit, omnis quae vel est, fuga possimus modi rem? Dolores voluptatem veritatis molestias vero. Excepturi!</p>
      </div>
    </div>
  );
};

export default Add;
