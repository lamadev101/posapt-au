/** @format */

import React, { useEffect, useState } from "react";
import {
  Form,
  Select,
  Radio,
  Checkbox,
  Button,
  Spin,
  Input as AntInput,
} from "antd";
import Input from "./Input";
import PrimaryButton from "./PrimaryButton";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../Redux/reducers";
import Spinner from "./Spinner.gif";
import { openResultModal } from "./Result";

type LayoutType = Parameters<typeof Form>[0]["layout"];

const { TextArea } = AntInput;

const EnquiryForm = () => {
  const [EnquiryForm] = Form.useForm();
  const [formLayout, setFormLayout] = useState<LayoutType>("vertical");
  const dispatch = useDispatch();
  const { isLoading, isOperationSuccessful, successMessage } = useSelector(
    (state: RootState) => state.AppReducer
  );

  interface enquiryAction {
    type: "SEND_ENQUIRY_REQUEST";
    payload: {
      NameOfYourBusiness: string;
      Email: string;
      PhoneNumber: string;
      Message: string;
    };
  }

  const onFinish = (values: any) => {
    dispatch<enquiryAction>({
      type: "SEND_ENQUIRY_REQUEST",
      payload: {
        NameOfYourBusiness: values.name,
        Email: values.email,
        PhoneNumber: values.phone,
        Message: values.message,
      },
    });
  };

  useEffect(() => {
    if (isOperationSuccessful) {
      dispatch({
        type: "CLOSE_ENQUIRY_MODAL",
      });
      EnquiryForm.resetFields();
      dispatch<openResultModal>({
        type: "OPEN_RESULT_MODAL",
        payload: {
          isResultModalOpen: true,
          resultMessage: successMessage,
        },
      });
      dispatch({
        type: "MAKE_OPERATION_FALSE",
      });
    }
  }, [isOperationSuccessful]);
  return (
    <Form onFinish={onFinish} layout={formLayout} form={EnquiryForm}>
      <Form.Item
        label="Name Of Business"
        name="name"
        rules={[{ required: true, message: "Please input your Name" }]}
      >
        <Input placeholder="Please enter your Business Name" />
      </Form.Item>
      <Form.Item
        label="Email"
        name="email"
        rules={[{ required: true, message: "Please input your Email" }]}
      >
        <Input placeholder="Please enter your Email" />
      </Form.Item>
      <Form.Item
        label="Phone"
        name="phone"
        rules={[{ required: true, message: "Please input your Phone" }]}
      >
        <Input placeholder="Please enter your Phone" />
      </Form.Item>
      <Form.Item
        label="Message"
        name="message"
        rules={[{ required: true, message: "Please input your Message" }]}
      >
        <TextArea
          tabIndex={-1}
          rows={4}
          placeholder="Please enter your Message"
        />
      </Form.Item>
      <Form.Item>
        <PrimaryButton
          loading={isLoading}
          htmlType="submit"
          text="Submit"
        ></PrimaryButton>
        <Button
          danger
          htmlType="button"
          type="primary"
          className="danger-button ms-1"
          onClick={() => {
            dispatch({
              type: "CLOSE_ENQUIRY_MODAL",
            });
          }}
        >
          Cancel
        </Button>
      </Form.Item>
    </Form>
  );
};

export default EnquiryForm;
