<script setup lang="ts">
import Search from "./search/index.vue";
import Notice from "./notice/index.vue";
import mixNav from "./sidebar/mixNav.vue";
import { useNav } from "@/layout/hooks/useNav";
import Breadcrumb from "./sidebar/breadCrumb.vue";
import topCollapse from "./sidebar/topCollapse.vue";
import LogoutCircleRLine from "@iconify-icons/ri/logout-circle-r-line";
import Setting from "@iconify-icons/ri/settings-3-line";
import communityIcon from "@iconify-icons/iconoir/community";
import { IconifyIconOffline } from "@/components/ReIcon";
import { ref, reactive } from "vue";
import { initRouter } from "@/router/utils";
import { usePermissionStoreHook } from "@/store/modules/permission";
import { useUserStoreHook } from "@/store/modules/user";
import { storageSession } from "@pureadmin/utils";
import type { FormInstance } from "element-plus";
import { getUserRole } from "@/api/permission/user";

const {
  layout,
  device,
  logout,
  onPanel,
  pureApp,
  username,
  roleNames,
  id,
  avatarsStyle,
  toggleSideBar
} = useNav();
const dialogFormVisible = ref(false);
const formLabelWidth = "140px";
const options = ref([]);
const ruleFormRef = ref<FormInstance>();
const allRole = ref([
  {
    rolename: "全部角色",
    roleType: ""
  }
]);
const form = reactive({
  username: "",
  password: "",
  role: ""
});
const resetForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  formEl.resetFields();
};
// * 多角色登录返回全部菜单,通过角色切换筛选对应角色菜单
// * 查找用户有的角色列表
const changeRole = async () => {
  getRole();
  dialogFormVisible.value = true;
};
const getRole = async () => {
  const { success, data } = await getUserRole({ id: id.value });
  if (success) {
    options.value = data.roles.concat(allRole.value);
  }
};
const changeUserRole = () => {
  useUserStoreHook()
    .loginByUsername({ ...form })
    .then(res => {
      if (res.success) {
        storageSession().removeItem("async-routes");
        usePermissionStoreHook().clearAllCachePage();
        dialogFormVisible.value = false;
        resetForm(ruleFormRef.value);
        form.password = "";
        form.username = "";
        initRouter();
      }
    });
};
</script>

<template>
  <div
    class="navbar bg-[#fff] shadow-sm shadow-[rgba(0, 21, 41, 0.08)] dark:shadow-[#0d0d0d]"
  >
    <topCollapse
      v-if="device === 'mobile'"
      class="hamburger-container"
      :is-active="pureApp.sidebar.opened"
      @toggleClick="toggleSideBar"
    />

    <Breadcrumb
      v-if="layout !== 'mix' && device !== 'mobile'"
      class="breadcrumb-container"
    />

    <mixNav v-if="layout === 'mix'" />

    <div v-if="layout === 'vertical'" class="vertical-header-right">
      <!-- 菜单搜索 -->
      <Search />
      <!-- 通知 -->
      <Notice id="header-notice" />
      <!-- 退出登录 -->
      <el-dropdown trigger="click">
        <span class="select-none el-dropdown-link navbar-bg-hover">
          <img
            src="https://avatars.githubusercontent.com/u/44761321?v=4"
            :style="avatarsStyle"
          />
          <p v-if="username" class="dark:text-white">{{ username }}</p>
          <p
            v-if="roleNames?.length"
            class="dark:text-white"
            style="margin-left: 5px; color: #df975d"
          >
            {{ roleNames?.join(" ") }}
          </p>
        </span>
        <template #dropdown>
          <el-dropdown-menu class="logout">
            <el-dropdown-item @click="changeRole">
              <IconifyIconOffline
                :icon="communityIcon"
                style="margin: 5px; color: #df975d"
              />
              切换角色
            </el-dropdown-item>
            <el-dropdown-item @click="logout">
              <IconifyIconOffline
                :icon="LogoutCircleRLine"
                style="margin: 5px"
              />
              退出系统
            </el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
      <span
        class="set-icon navbar-bg-hover"
        title="打开项目配置"
        @click="onPanel"
      >
        <IconifyIconOffline :icon="Setting" />
      </span>
    </div>
    <el-dialog v-model="dialogFormVisible" title="切换角色" width="35%">
      <el-form :model="form" ref="ruleFormRef">
        <el-form-item label="账号" :label-width="formLabelWidth">
          <el-input v-model="form.username" autocomplete="off" />
        </el-form-item>
        <el-form-item label="密码" :label-width="formLabelWidth">
          <el-input
            type="password"
            v-model="form.password"
            autocomplete="off"
          />
        </el-form-item>
        <el-form-item label="选择切换角色" :label-width="formLabelWidth">
          <el-select v-model="form.role" placeholder="" style="width: 240px">
            <el-option
              v-for="(item, index) in options"
              :key="index"
              :label="item.rolename"
              :value="item.roleType"
            />
          </el-select>
        </el-form-item>
      </el-form>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="dialogFormVisible = false">取消</el-button>
          <el-button type="primary" @click="changeUserRole"> 确认 </el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<style lang="scss" scoped>
.navbar {
  width: 100%;
  height: 48px;
  overflow: hidden;

  .hamburger-container {
    line-height: 48px;
    height: 100%;
    float: left;
    cursor: pointer;
  }

  .vertical-header-right {
    display: flex;
    min-width: 280px;
    height: 48px;
    align-items: center;
    color: #000000d9;
    justify-content: flex-end;

    .el-dropdown-link {
      height: 48px;
      padding: 10px;
      display: flex;
      align-items: center;
      justify-content: space-around;
      cursor: pointer;
      color: #000000d9;

      p {
        font-size: 14px;
      }

      img {
        width: 22px;
        height: 22px;
        border-radius: 50%;
      }
    }
  }

  .breadcrumb-container {
    float: left;
    margin-left: 16px;
  }
}

.logout {
  max-width: 120px;

  ::v-deep(.el-dropdown-menu__item) {
    min-width: 100%;
    display: inline-flex;
    flex-wrap: wrap;
  }
}
</style>
