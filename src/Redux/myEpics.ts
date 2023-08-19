/** @format */

import { mergeMap, catchError } from "rxjs/operators";
import { Epic, ofType } from "redux-observable";
import { merge, of, from } from "rxjs";
import { API } from "../Helpers/BaseUrlProvider";
import { createAsyncAction } from "typesafe-actions";

const SEND_ENQUIRY = createAsyncAction(
  "SEND_ENQUIRY_REQUEST",
  "SEND_ENQUIRY_SUCCESS",
  "SEND_ENQUIRY_FAILURE"
)<string, any, string>();

export const sendEnquiryEpic: Epic = (action$) =>
  action$.pipe(
    ofType(SEND_ENQUIRY.request),
    mergeMap((action) =>
      from(API.post("/api/onboard/sendEnquiry", action.payload)).pipe(
        mergeMap((response) => of(SEND_ENQUIRY.success(response))),
        catchError((error) => of(SEND_ENQUIRY.failure(error)))
      )
    )
  );
const REGISTER_BUSINESS = createAsyncAction(
  "REGISTER_REQUEST",
  "REGISTER_SUCCESS",
  "REGISTER_FAILURE"
)<string, any, string>();

export const registerBusinessEpic: Epic = (action$) =>
  action$.pipe(
    ofType(REGISTER_BUSINESS.request),
    mergeMap((action) =>
      from(
        API.post("/api/onboard/onBoardUserStoreWebsite", action.payload)
      ).pipe(
        mergeMap((response) => of(REGISTER_BUSINESS.success(response))),
        catchError((error) => of(REGISTER_BUSINESS.failure(error)))
      )
    )
  );
const GET_ONBOARD_SECTION_LIST = createAsyncAction(
  "GET_ONBOARD_SECTION_LIST_REQUEST",
  "GET_ONBOARD_SECTION_LIST_SUCCESS",
  "GET_ONBOARD_SECTION_LIST_FAILURE"
)<string, any, string>();

export const getOnBoardSectionEpic: Epic = (action$) =>
  action$.pipe(
    ofType(GET_ONBOARD_SECTION_LIST.request),
    mergeMap((action) =>
      from(
        API.get(
          "/api/onboard/onBoardUserStoreWebsiteAddSectionList",
          action.payload
        )
      ).pipe(
        mergeMap((response) => of(GET_ONBOARD_SECTION_LIST.success(response))),
        catchError((error) => of(GET_ONBOARD_SECTION_LIST.failure(error)))
      )
    )
  );

const LUCAPAY_INTEGERATION = createAsyncAction(
  "LUCAPAY_INTEGERATE_REQUEST",
  "LUCAPAY_INTEGERATE_SUCCESS",
  "LUCAPAY_INTEGERATE_FAILURE"
)<string, any, string>();

export const lucaPayIntegerationEpic: Epic = (action$) =>
  action$.pipe(
    ofType(LUCAPAY_INTEGERATION.request),
    mergeMap((action) =>
      from(
        API.post("/api/ShortTermCashFlow/applySTCFLucaPay", action.payload)
      ).pipe(
        mergeMap((response) => of(LUCAPAY_INTEGERATION.success(response))),
        catchError((error) => of(LUCAPAY_INTEGERATION.failure(error)))
      )
    )
  );

  const GET_BLOGS = createAsyncAction(
    "GET_BLOGS_REQUEST",
    "GET_BLOGS_SUCCESS",
    "GET_BLOGS_FAILURE",
  )<string, any, string>();
  
  export const getBLogsEpic: Epic = (action$) =>
    action$.pipe(
      ofType(GET_BLOGS.request),
      mergeMap((action) =>
        from(
          API.post("/api/common/listWebsiteBlogs", action.payload)
        ).pipe(
          mergeMap((response) => of(GET_BLOGS.success(response))),
          catchError((error) => of(GET_BLOGS.failure(error)))
        )
      )
    );
  
    const GET_BLOGS_DETAIL = createAsyncAction(
      "GET_BLOGS_DETAIL_REQUEST",
      "GET_BLOGS_DETAIL_SUCCESS",
      "GET_BLOGS_DETAIL_FAILURE"
    )<string, any, string>();
    
    export const getBLogDetailEpic: Epic = (action$) =>
      action$.pipe(
        ofType(GET_BLOGS_DETAIL.request),
        mergeMap((action) =>
          from(
            API.get(`/api/common/getWebsiteBlogBySlug/`+action.payload)
          ).pipe(
            mergeMap((response) => of(GET_BLOGS_DETAIL.success(response))),
            catchError((error) => of(GET_BLOGS_DETAIL.failure(error)))
          )
        )
      );
  