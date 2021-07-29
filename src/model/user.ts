interface ContactMethods {
  id: string;
  type: string;
  summary: string;
  self: string;
  html_url: string | null;
}

interface Teams {
  id: string;
  type: string;
  summary: string;
  self: string;
  html_url: string;
}

interface NotificationRules {
  id: string;
  type: string;
  summary: string;
  self: string;
  html_url: string | null;
}

interface CoordinatedIncidents {
  id: string;
  type: string;
  summary: string;
  self: string;
  html_url: string;
}

export interface User {
  name: string;
  email: string;
  time_zone: string;
  color: string;
  avatar_url: string;
  billed: boolean;
  role: string;
  description: string | null;
  invitation_sent: boolean;
  job_title: string | null;
  teams: Teams[];
  contact_methods: ContactMethods[];
  notification_rules: NotificationRules[];
  coordinated_incidents: CoordinatedIncidents[];
}

export interface Users {
  users: User[];
}

export interface UserState {
    user: User;
    users: Users[];
}

export enum UserActionType {
  SET_USERS = "SET_USERS",
  SET_USER = "SET_USER",
  FETCH_USER = "FETCH_USER",
  FETCH_USERS = "FETCH_USERS",
}

interface UserActionCreatorType<T, P> {
  type: T;
  payload?: P;
}

export type UserActions =
  | UserActionCreatorType<typeof UserActionType.SET_USERS, Users>
  | UserActionCreatorType<typeof UserActionType.SET_USER, User>
  | UserActionCreatorType<typeof UserActionType.FETCH_USER, User>
  | UserActionCreatorType<typeof UserActionType.FETCH_USERS, Users>;
