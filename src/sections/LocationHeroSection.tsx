import PrimaryButton from "@/Components/PrimaryButton";
import { openResultModal } from "@/Components/Result";
import { RootState } from "@/Redux/reducers";
import { Form, Input } from "antd";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
type LayoutType = Parameters<typeof Form>[0]["layout"];


interface LocationHeroSectionPorps {
  title: string;
  desc: string;
}

interface enquiryAction {
  type: "SEND_ENQUIRY_REQUEST";
  payload: {
    NameOfYourBusiness: string;
    Email: string;
    PhoneNumber: string;
    Message: string;
  };
}

const LocationHeroSection: React.FC<LocationHeroSectionPorps> = ({ title, desc }) => {
  const dispatch = useDispatch();
  const [EnquiryForm] = Form.useForm();
  const [formLayout, setFormLayout] = useState<LayoutType>("horizontal");
  const { isLoading, isOperationSuccessful, successMessage } = useSelector(
    (state: RootState) => state.AppReducer
  );


  const onFinish = (values: any) => {
    dispatch<enquiryAction>({
      type: "SEND_ENQUIRY_REQUEST",
      payload: {
        NameOfYourBusiness: values.name,
        Email: values.email,
        PhoneNumber: "test",
        Message: "test",
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
      <section
        className="homebanner align-items-center d-flex p-100 bg-holder h-900 h-sm-900 bg-overlay-black-80"
        style={{ backgroundImage: "url(assets/dist/image/ban2.png)" }}
      >
        <div className="container">
          <div className="row d-flex align-items-center position-relative justify-content-center g-2">
            <div className="col-md-12 text-center mb-md-5 mb-2">
              <h1 className="text-white fw-bold">
                {title}
              </h1>
              <p className="text-white fw-normal text-center mt-3 mt-md-4">
                {desc}
              </p>
            </div>
          </div>
            <div className="row d-flex align-item-center justify-content-center">
            <div className="col-md-3 ">
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
                  className="form-control border p-3"
                  placeholder="Business Name"
                />
              </Form.Item>
            </div>

            <div className="col-md-3 me-2">
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
                  className="form-control border p-3"
                  placeholder="Email Address"
                />
              </Form.Item>
            </div>
            
            <PrimaryButton
              width="24%"
              height="60px"
              loading={isLoading}
              htmlType="submit"
              text="Talk to Us"
            />
            </div>
        </div>
      </section>
    </Form>
  )
}

export default LocationHeroSection