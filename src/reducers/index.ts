import { combineReducers } from "redux";
import { UserState } from "../model";
import { users } from "./users";

export interface RootState {
  user: UserState;
}

// eslint-disable-next-line import/no-anonymous-default-export
export default () =>
  combineReducers({
    users,
  });
