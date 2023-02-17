import { defineStore } from "pinia";
import { store } from "@/store";
import { userType } from "./types";
import { routerArrays } from "@/layout/types";
import { router, resetRouter } from "@/router";
import { storageSession } from "@pureadmin/utils";
import { getLogin, refreshTokenApi } from "@/api/user";
import { UserLoginResult, RefreshTokenResult } from "@/api/user";
import { useMultiTagsStoreHook } from "@/store/modules/multiTags";
import { type DataInfo, setToken, removeToken, sessionKey } from "@/utils/auth";

export const useUserStore = defineStore({
  id: "pure-user",
  state: (): userType => ({
    id: storageSession().getItem<DataInfo<number>>(sessionKey)?.id ?? null,
    // 用户名
    username:
      storageSession().getItem<DataInfo<number>>(sessionKey)?.username ?? "",
    // 页面级别权限
    roles: storageSession().getItem<DataInfo<number>>(sessionKey)?.roles ?? [],
    // 角色名称
    roleNames:
      storageSession().getItem<DataInfo<number>>(sessionKey)?.roleNames ?? []
  }),
  actions: {
    /** 存储用户id */
    SET_USERID(id: number) {
      this.id = id;
    },
    /** 存储用户名 */
    SET_USERNAME(username: string) {
      this.username = username;
    },
    /** 存储角色 */
    SET_ROLES(roles: Array<string>) {
      this.roles = roles;
    },
    /** 存储角色名称 */
    SET_ROLESNAME(rolesname: Array<string>) {
      this.roleNames = rolesname;
    },
    /** 登入 */
    async loginByUsername(data) {
      return new Promise<UserLoginResult>((resolve, reject) => {
        getLogin(data)
          .then(data => {
            if (data) {
              setToken(data.data);
              resolve(data);
            }
          })
          .catch(error => {
            reject(error);
          });
      });
    },
    /** 前端登出（不调用接口） */
    logOut() {
      this.username = "";
      this.roles = [];
      removeToken();
      useMultiTagsStoreHook().handleTags("equal", [...routerArrays]);
      resetRouter();
      router.push("/login");
    }
    /** 刷新`token` */
    async handRefreshToken(data) {
      return new Promise<RefreshTokenResult>((resolve, reject) => {
        // refreshTokenApi(data)
        //   .then(data => {
        //     if (data) {
        //       setToken(data.data);
        //       resolve(data);
        //     }
        //   })
        //   .catch(error => {
        //     reject(error);
        //   });
      });
    }
  }
});

export function useUserStoreHook() {
  return useUserStore(store);
}
