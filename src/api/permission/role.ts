import { http } from "@/utils/http";

export type RoleResult = {
  success: boolean;
  status: number;
  extra: Object;
  message: string;
  data: Role[];
};

export type Role = {
  roleId?: number;
  rolename: string;
  roleType: string;
};

export type AddRoleResult = {
  success: boolean;
  status: number;
  extra: Object;
  message: string;
  data: Object;
};
export const getRoleList = () => {
  return http.request<RoleResult>("get", "/role/roleList");
};
// /role/addRole
export const addRoleTable = (data?: object) => {
  return http.request<AddRoleResult>("post", "/role/addRole", { data });
};
export const editRoleTable = (data?: object) => {
  return http.request<AddRoleResult>("post", "/role/updateMenuKeys", { data });
};
export const editRolePermissiom = (data?: object) => {
  return http.request<AddRoleResult>("post", "/role/updateMenuKeys", { data });
};
