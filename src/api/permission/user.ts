import { http } from "@/utils/http";
import { type Role } from "./role";
export type UserResult = {
  success: boolean;
  status: number;
  extra: Object;
  message: string;
  data: {
    list: List;
    pageNum: number | string;
    pageSize: number | string;
    total: number | string;
  };
};
export type UserUpdateResult = {
  success: boolean;
  status: number;
  extra: Object;
  message: string;
  data: string;
};
export type UserRolesResult = {
  success: boolean;
  status: number;
  extra: Object;
  message: string;
  data: User;
};

export type User = {
  id?: number;
  username: string;
  password?: string;
  roles: Role[];
};

export type List = User[];

export const getUserList = (params: object) => {
  return http.request<UserResult>("get", "/user/all", { params });
};
export const updateRoles = (data: object) => {
  return http.request<UserUpdateResult>("post", "/user/updateRoles", { data });
};
export const addUserList = (data?: object) => {
  return http.request<UserUpdateResult>("post", "/user/addUser", { data });
};
export const getUserRole = (params?: object) => {
  return http.request<UserRolesResult>("get", "/user/userRoles", { params });
};
