/** @format */

import React from "react";
import { Route } from "react-router-dom";
import { getLocalStorage, isAuth } from "../FrontendHelper";
import LoadingToRedirect from "./LoadingToRedirect";

function PrivateRoute({ children, storeId, ...rest }) {
  return isAuth(getLocalStorage("activeStoreId")) ? (
    children
  ) : (
    <LoadingToRedirect />
  );
}

export default PrivateRoute;
