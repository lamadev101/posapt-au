/** @format */

import { Button } from "antd";
import React from "react";
import BeatLoader from "react-spinners/BeatLoader";

interface Props {
  onClick?: () => void;
  text: string;
  loading?: boolean;
  width?: string;
  height?: string;
  htmlType?: "button" | "submit" | "reset" | undefined;
}

const PrimaryButton: React.FC<Props> = ({
  onClick,
  loading,
  htmlType,
  text,
  width = "27%",
  height,
  ...props
}) => {
  return (
    <Button
      //   loading={loading}
      className={"primary-button align-items-center"}
      htmlType={htmlType}
      type="primary"
      disabled={loading}
      onClick={!loading ? onClick : () => {}}
      {...props}
      style={
        loading
          ? { width: width, color: "white", height: height ? height : "40px" }
          : { width: width, height: height ? height : "40px" }
      }
    >
      {loading ? <BeatLoader size={8} className="me-2" color="#fff" /> : null}

      {text}
    </Button>
  );
};

export default PrimaryButton;
