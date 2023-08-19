/** @format */

import "antd/dist/reset.css";
import type { AppProps } from "next/app";
import "react-loading-skeleton/dist/skeleton.css";
import { Provider } from "react-redux";
import Store from "../Redux/store";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={Store()}>
      {" "}
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
