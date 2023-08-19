/** @format */

import { combineReducers } from "redux";
import StateManager, { State } from "./StateManager";
import AppReducer, { State as AppReducerState } from "./AppReducer";
import BlogsReducer, { State as BlogsReducerState } from "./BlogsReducer";

export interface RootState {
  StateManager: State;
  AppReducer: AppReducerState;
  BlogsReducer: BlogsReducerState;
}

export const rootReducer = combineReducers<RootState>({
  StateManager,
  AppReducer,
  BlogsReducer
});
