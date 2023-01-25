import { http } from "@/utils/http";

// type Result = {
//   success: boolean;
//   data: Array<any>;
// };

type Result = {
  success: boolean;
  data: Array<any>;
  status: number;
  extra: Object;
  message: string;
};

// export const getAsyncRoutes = () => {
//   return http.request<Result>("get", "/getAsyncRoutes");
// };
export const getAsyncRoutes = () => {
  return http.request<Result>("get", "/menu/getMenuList");
};
