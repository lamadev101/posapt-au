/** @format */

import axios from "axios";
import { getCookie } from "./FrontendHelper";

const Token = getCookie("token");

export const API = axios.create({
  baseURL:
    process.env.NODE_ENV == "production"
      ? `https://api.posapt.au`
      : `https://api.posapt.au`,
});
export const API1 = axios.create({
  baseURL:
    process.env.NODE_ENV == "production"
      ? `https://api.posapt.au/api`
      : `https://api.posapt.au/api`,
});
