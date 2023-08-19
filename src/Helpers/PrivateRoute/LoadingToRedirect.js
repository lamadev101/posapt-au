/** @format */

import { Result } from "antd";
import React, { useEffect, useState } from "react";
import history from "../history";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { navigateHelper } from "../NavigateHelper";

function LoadingToRedirect() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const paramValue = useParams();
  const [count, setCount] = useState(3);

  useEffect(() => {
    setTimeout(() => {
      navigate(`${navigateHelper(paramValue.type, paramValue.storeName)}`);
      dispatch({
        type: "UNAUTHENTICATED",
      });
    }, [1000]);
  }, []);
  return <div />;
}

export default LoadingToRedirect;
