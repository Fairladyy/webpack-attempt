import React, { useState } from "react";
import classes from "./App.module.scss";
import { Outlet, Link } from "react-router-dom";
import About from "@/pages/about/About";
import AvatarPng from "@/assets/demno.png";
import AvatarJpg from "@/assets/710lYHgkwXL.jpg";

function TODO() {
  TODO2();
}

function TODO2() {
  throw new Error();
}

export const App = () => {
  const [count, setCount] = useState<number>(0);

  const increment = () => TODO();
  //  const decrement = () => setCount((prev) => prev - 1);

  // if (__PLATFORM__ === "desktop") {
  //   return <div>ISDESKTOPPLATFORM</div>;
  // }

  // if (__PLATFORM__ === "mobile") {
  //   return <div>ISMOBILEPLATFORM</div>;
  // }

  return (
    <div data-testid={"App.DataTestId"}>
      <h1 data-testid={"Platform"}>PLATFORM={__PLATFORM__}</h1>
      <div>
        <img
          width={100}
          height={100}
          src={AvatarPng}
          alt="Здесь могло быть фото"
        />
        <img
          width={100}
          height={100}
          src={AvatarJpg}
          alt="Здесь могло быть фото"
        />
      </div>
      <Link to={"/about"}>about</Link>
      <br />
      <Link to={"/shop"}>shop</Link>
      <h1 className={classes.value}>{count}</h1>
      <button className={classes.button} onClick={increment}>
        incre,ddet
      </button>

      <About />
    </div>
  );
};
