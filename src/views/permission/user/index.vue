<script setup lang="ts">
import { getRoleList } from "@/api/permission/role";
import { addUserList, getUserList, updateRoles } from "@/api/permission/user";
import { reactive, ref } from "vue";
import { message } from "@/utils/message";
import { CirclePlusFilled } from "@element-plus/icons-vue";

const tableData = ref([]);
const page = reactive({
  pageSize: 10,
  pageNum: 1
});
const roles = ref<Array<number>>([]);
const options = ref([]);
const id = ref(null);
const dialogVisibleUser = ref(false);
const dialogVisibleAdd = ref(false);
const form = reactive({
  username: "",
  password: ""
});

const getUser = async () => {
  const { data } = await getUserList(page);
  tableData.value =
    data.list.map(item => {
      const role = item.roles?.map(el => {
        return el.rolename;
      });
      return {
        ...item,
        roleName: role || []
      };
    }) || [];
};
getUser();

//  * 编辑用户
const editUser = row => {};
// * 修改角色
const editUserRole = async row => {
  const ROW = JSON.parse(JSON.stringify(row));
  roles.value = ROW.roles.map(item => {
    return item.roleId;
  });
  id.value = row.id;
  const { data } = await getRoleList();
  options.value = data;
  dialogVisibleUser.value = true;
};
const submitUserRole = async () => {
  const { data, success } = await updateRoles({
    id: id.value,
    roles: roles.value
  });
  if (success) {
    message(data, { type: "success" });
    dialogVisibleUser.value = false;
    getUser();
  }
};

// * 删除用户

const deleteUser = row => {};
//  * 新增用户
const addUser = () => {
  dialogVisibleAdd.value = true;
};
const submitUser = async () => {
  const { success } = await addUserList({ ...form });
  if (success) {
    message("操作成功!", { type: "success" });
    dialogVisibleAdd.value = false;
    getUser();
  }
};
</script>
<template>
  <div>
    <el-button
      @click="addUser"
      size="small"
      :icon="CirclePlusFilled"
      style="margin-bottom: 10px"
      >新增用户</el-button
    >
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column prop="username" label="用户名" min-width="180" />
      <el-table-column prop="password" label="密码" min-width="180" />
      <el-table-column prop="roles" label="角色" min-width="180">
        <template #default="{ row }">
          <span>{{ row.roleName?.join(",") }}</span>
        </template>
      </el-table-column>
      <el-table-column fixed="right" label="操作" width="300">
        <template #default="{ row }">
          <el-button link type="primary" size="small" @click="editUser(row)"
            >编辑用户</el-button
          >
          <el-button link type="primary" size="small" @click="editUserRole(row)"
            >修改角色</el-button
          >
          <el-button link type="danger" size="small" @click="deleteUser(row)"
            >删除</el-button
          >
        </template>
      </el-table-column>
    </el-table>
    <el-dialog v-model="dialogVisibleUser" title="修改用户角色" width="30%">
      <div>
        <el-select v-model="roles" multiple placeholder="" style="width: 240px">
          <el-option
            v-for="item in options"
            :key="item.roleId"
            :label="item.rolename"
            :value="item.roleId"
          />
        </el-select>
      </div>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="dialogVisibleUser = false">取消</el-button>
          <el-button type="primary" @click="submitUserRole"> 确定 </el-button>
        </span>
      </template>
    </el-dialog>
    <el-dialog v-model="dialogVisibleAdd" title="新增用户" width="30%">
      <div>
        <el-form :model="form" label-width="80px">
          <el-form-item label="用户名">
            <el-input v-model="form.username" />
          </el-form-item>
          <el-form-item label="密码">
            <el-input v-model="form.password" />
          </el-form-item>
        </el-form>
      </div>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="dialogVisibleAdd = false">取消</el-button>
          <el-button type="primary" @click="submitUser"> 确定 </el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<style lang="scss" scoped></style>
