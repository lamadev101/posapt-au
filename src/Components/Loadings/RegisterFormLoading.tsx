/** @format */

import { Form } from "antd";
import FormItemSkeleton from "./FormItemSkeleton";

const RegisterFormLoading = () => {
  return (
    <Form layout="vertical">
      <div className="row">
        <div className="col-md-12">
          <div className="ab">
            <div className="card d-flex justify-content-center mx-auto  p-5 contactus rounded-0">
              <h5>Business Information</h5>
              <hr />

              <div className="row">
                <div className="form-group col-md-4">
                  <FormItemSkeleton height={40} />
                </div>
                <div className="form-group col-md-4">
                  <FormItemSkeleton height={40} />
                </div>
                <div className="form-group col-md-4">
                  <FormItemSkeleton height={40} />
                </div>
                <div className="form-group col-md-12">
                  <div className="row">
                    <div className="form-group col-md-4">
                      <FormItemSkeleton height={40} />
                    </div>

                    <div className="col-md-4">
                      <FormItemSkeleton height={40} />
                    </div>

                    <div className="col-md-4">
                      <FormItemSkeleton height={40} />
                    </div>
                    <div className="form-group col-md-4">
                      <FormItemSkeleton height={40} />
                    </div>
                    <div className="form-group col-md-4">
                      <FormItemSkeleton height={40} />
                    </div>
                    <div className="form-group col-md-4">
                      <FormItemSkeleton height={40} />
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
            <div className="card d-flex justify-content-center mx-auto  p-5 contactus rounded-0">
              <h5>Personal Information</h5>
              <hr />
              <div className="row">
                <div className="form-group col-md-4">
                  <FormItemSkeleton height={40} />
                </div>
                <div className="form-group col-md-4">
                  <FormItemSkeleton height={40} />
                </div>
                <div className="form-group col-md-4">
                  <FormItemSkeleton height={40} />
                </div>
                <div className="form-group col-md-4">
                  <FormItemSkeleton height={40} />
                </div>
                <div className="form-group col-md-4">
                  <FormItemSkeleton height={40} />
                </div>
                <div className="form-group col-md-6">
                  <FormItemSkeleton height={40} />
                </div>
                <div className="form-group col-md-6">
                  <FormItemSkeleton height={40} />
                </div>

                <div className="form-button pt-4">
                  <FormItemSkeleton height={40} />
                </div>
                {/* <div class="row mt-3"> <small class="fw-bold">Already have an account? <a
                                                                  class="text-danger " href="login.html">Login</a></small> </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Form>
  );
};

export default RegisterFormLoading;
