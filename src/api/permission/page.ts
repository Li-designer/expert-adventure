import { http } from "@/utils/http";
import { Menu } from "@/views/permission/page/type";
export type MenuCreatResult = {
  success: boolean;
  status: number;
  extra: Object;
  message: string;
  data: Menu[];
};
export type MenuUpdateResult = {
  success: boolean;
  status: number;
  extra: Object;
  message: string;
  data: any;
};

/** 新增菜单 */
export const getMenuCreate = (data?: object) => {
  return http.request<MenuCreatResult>("post", "/menu/getMenuCreate", { data });
};
/** 更新菜单 */
export const getMenuUpdate = (data?: object) => {
  return http.request<MenuCreatResult>("post", "/menu/updateMenu", { data });
};
export const getMenuDetail = (params?: object) => {
  return http.request<MenuCreatResult>("get", "/menu/menuDetail", { params });
};
export const getMenuChildren = (params?: object) => {
  return http.request<MenuCreatResult>("get", "/menu/getMenuChildren", {
    params
  });
};
