/** @format */

interface State {
  isEnquiryModalOpen: boolean;
  isTrialModalOpen: boolean;
  isResultModalOpen: boolean;
  isErrorResultModalOpen: boolean;
  resultMessage: string;
  errorResultMessage: string;
  price:{
    basicOnline:number,
    online: number,
    basic: number,
    popular: number
  }
}

interface Action {
  type: string;
  payload?: any;
}

const initialState: State = {
  isEnquiryModalOpen: false,
  isTrialModalOpen: false,
  isResultModalOpen: false,
  isErrorResultModalOpen: false,
  resultMessage: "",
  errorResultMessage: "",
  price:{
     basicOnline:59,
     online:119,
     basic:66,
     popular:185
  }
};

const reducer = (state: State = initialState, action: Action) => {
  switch (action.type) {
    case "OPEN_ENQUIRY_MODAL":
      return {
        ...state,
        isEnquiryModalOpen: true,
      };
    case "CLOSE_ENQUIRY_MODAL":
      return {
        ...state,
        isEnquiryModalOpen: false,
      };
    case "OPEN_TRIAL_MODAL":
      return {
        ...state,
        isTrialModalOpen: true,
      };
    case "CLOSE_TRIAL_MODAL":
      return {
        ...state,
        isTrialModalOpen: false,
      };
    case "OPEN_RESULT_MODAL":
      return {
        ...state,
        isResultModalOpen: true,
        resultMessage: action.payload.resultMessage,
      };
    case "CLOSE_RESULT_MODAL":
      return {
        ...state,
        isResultModalOpen: false,
        resultMessage: "",
      };
    case "OPEN_ERROR_RESULT_MODAL":
      return {
        ...state,
        isErrorResultModalOpen: true,
        errorResultMessage: action.payload.errorResultMessage,
      };
    case "CLOSE_ERROR_RESULT_MODAL":
      return {
        ...state,
        isErrorResultModalOpen: false,
        errorResultMessage: "",
      };
    default:
      return state;
  }
};

export type { State };
export default reducer;
