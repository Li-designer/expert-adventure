import { http } from "@/utils/http";
import { Menu, type Meta } from "@/permission/page/type";
export type MenuCreatResult = {
  success: boolean;
  status: number;
  extra: Object;
  message: string;
  data: {
    path: string;
    parentKey?: string;
    name: string;
    component: string;
    icon?: string;
    title?: string;
    meta?: Meta;
    rank?: number;
    showLink?: boolean;
    keepAlive?: boolean;
    hasChildren?: boolean;
    children?: Menu[];
  };
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
