import React from "react";
import { Outlet } from "react-router-dom";

import classes from "./Root.module.css";
import { MainNavigation } from "../components/MainNavigation";

export const RootLayout = () => {
  return (
    <>
      <MainNavigation />
      <main className={classes.content}>
        <Outlet />
      </main>
    </>
  );
};
