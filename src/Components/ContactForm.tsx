/** @format */

import React, { useEffect, useState } from "react";
import {
  Form,
  Input,
} from "antd";
import PrimaryButton from "./PrimaryButton";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../Redux/reducers";
import { openResultModal } from "./Result";
import { validateNumber } from "../Helpers/validator";

type LayoutType = Parameters<typeof Form>[0]["layout"];

const { TextArea } = Input;

const ContactForm = () => {
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
    <Form
      onFinish={onFinish}
      layout={formLayout}
      form={EnquiryForm}
    >
      <div className="col-md-12">
        <div className="row g-2">
          <div className="col-md-12">
            <Form.Item
              name="name"
              rules={[
                {
                  required: true,
                  message: "Please input your Business Name",
                },
              ]}
            >
              <Input
                className="form-control border"
                placeholder="Business Name"
              />
            </Form.Item>
          </div>

          <div className="col-md-12">
            <Form.Item
              name="phone"
              rules={[
                {
                  required: true,
                  message: "Please input your Phone",
                },
                {
                  validator: validateNumber
                }
              ]}
            >
              <Input
                className="form-control border"
                placeholder="Phone"
              />
            </Form.Item>
          </div>
          <div className="col-md-12">
            <Form.Item
              name="email"
              rules={[
                {
                  required: true,
                  message: "Please input your Email",
                },
                {
                  type: "email",
                  message: "Please enter valid email address",
                }
              ]}
            >
              <Input
                className="form-control border"
                placeholder="Email"
              />
            </Form.Item>
          </div>
          <div className="col-md-12">
            <Form.Item
              name="message"
              rules={[
                {
                  required: true,
                  message: "Please input your Message",
                },
              ]}
            >
              <TextArea
                className="form-control border"
                tabIndex={-1}
                rows={3}
                cols={6}
                placeholder="Tell us more about your project, needs and budget"
              />
            </Form.Item>
          </div>
          <div className="col-md-12">
            <PrimaryButton
              width="40%"
              loading={isLoading}
              htmlType="submit"
              text="Enquiry Now"
            />
          </div>
        </div>
      </div>
    </Form>
  );
};

export default ContactForm;
