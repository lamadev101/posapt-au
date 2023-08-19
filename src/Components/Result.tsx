/** @format */

import { Button } from "antd";
import React, { useEffect } from "react";
import { Modal } from "react-bootstrap";
import { useSelector } from "react-redux";
import { RootState } from "../Redux/reducers";
import { useDispatch } from "react-redux";
import { Result as AntdResult } from "antd";

interface Props {}

interface closeResultModal {
  type: "CLOSE_RESULT_MODAL";
  payload: {
    isResultModalOpen: boolean;
    resultMessage: string;
  };
}
export interface openResultModal {
  type: "OPEN_RESULT_MODAL";
  payload: {
    isResultModalOpen: boolean;
    resultMessage: string;
  };
}

const Result: React.FC<Props> = ({}) => {
  const dispatch = useDispatch();
  const { isResultModalOpen, resultMessage } = useSelector(
    (state: RootState) => state.StateManager
  );

  useEffect(() => {
    if (isResultModalOpen) {
      setTimeout(() => {
        dispatch<closeResultModal>({
          type: "CLOSE_RESULT_MODAL",
          payload: {
            isResultModalOpen: false,
            resultMessage: "",
          },
        });
      }, 3000);
    }
  }, [isResultModalOpen]);
  return (
    <Modal
      show={isResultModalOpen}
      onHide={() => {
        dispatch<closeResultModal>({
          type: "CLOSE_RESULT_MODAL",
          payload: {
            isResultModalOpen: false,
            resultMessage: "",
          },
        });
      }}
    >
      <AntdResult status="success" title={resultMessage} />
    </Modal>
  );
};

export default Result;
