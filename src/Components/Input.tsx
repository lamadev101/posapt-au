/** @format */

import React from "react";
import { Input as AntdInput } from "antd";

interface Props {
  // additional props if needed
  prefix?: any;
  placeholder?: string;
  type?: string;
}

const Input: React.FC<Props> = ({ prefix, placeholder, type, ...props }) => {
  return (
    <AntdInput
      placeholder={placeholder ? placeholder : ""}
      type={type ? type : ""}
      prefix={prefix ? <span>{prefix}</span> : null}
      {...props}
    />
  );
};

export default Input;
