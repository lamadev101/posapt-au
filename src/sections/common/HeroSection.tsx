import EnquiryForm from "@/Components/EnquiryForm";
import { RootState } from "@/Redux/reducers";
import Link from "next/link";
import { Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";


interface HeroSectionProps {
  title: string;
  imgTitle?: string;
  desc: string;
  imgUrl: string;
  twoBtn?: boolean;
}

export interface hideTrialModal {
  type: "CLOSE_TRIAL_MODAL";
}


const HeroSection: React.FC<HeroSectionProps> = ({ title, desc, imgUrl, imgTitle, twoBtn }) => {
  const dispatch = useDispatch();
  const { isEnquiryModalOpen, isTrialModalOpen } = useSelector(
    (state: RootState) => state.StateManager
  );
  return (
    <>
      <Modal
        show={isTrialModalOpen}
        onHide={() => {
          dispatch<hideTrialModal>({
            type: "CLOSE_TRIAL_MODAL",
          });
        }}
      >
        <Modal.Header closeButton>
          <Modal.Title style={{ fontSize: "20px" }}>
            {" "}
            Please Select Below to Request Free Trial!
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row">
            <div className="col-lg-6 col-12">
              <Link href={"/register?type=pos"}>
                <div className="border-gray p-15 mb-4 bg-white text-center trialimg">
                  <img
                    src="/assets/dist/image/pos.webp"
                    className="img-fluid"
                    alt="POSApt Logo"
                    title="POSApt Logo"
                  />
                  <div className="alt-font text-extra-dark-gray fw-bold d-block">
                    Point of Sale
                  </div>
                </div>
              </Link>
            </div>
            <div className="col-lg-6 col-12">
              <Link href={"/register?type=online"}>
                <div className="border-gray p-15 mb-4 bg-white text-center trialimg">
                  <img
                    src="/assets/dist/image/order.webp"
                    className="img-fluid"
                    alt="Online Ordering System"
                    title="Online Ordering System"
                  />
                  <div className="alt-font text-extra-dark-gray fw-bold d-block">
                    Online Ordering System
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </Modal.Body>
      </Modal>
      <Modal
        show={isEnquiryModalOpen}
        onHide={() => {
          dispatch({
            type: "CLOSE_ENQUIRY_MODAL",
          });
        }}
      >
        <Modal.Header closeButton>
          <Modal.Title style={{ fontSize: "20px" }}>
            Enquire Now
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <EnquiryForm />
        </Modal.Body>
      </Modal>

      <section className=" pt-1 pt-md-5 pb-50 bg-home">
        <div className="container  text-center">
          <div className="row ">
            <div className="col-md-7 ">
              <div className="heading_s1 mt-5">
                <h1
                  className="text-capitalize fs-61 text-white"
                  dangerouslySetInnerHTML={{ __html: title }}
                />
              </div>
            </div>
            <div className="col-md-5 ">
              <div className="">
                <img
                  src={`/assets/dist/image/${imgUrl}`}
                  className="img-fluid"
                  alt={imgTitle}
                  title={imgTitle}
                />
              </div>
            </div>
            <div className="col-md-12">
              <div className="subpara ">
                <p className="text-center fs-47 text-white">
                  <span style={{ fontWeight: 400 }}>{desc}</span>
                </p>
                <div className="text-center newhome_btn">
                  {
                    twoBtn ?
                      <>
                        <a
                          className="btn btn-white btn-red fs-6 mb-2"
                          onClick={() => {
                            dispatch({
                              type: "OPEN_TRIAL_MODAL",
                            });
                          }}
                        >
                          Sign Up for Free
                        </a>
                        <a className="btn btn-white btn-red fs-6 mb-2 ms-2" target="_blank" href="https://www.youtube.com/watch?v=H2YXiMSWf7M">
                          Watch Video
                        </a>
                      </> :
                      <a className="btn btn-white btn-red fs-6" onClick={() => {
                        dispatch({
                          type: "OPEN_TRIAL_MODAL",
                        });
                      }}>
                        Sign Up for Free Trial !
                      </a>
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default HeroSection