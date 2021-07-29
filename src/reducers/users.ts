import { UserState, UserActionType, UserActions } from "../model";
import createReducer from "./createReducer";

const initialState = {} as UserState;

export const users = createReducer<UserState>(initialState, {
  [UserActionType.SET_USER](state: UserState, action: UserActions) {
    return { ...state, user: action.payload };
  },

  [UserActionType.SET_USERS](state: UserState, action: UserActions) {
    return { ...state, users: action.payload };
  },
});
