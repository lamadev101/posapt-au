/** @format */

import { Form } from "antd";
import { FC } from "react";
import Skeleton from "react-loading-skeleton";

interface FormItemSkeletonProps {
  width?: number;
  height?: number;
}

const FormItemSkeleton: FC<FormItemSkeletonProps> = ({
  width = 100,
  height = 32,
}) => {
  return (
    <Form.Item label={<Skeleton width={width} />} name="storeName">
      <Skeleton height={height} />
    </Form.Item>
  );
};

export default FormItemSkeleton;
