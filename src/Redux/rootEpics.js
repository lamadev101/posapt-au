/** @format */

import { combineEpics } from "redux-observable";
import {
  getBLogsEpic,
  getBLogDetailEpic,
  getOnBoardSectionEpic,
  lucaPayIntegerationEpic,
  registerBusinessEpic,
  sendEnquiryEpic,
} from "./myEpics";

export const rootEpic = combineEpics(
  sendEnquiryEpic,
  registerBusinessEpic,
  getOnBoardSectionEpic,
  lucaPayIntegerationEpic,
  getBLogsEpic,
  getBLogDetailEpic
);
