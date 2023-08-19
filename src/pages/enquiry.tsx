/** @format */

import { Form, Input } from "antd";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ErrorResult from "../Components/ErrorResult";
import PrimaryButton from "../Components/PrimaryButton";
import Result, { openResultModal } from "../Components/Result";
import { RootState } from "../Redux/reducers";
import Head from "next/head";
import Layout from "@/Components/Layout";
import { validateNumber } from "@/Helpers/validator";

const { TextArea } = Input;
type LayoutType = Parameters<typeof Form>[0]["layout"];

const EnquireNow = () => {
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
      setTimeout(() => {
        // window.location.replace("/");
      }, 1800);
    }
  }, [isOperationSuccessful]);

  return (
    <>
      <Head>
        <title>Enquire Now | POSApt</title>
        <meta name="title" content="Enquire Now | POSApt" />
        <meta
          name="description"
          content="Looking for a Sales Solution? Here comes POSApt, a tailormade POS system for your business. FREE 30-Day Trial. Register Now."
        />
        {/* <link rel="icon" href="/favicon.ico" /> */}
        <link rel="canonical" href="https://posapt.au/enquiry" />
      </Head>
      <Layout>
        {" "}
        <section>
          <Result />
          <ErrorResult />
          <div className="bg_enquiry pt-2 pb-50">
            <div className="container text-center">
              <h1 className="fw-bold text-theme " style={{marginTop: "40px"}}>
                Effortless POS and Online Ordering with Zero Risk
              </h1>
              <h2 className="d-block text-theme1">Try it Free for 30 Days!</h2>

              <div className="bbb-wrapper fl-wrap text-start">
                <div className="subcribe-form fl-wrap">
                  <Form
                    onFinish={onFinish}
                    layout={formLayout}
                    form={EnquiryForm}
                  >
                    <div className="row bg-light  shadow-sm g-0  ">
                      <div className="col-md-5 d-none d-md-block">
                        <div className="eng_img">
                          <img
                            src="/assets/dist/image/enquiry_form_img.png"
                            alt="Join Posapt"
                            title="Join Posapt"
                          />
                        </div>
                      </div>
                      <div className="col-md-7">
                        <div className="row g-2 p-4">
                          <div className="col-md-12">
                            <p className=" mt-0 f-17 text-center text-md-start enqury-page-text">
                              We will reach out within <strong>24 hours</strong>{" "}
                              to book time to chat.
                            </p>
                            <Form.Item
                              name="name"
                              rules={[
                                {
                                  required: true,
                                  message: "Please enter your Name",
                                },
                              ]}
                            >
                              <Input
                                className="form-control border"
                                placeholder="Please enter your Name"
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
                                  message: "Please enter your valid email address",
                                }
                              ]}
                            >
                              <Input
                                className="form-control border"
                                placeholder="Please enter your Email"
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
                                placeholder="Please enter your Phone"
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
                                rows={6}
                                cols={6}
                                placeholder="Please enter your Message"
                              />
                            </Form.Item>
                          </div>
                          <div className="col-md-12">
                            <PrimaryButton
                              width="35%"
                              loading={isLoading}
                              htmlType="submit"
                              text="Enquiry Now"
                            ></PrimaryButton>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Form>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="pb-50 pt-50">
          <div className="keyfeatures text-center">
            <div className="container">
              <div className="row">
                <div className="heading_s1 w-80">
                  <span className="sub_heading font_style1">
                    Why Choose Us?
                  </span>
                  <h2 className=" fw-bold text-capitalize">
                    We're here to help you GROW!
                  </h2>
                </div>
              </div>
              <div className="row">
                <div className="col-md-4">
                  <div className="card border-0  rounded-xs">
                    <div className="card-body service_item">
                      <div className="ser_inner ">
                        <div className="ser_img">
                          <img
                            src="assets/dist/image/Homepage/Complete-POS-and-online-ordering-solution.webp"
                            className="img-fluid h-100"
                            alt="Complete POS and online ordering solution"
                            title="Complete POS and online ordering solution"
                            data-pagespeed-url-hash={1416024010}
                          />
                        </div>
                        <h3 className="mt-4 mb-3">
                          Complete POS &amp; Online Ordering Solution{" "}
                        </h3>
                      </div>
                      <p>
                        We'll take your business from 'no
                        online presence' to a thriving online business with our
                        cloud-based POS and integrated Online Ordering
                        System.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="card border-0  rounded-xs">
                    <div className="card-body service_item">
                      <div className="ser_inner ">
                        <div className="ser_img">
                          <img
                            src="assets/dist/image/Homepage/POS-System-free-trial.webp"
                            className="img-fluid h-100"
                            alt="POS System free trial"
                            title="POS System free trial"
                            data-pagespeed-url-hash={1416024010}
                          />
                        </div>
                        <h3 className="mt-4 mb-3">30-Day Free Trial </h3>
                      </div>
                      <p>
                        We know, you'll love our products for sure. So, we're
                        happy to give every one free access to our products for
                        the first 30 days. No commitments at all!
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="card border-0  rounded-xs">
                    <div className="card-body service_item">
                      <div className="ser_inner ">
                        <div className="ser_img">
                          <img
                            src="/assets/dist/image/Homepage/24-hours-online-support-for-POS-System-Software.webp"
                            className="img-fluid h-100"
                            alt="24 hours online support for POS System Software"
                            title="24 hours online support for POS System Software"
                            data-pagespeed-url-hash={1416024010}
                          />
                        </div>
                        <h3 className="mt-4 mb-3">24*7 Online Support </h3>
                      </div>
                      <p>
                        We're always available for our clients. Reach us any
                        time of the day and we'll get you connected with an
                        Expert. Get your issue resolved within no time.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default EnquireNow;
