/** @format */

import { Result as AntdResult } from "antd";
import React, { useEffect } from "react";
import { Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../Redux/reducers";

interface Props {}

interface closeErrorResultModal {
  type: "CLOSE_ERROR_RESULT_MODAL";
  payload: {
    isErrorResultModalOpen: boolean;
    errorResultMessage: string;
  };
}
export interface openErrorResultModal {
  type: "OPEN_ERROR_RESULT_MODAL";
  payload: {
    isErrorResultModalOpen: boolean;
    errorResultMessage: string;
  };
}

const ErrorResult: React.FC<Props> = ({}) => {
  const dispatch = useDispatch();
  const { isErrorResultModalOpen, errorResultMessage } = useSelector(
    (state: RootState) => state.StateManager
  );

  useEffect(() => {
    if (isErrorResultModalOpen) {
      setTimeout(() => {
        dispatch<closeErrorResultModal>({
          type: "CLOSE_ERROR_RESULT_MODAL",
          payload: {
            isErrorResultModalOpen: false,
            errorResultMessage: "",
          },
        });
      }, 3000);
    }
  }, [isErrorResultModalOpen]);

  return (
    <Modal
      show={isErrorResultModalOpen}
      onHide={() => {
        dispatch<closeErrorResultModal>({
          type: "CLOSE_ERROR_RESULT_MODAL",
          payload: {
            isErrorResultModalOpen: false,
            errorResultMessage: "",
          },
        });
      }}
    >
      <AntdResult status="error" title={errorResultMessage} />
    </Modal>
  );
};

export default ErrorResult;
