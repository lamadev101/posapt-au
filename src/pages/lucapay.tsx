/** @format */

import { Button, Form } from "antd";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { openErrorResultModal } from "../Components/ErrorResult";
import Input from "../Components/Input";
import Layout from "../Components/Layout";
import PrimaryButton from "../Components/PrimaryButton";
import { openResultModal } from "../Components/Result";
import ScrollToTop from "../Helpers/ScrollToTop";
import { RootState } from "../Redux/reducers";
import { LucapayInterface } from "../utils/Interfaces";
import Head from 'next/head';

type LayoutType = Parameters<typeof Form>[0]["layout"];

const Lucapay = () => {
  const [LucaPayForm] = Form.useForm();
  const [formLayout, setFormLayout] = useState<LayoutType>("vertical");
  const {
    isLoading,
    isOperationSuccessful,
    successMessage,
    isErrorOccured,
    errorMessage,
  } = useSelector((state: RootState) => state.AppReducer);

  const dispatch = useDispatch();

  interface lucapayAction {
    type: "LUCAPAY_INTEGERATE_REQUEST";
    payload: LucapayInterface;
  }

  const onFinish = (values: LucapayInterface) => {
    dispatch<lucapayAction>({
      type: "LUCAPAY_INTEGERATE_REQUEST",
      payload: { ...values, ChannelPlatForm: "POSWebsite" },
    });
  };
  useEffect(() => {
    if (isOperationSuccessful) {
      LucaPayForm.resetFields();
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
  useEffect(() => {
    if (isErrorOccured) {
      dispatch<openErrorResultModal>({
        type: "OPEN_ERROR_RESULT_MODAL",
        payload: {
          isErrorResultModalOpen: true,
          errorResultMessage: errorMessage,
        },
      });
      dispatch({
        type: "MAKE_OPERATION_FALSE",
      });
    }
  }, [isErrorOccured]);

  return (
    <>
      <Head>
        <title>Integrated Lucapay | POSApt</title>
        <meta
          name="title"
          content="Integrated Lucapay | POSApt"
        />
        <meta
          name="description"
          content="Easy Payment. We partner with LUCA Plus to give you flexible choices for directing your cash flow."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="robots"
          content="follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large"
        />
        <link rel="canonical" href="https://posapt.au/lucapay" />
      </Head>
      <Layout>
        <>
          <ScrollToTop />
          <div
            className="breadcrumbs-custom box-transform-wrap context-dark bg-image gradient-overlay"
            style={{ backgroundImage: "url(images/bg-typography.jpg)" }}
          >
            <div className="container">
              <h1 className="breadcrumbs-custom-title text-white">Lucapay</h1>
              <div className="breadcrumbs-custom-decor" />
            </div>
          </div>
          {/* start pos */}
          <section className="position-relative pt-50 pb-50 lucapay">
            <div className="container">
              <div className="row align-items-center justify-content-center">
                <div className="col-md-9">
                  <div className="card">
                    <div className="card-body">
                      <div className="lucapayinner p-3">
                        <div className="row">
                          <div className="col-md-6">
                            <div className="lucapay-left p-5">
                              <div className="lucapaylogo">
                                <img
                                  src="assets/dist/image/lucapay.png"
                                  className="img-fluid"
                                  alt="Integrated Lucapay"
                                  title="Integrated Lucapay"
                                />
                                <p>
                                  We partner with LUCA Plus to give you flexible
                                  choices for directing your cashflow.
                                </p>
                              </div>
                              <div className="lucapayicons text-center ">
                                <div className="row">
                                  <div className="col-md-6 mt-4">
                                    <div className="innertext">
                                      <img
                                        src="assets/dist/image/Get_Paid_Faster_1.webp"
                                        className="img-fluid"
                                        width="80px"
                                        height="80px"
                                        alt="Integrated Lucapay"
                                        title="Integrated Lucapay"
                                      />
                                      <p className="d-block">
                                        Fast track your business growth
                                      </p>
                                    </div>
                                  </div>
                                  <div className="col-md-6 mt-4">
                                    <div className="innertext">
                                      <img
                                        src="assets/dist/image/Save_time_and_cash_1.webp"
                                        className="img-fluid"
                                        width="80px"
                                        height="80px"
                                        alt="Integrated Lucapay"
                                        title="Integrated Lucapay"
                                      />
                                      <p className="d-block">
                                        Save time on reconciliation
                                      </p>
                                    </div>
                                  </div>
                                  <div className="col-md-6 mt-4">
                                    <div className="innertext">
                                      <img
                                        src="assets/dist/image/Better_Cash_Flow_1.webp"
                                        className="img-fluid"
                                        width="80px"
                                        height="80px"
                                        alt="Integrated Lucapay"
                                        title="Integrated Lucapay"
                                      />
                                      <p className="d-block">
                                        Take the pressure off your cashflow
                                      </p>
                                    </div>
                                  </div>
                                  <div className="col-md-6 mt-4">
                                    <div className="innertext">
                                      <img
                                        src="assets/dist/image/Build_Connections_1.webp"
                                        className="img-fluid"
                                        width="80px"
                                        height="80px"
                                        alt="Integrated Lucapay"
                                        title="Integrated Lucapay"
                                      />
                                      <p className="d-block">
                                        Better for both suppliers &amp; buyers
                                      </p>
                                    </div>
                                  </div>
                                  <p className="lh mt-5">
                                    <small>
                                      LUCA Pay allows you to pay for purchases
                                      (including bills) over 4 instalments, due
                                      every 28 days over 3 months. LUCA Pay is a
                                      product for business purchases only. You
                                      must have a valid ABN in Australia and be
                                      registered for GST. Read the full terms of
                                      service on the Luca Plus website.
                                    </small>
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-6 bg-theme-lucapay d-flex align-items-center flex-column justify-content-center">
                            <div className="lucapay-right p-5">
                              <h5 className="text-white">Get Started</h5>
                              <p className="text-white">
                                Fill in your details to fast track your account,
                                and a LUCA Plus team member will give you a call.{" "}
                              </p>
                              <Form
                                onFinish={onFinish}
                                layout={formLayout}
                                form={LucaPayForm}
                              >
                                <Form.Item
                                  name="ContactName"
                                  rules={[
                                    {
                                      required: true,
                                      message: "Please input contact person",
                                    },
                                  ]}
                                >
                                  <Input placeholder="Contact Person" />
                                </Form.Item>
                                <Form.Item
                                  name="ContactNumber"
                                  rules={[
                                    {
                                      required: true,
                                      message: "Please input contact number",
                                    },
                                  ]}
                                >
                                  <Input placeholder="Contact Number" />
                                </Form.Item>
                                <Form.Item
                                  name="BusinessEmailAdress"
                                  rules={[
                                    {
                                      required: true,
                                      message:
                                        "Please input business email address",
                                    },
                                  ]}
                                >
                                  <Input placeholder="Business Email Address" />
                                </Form.Item>
                                <Form.Item
                                  name="ABNNumber"
                                  rules={[
                                    {
                                      required: true,
                                      message: "Please input ABN",
                                    },
                                  ]}
                                >
                                  <Input placeholder="ABN" />
                                </Form.Item>
                                <Form.Item
                                  name="AccountingSoftWare"
                                  rules={[
                                    {
                                      required: true,
                                      message: "Please input Accounting software",
                                    },
                                  ]}
                                >
                                  <Input placeholder="Accounting Software" />
                                </Form.Item>
                                <Form.Item>
                                  <PrimaryButton
                                    loading={isLoading}
                                    width={"40%"}
                                    htmlType="submit"
                                    text="Submit"
                                  ></PrimaryButton>
                                  <Button
                                    danger
                                    htmlType="button"
                                    type="primary"
                                    className="danger-button"
                                    onClick={() => {
                                      LucaPayForm.resetFields();
                                    }}
                                  >
                                    Clear
                                  </Button>
                                </Form.Item>
                              </Form>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </>
      </Layout>
    </>
  );
};

export default Lucapay;
