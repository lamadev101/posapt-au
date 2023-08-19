/** @format */
import { Country, RootObject } from "../../utils/Interfaces";

interface State {
  isLoading: boolean;
  isOperationSuccessful: boolean;
  isErrorOccured: boolean;
  errorMessage: string;
  successMessage: string;
  onBoardSectionList: RootObject | undefined;
  getOnBoardSectionListLoading: boolean;
  countryCitiesList: Country[];
}

interface Action {
  type: string;
  payload?: any;
}

const initialState: State = {
  isLoading: false,
  isOperationSuccessful: false,
  isErrorOccured: false,
  errorMessage: "",
  successMessage: "",
  onBoardSectionList: undefined,
  getOnBoardSectionListLoading: false,
  countryCitiesList: [],
};

const reducer = (state: State = initialState, action: Action) => {
  switch (action.type) {
    case "SEND_ENQUIRY_REQUEST":
      return {
        ...state,
        isLoading: true,
        isOperationSuccessful: false,
      };
    case "SEND_ENQUIRY_SUCCESS":
      return {
        ...state,
        isLoading: false,
        isOperationSuccessful: true,
        successMessage: action.payload?.data?.message,
      };
    case "SEND_ENQUIRY_FAILURE":
      return {
        ...state,
        isLoading: false,
        isOperationSuccessful: false,
      };
    case "REGISTER_REQUEST":
      return {
        ...state,
        isLoading: true,
        isOperationSuccessful: false,
      };
    case "REGISTER_SUCCESS":
      return {
        ...state,
        isLoading: false,
        isOperationSuccessful: true,
        successMessage: action.payload?.data?.message,
      };
    case "REGISTER_FAILURE":
      return {
        ...state,
        isLoading: false,
        isOperationSuccessful: false,
      };
    case "LUCAPAY_INTEGERATE_REQUEST":
      return {
        ...state,
        isLoading: true,
        isOperationSuccessful: false,
        isErrorOccured: false,
      };
    case "LUCAPAY_INTEGERATE_SUCCESS":
      return {
        ...state,
        isLoading: false,
        isOperationSuccessful: true,
        isErrorOccured: false,
        successMessage: action.payload?.data?.message?.[0]?.message,
      };
    case "LUCAPAY_INTEGERATE_FAILURE":
      console.log(
        "sada",
        action.payload?.response?.data?.message?.[0]?.message
      );
      return {
        ...state,
        isLoading: false,
        isErrorOccured: true,
        errorMessage: action.payload?.response?.data?.message?.[0]?.message,
        isOperationSuccessful: false,
      };

    case "MAKE_OPERATION_FALSE":
      return {
        ...state,
        isOperationSuccessful: false,
        isErrorOccured: false,
      };
    case "GET_ONBOARD_SECTION_LIST_REQUEST":
      return {
        ...state,
        getOnBoardSectionListLoading: true,
      };
    case "GET_ONBOARD_SECTION_LIST_SUCCESS":
      return {
        ...state,
        onBoardSectionList: action.payload?.data,
        getOnBoardSectionListLoading: false,
        countryCitiesList: action.payload?.data?.countries,
      };
    case "GET_ONBOARD_SECTION_LIST_FAILURE":
      return {
        ...state,
        getOnBoardSectionListLoading: false,
      };
    default:
      return state;
  }
};

export type { State };
export default reducer;
