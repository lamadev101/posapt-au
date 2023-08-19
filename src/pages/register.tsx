/** @format */

/** @format */

import { Button, Checkbox, Form, Select } from "antd";
import { useEffect, useLayoutEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Input from "../Components/Input";
import Layout from "../Components/Layout";
import RegisterFormLoading from "../Components/Loadings/RegisterFormLoading";
import { hideTrialModal } from "../Components/Navbar";
import PrimaryButton from "../Components/PrimaryButton";
import { openResultModal } from "../Components/Result";
import ScrollToTop from "../Helpers/ScrollToTop";
import { RootState } from "../Redux/reducers";
import { Country } from "../utils/Interfaces";

type LayoutType = Parameters<typeof Form>[0]["layout"];

const register = () => {
  const dispatch = useDispatch();
  //   const navigate = useNavigate();
  const [formLayout, setFormLayout] = useState<LayoutType>("vertical");
  const [selectedCountry, setSelectedCountry] = useState<Country>();
  const [RegisterForm] = Form.useForm();
  const {
    isLoading,
    isOperationSuccessful,
    getOnBoardSectionListLoading,
    successMessage,
    countryCitiesList,
    onBoardSectionList,
  } = useSelector((state: RootState) => state.AppReducer);

  interface RegisterData {
    BusinessName: string;
    StoreEmail: string;
    StorePhoneNumber: string;
    Address: string;
    BusinessTypeId: string;
    TimeZoneId: string;
    CountryId: string;
    CityId: string;
    ABNNumber: string;
    FullName: string;
    Email: string;
    PhoneNumber: string;
    Password: string;
    ConfirmPassword: string;
    ChannelType?: string;
    IsTermsAndConditionsAccepted: boolean;
    IsPrivacyPolicyAccepted: boolean;
  }

  interface registerAction {
    type: "REGISTER_REQUEST";
    payload: RegisterData;
  }

  useEffect(() => {
    dispatch<hideTrialModal>({
      type: "CLOSE_TRIAL_MODAL",
    });
    dispatch({
      type: "GET_ONBOARD_SECTION_LIST_REQUEST",
    });
  }, []);

  const onFinish = (values: RegisterData) => {
    dispatch<registerAction>({
      type: "REGISTER_REQUEST",
      payload: values,
    });
  };
  useEffect(() => {
    if (isOperationSuccessful) {
      dispatch({
        type: "CLOSE_ENQUIRY_MODAL",
      });
      RegisterForm.resetFields();
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
    RegisterForm.setFieldValue("StateId", null);
    RegisterForm.setFieldValue("CityId", null);
  }, [selectedCountry]);
  useLayoutEffect(() => {
    if (countryCitiesList) {
      const selectedCountry = countryCitiesList?.find(
        (country) => country.isSelected
      );
      setSelectedCountry(selectedCountry);
      RegisterForm.setFieldValue("CountryId", selectedCountry?.id);
      RegisterForm.setFieldValue(
        "CountryPhoneNumberPrefixId",
        selectedCountry?.id
      );
      RegisterForm.setFieldValue("prefix", selectedCountry?.id);
    }
  }, [countryCitiesList]);
  const abnPattern = /^\d{11}$/;

  // function validateABN(abn: string) {
  //   if (!abnPattern.test(abn)) {
  //     return Promise.reject("ABN must be 11 digits");
  //   }

  //   let sum = 0;

  //   for (let i = 0; i < 11; i++) {
  //     let weight = i % 2 === 0 ? 1 : 4;
  //     sum += parseInt(abn.charAt(i), 10) * weight;
  //   }

  //   if (sum % 10 !== 0) {
  //     return Promise.reject("Invalid ABN");
  //   }

  //   return Promise.resolve();
  // }

  // console.log("countryCitiesList", countryCitiesList);
  return (
    <Layout>
      <section>
        <ScrollToTop />
        <div className="container pt-3 pb-3">
          <div className="outer-card">
            <div className="card border-0">
              <div className="form">
                <div className="row g-0">
                  <div className="col-md-12 col-lg-4">
                    <div className="left-side">
                      <div className="heading">
                        <p>REGISTER NOW</p>

                        <h5>
                          POSApt is an advanced cloud based POS and online
                          ordering system software that delights your customer
                          at the checkout counter and beyond.
                        </h5>
                      </div>
                      <div className="welcome align-items-center justify-content-center m-auto mt-5 border-0">
                        <h1>
                          Welcome to <a href="">POSAPT</a>
                        </h1>
                        <p></p>
                        <ul className="poslist">
                          <li>Centralized Ordering</li>
                          <li>Affordable</li>
                          <li>Online Ordering System</li>
                          <li>QR Code Ordering </li>
                          <li>Order Management</li>
                          <li>Time and attendance Scheduling</li>
                          <li>Live Reporting </li>
                          <li>24/7 Customer Support</li>
                        </ul>
                        <p />
                      </div>
                    </div>
                  </div>

                  <div className="col-md-12 col-lg-8">
                    <div className="right-side">
                      {getOnBoardSectionListLoading ? (
                        <RegisterFormLoading />
                      ) : (
                        <Form
                          form={RegisterForm}
                          onFinish={onFinish}
                          layout={formLayout}
                        >
                          <div className="row">
                            <div className="col-md-12">
                              <div className="ab">
                                <div className="card d-flex justify-content-center mx-auto  p-5 pb-4 contactus rounded-0 border-0">
                                  <h5>Business Information</h5>
                                  <hr />

                                  <div className="row">
                                    <div className="form-group col-md-4">
                                      <Form.Item
                                        label="Business Name"
                                        name="BusinessName"
                                        rules={[
                                          {
                                            required: true,
                                            message:
                                              "Please input Business Name",
                                          },
                                        ]}
                                      >
                                        <Input placeholder="Business Name" />
                                      </Form.Item>
                                    </div>
                                    <div className="form-group col-md-4">
                                      <Form.Item
                                        label="Business Phone Number"
                                        name="StorePhoneNumber"
                                        rules={[
                                          {
                                            required: true,
                                            message:
                                              "Please input Business Phone Number",
                                          },
                                        ]}
                                      >
                                        <Input placeholder="Business Phone" />
                                      </Form.Item>
                                    </div>
                                    <div className="form-group col-md-4">
                                      <Form.Item
                                        label="Business Email"
                                        name="StoreEmail"
                                        rules={[
                                          {
                                            required: true,
                                            message:
                                              "Please input Business Email",
                                          },
                                        ]}
                                      >
                                        <Input placeholder="Business Email" />
                                      </Form.Item>
                                    </div>
                                    <div className="form-group col-md-12">
                                      <div className="row">
                                        <div className="form-group col-md-4">
                                          <Form.Item
                                            label="Address Line"
                                            name="Address"
                                            rules={[
                                              {
                                                required: true,
                                                message:
                                                  "Please input Address Line",
                                              },
                                            ]}
                                          >
                                            <Input placeholder="Address Line" />
                                          </Form.Item>
                                        </div>

                                        <div className="col-md-4">
                                          <Form.Item
                                            label="Country"
                                            name="CountryId"
                                            rules={[
                                              {
                                                required: true,
                                                message: "Please input Country",
                                              },
                                            ]}
                                          >
                                            <Select
                                              placeholder="Select Country"
                                              onChange={(e) =>
                                                setSelectedCountry(
                                                  countryCitiesList?.find(
                                                    (country) => country.id == e
                                                  )
                                                )
                                              }
                                            >
                                              {countryCitiesList?.map(
                                                (country) => {
                                                  return (
                                                    <Select.Option
                                                      key={country.id}
                                                      value={country.id}
                                                    >
                                                      <img
                                                        src={country.image}
                                                        style={{
                                                          height: "20px",
                                                          width: "20px",
                                                          marginRight: "7px",
                                                        }}
                                                      />
                                                      {country.name}
                                                    </Select.Option>
                                                  );
                                                }
                                              )}
                                            </Select>
                                          </Form.Item>
                                        </div>
                                        <div className="col-md-4">
                                          <Form.Item
                                            label="City"
                                            name="CityId"
                                            rules={[
                                              {
                                                required: true,
                                                message: "Please input City",
                                              },
                                            ]}
                                          >
                                            <Select
                                              placeholder="Select City"
                                              options={selectedCountry?.cities.map(
                                                (state) => {
                                                  return {
                                                    label: state.value,
                                                    value: state.id,
                                                  };
                                                }
                                              )}
                                            />
                                          </Form.Item>
                                        </div>
                                        <div className="form-group col-md-4">
                                          <Form.Item
                                            label="ABN Number"
                                            name="ABNNumber"
                                            rules={[
                                              {
                                                required: true,
                                                message:
                                                  "Please input ABN Number",
                                              },
                                              // {
                                              //   validator: (_, value) =>
                                              //     validateABN(value),
                                              // },
                                            ]}
                                          >
                                            <Input placeholder="ABN Number" />
                                          </Form.Item>
                                        </div>
                                        <div className="form-group col-md-4">
                                          <Form.Item
                                            label="Business Type"
                                            name="BusinessTypeId"
                                            rules={[
                                              {
                                                required: true,
                                                message:
                                                  "Please input Business Type",
                                              },
                                            ]}
                                          >
                                            <Select placeholder="Select Business Type">
                                              {onBoardSectionList?.businessTypes?.map(
                                                (item) => {
                                                  return (
                                                    <Select.Option
                                                      value={item.id}
                                                      key={item.id}
                                                    >
                                                      {item.name}
                                                    </Select.Option>
                                                  );
                                                }
                                              )}
                                            </Select>
                                          </Form.Item>
                                        </div>
                                        <div className="form-group col-md-4">
                                          <Form.Item
                                            label="Time Zone"
                                            name="TimeZoneId"
                                            rules={[
                                              {
                                                required: true,
                                                message:
                                                  "Please input Time Zone",
                                              },
                                            ]}
                                          >
                                            <Select
                                              placeholder="Select Time Zone"
                                              showSearch
                                              optionFilterProp="children"
                                            >
                                              {onBoardSectionList?.timeZones?.map(
                                                (item) => {
                                                  return (
                                                    <Select.Option
                                                      value={item.id}
                                                      key={item.id}
                                                    >
                                                      {item.value}
                                                    </Select.Option>
                                                  );
                                                }
                                              )}
                                            </Select>
                                          </Form.Item>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            {/* personal info */}
                            <div className="col-md-12 ">
                              <div className="ab">
                                <div className="card d-flex justify-content-center mx-auto  p-5 pt-4 contactus rounded-0 border-0">
                                  <h5>Personal Information</h5>
                                  <hr />
                                  <div className="row">
                                    <div className="form-group col-md-4">
                                      <Form.Item
                                        label="Full Name"
                                        name="FullName"
                                        rules={[
                                          {
                                            required: true,
                                            message: "Please input Full Name",
                                          },
                                        ]}
                                      >
                                        <Input placeholder="Full Name" />
                                      </Form.Item>
                                    </div>
                                    <div className="form-group col-md-4">
                                      <Form.Item
                                        label="Email"
                                        name="Email"
                                        rules={[
                                          {
                                            required: true,
                                            message: "Please input Email",
                                          },
                                        ]}
                                      >
                                        <Input placeholder="Email" />
                                      </Form.Item>
                                    </div>
                                    <div className="form-group col-md-4">
                                      <Form.Item
                                        label="Phone"
                                        name="PhoneNumber"
                                        rules={[
                                          {
                                            required: true,
                                            message:
                                              "Please input Phone Number",
                                          },
                                        ]}
                                      >
                                        <Input placeholder="Phone Number" />
                                      </Form.Item>
                                    </div>
                                    <div className="form-group col-md-4">
                                      <Form.Item
                                        label="Password"
                                        name="Password"
                                        rules={[
                                          {
                                            required: true,
                                            message: "Please input Password",
                                          },
                                        ]}
                                      >
                                        <Input placeholder="Password" />
                                      </Form.Item>
                                    </div>
                                    <div className="form-group col-md-4">
                                      <Form.Item
                                        label="Confirm Password"
                                        name="ConfirmPassword"
                                        rules={[
                                          {
                                            required: true,
                                            message:
                                              "Please input Confirm Password",
                                          },
                                        ]}
                                      >
                                        <Input placeholder="Confirm Password" />
                                      </Form.Item>
                                    </div>
                                    <div className="form-group col-md-6">
                                      <Form.Item
                                        name="IsTermsAndConditionsAccepted"
                                        valuePropName="checked"
                                        rules={[
                                          {
                                            validator: (_, value) =>
                                              value
                                                ? Promise.resolve()
                                                : Promise.reject(
                                                  new Error(
                                                    "Should accept this"
                                                  )
                                                ),
                                          },
                                        ]}
                                      >
                                        <Checkbox>
                                          I have read{" "}
                                          <a
                                            href={"/terms-of-service"}
                                            target="_blank"
                                          >
                                            {" "}
                                            <span
                                              className="terms-privacy"
                                              style={{ color: "red" }}
                                            >
                                              {" "}
                                              Terms And Condition
                                            </span>
                                          </a>
                                        </Checkbox>
                                      </Form.Item>
                                    </div>
                                    <div className="form-group col-md-6">
                                      <Form.Item
                                        name="IsPrivacyPolicyAccepted"
                                        valuePropName="checked"
                                        rules={[
                                          {
                                            validator: (_, value) =>
                                              value
                                                ? Promise.resolve()
                                                : Promise.reject(
                                                  new Error(
                                                    "Should accept this"
                                                  )
                                                ),
                                          },
                                        ]}
                                      >
                                        <Checkbox>
                                          I have read{" "}
                                          <a
                                            href={"/privacy-policy"}
                                            target="_blank"
                                          >
                                            {" "}
                                            <span
                                              className="terms-privacy"
                                              style={{ color: "red" }}
                                            >
                                              Privacy Policy
                                            </span>
                                          </a>
                                        </Checkbox>
                                      </Form.Item>
                                    </div>

                                    <div className="form-button pt-4">
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
                                            // navigate("/");
                                          }}
                                        >
                                          Cancel
                                        </Button>
                                      </Form.Item>
                                    </div>
                                    {/* <div class="row mt-3"> <small class="fw-bold">Already have an account? <a
                                                                  class="text-danger " href="login.html">Login</a></small> </div> */}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </Form>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default register;