import { UserActionType } from '../model';
import UserService from '../services/users.service';
import { makeActionCreator, makeFetchActionCreator } from './actionCreator';


export const setUser = makeActionCreator(UserActionType.SET_USER);
export const setUsers = makeActionCreator(UserActionType.SET_USERS);

export const fetchUsers = makeFetchActionCreator(
    new UserService(),
    'getUsers',
    setUsers,
    'data',
  );