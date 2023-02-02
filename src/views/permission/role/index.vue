<script lang="ts" setup>
import { ref, watch, reactive } from "vue";
import { ElTree } from "element-plus";
import {
  addRoleTable,
  editRolePermissiom,
  editRoleTable,
  getRoleList
} from "@/api/permission/role";
import { type Role } from "@/api/permission/role";
import { getAsyncRoutes } from "@/api/routes";
import { Menu } from ".././page/type";
import { CirclePlusFilled } from "@element-plus/icons-vue";
import { message } from "@/utils/message";
import router from "@/router";
defineOptions({
  name: "permissionRole"
});

const tableData = ref<Role[]>([]);
const treeData = ref<Menu[]>([]);
const checkMenu = ref<Array<number>>([]);
const filterText = ref("");
const treeRef = ref<InstanceType<typeof ElTree>>();
const dialogFormVisible = ref(false);
const roleId = ref(null);
const title = ref("");
const formLabelWidth = "80px";
const formRole = reactive({
  rolename: "",
  roleType: ""
});

const defaultProps = {
  children: "children",
  label: (data, node) => {
    return data.meta.title;
  }
};

watch(filterText, val => {
  treeRef.value!.filter(val);
});

const filterNode = (value: string, data: Menu) => {
  if (!value) return true;
  return data.meta.title.includes(value);
};
// * 树
const getAllAsyncRoute = async () => {
  const { data } = await getAsyncRoutes();
  treeData.value = data;
};
getAllAsyncRoute();

// * 表格
const getRoleTable = async () => {
  const { data } = await getRoleList();
  tableData.value = data;
};
getRoleTable();
// 新增角色
const addRole = () => {
  title.value = "新增角色";
  dialogFormVisible.value = true;
};
const addRoleList = async () => {
  if (!roleId.value) {
    const { data, success } = await addRoleTable({ ...formRole });
    if (success) {
      message("操作成功!", { type: "success" });
      handlerClose();
      getRoleTable();
    }
  } else {
    const { data, success } = await editRoleTable({
      roleId: roleId.value,
      ...formRole
    });
    if (success) {
      message("操作成功!", { type: "success" });
      handlerClose();
      getRoleTable();
    }
  }
};
// TODO 菜单树角色权限修改
const editRole = row => {
  title.value = "编辑角色";
  const form = JSON.parse(JSON.stringify(row));
  roleId.value = row.roleId;
  Object.keys(formRole).forEach(item => {
    formRole[item] = form[item];
  });
  dialogFormVisible.value = true;
};
const deleteRole = row => {};

const handlerClose = () => {
  const form = {
    rolename: "",
    roleType: ""
  };
  Object.keys(formRole).forEach(item => {
    formRole[item] = form[item];
  });
  dialogFormVisible.value = false;
  roleId.value = null;
};
// * 表格筛选角色,角色type在树roles中存在拿到key=>setCheckedKeys
const handlerRow = (row, column, event) => {
  checkMenu.value = [];
  roleId.value = row.roleId;
  const checkKeys = dgTree(treeData.value, row.roleType);
  treeRef.value.setCheckedKeys(checkKeys);
};
// * 递归树

const dgTree = (arr: Menu[], type: string): Array<number> => {
  arr.forEach(item => {
    if (item.meta.roles.indexOf(type) !== -1) {
      checkMenu.value.push(item.id);
    }
    if (item.children && item.children.length > 0) {
      dgTree(item.children, type);
    }
  });
  return checkMenu.value;
};

// * 更改菜单权限
const updateTreePer = async () => {
  const keys = treeRef.value.getCheckedKeys();
  const { success } = await editRolePermissiom({ roleId: roleId.value, keys });
  if (success) {
    getAllAsyncRoute();
    roleId.value = null;
    treeRef.value.setCheckedKeys(keys);
    message("操作成功!", { type: "success" });
  }
};
</script>
<template>
  <div>
    <el-button
      @click="addRole"
      size="small"
      :icon="CirclePlusFilled"
      style="margin-bottom: 10px"
      >新增角色</el-button
    >
    <el-row style="display: flex; justify-content: space-between">
      <el-col :span="16">
        <el-table
          :data="tableData"
          stripe
          highlight-current-row
          style="width: 100%"
          @row-click="handlerRow"
        >
          <el-table-column prop="rolename" label="角色名称" min-width="180" />
          <el-table-column prop="roleType" label="角色标识" min-width="180" />
          <el-table-column fixed="right" label="操作" width="120">
            <template #default="{ row }">
              <el-button link type="primary" size="small" @click="editRole(row)"
                >编辑</el-button
              >
              <el-button
                link
                type="danger"
                size="small"
                @click="deleteRole(row)"
                >删除</el-button
              >
            </template>
          </el-table-column>
        </el-table>
      </el-col>
      <el-col :span="7" style="background-color: #fff; padding: 10px">
        <el-button
          color="#366BF2"
          style="margin-bottom: 10px; float: right"
          @click="updateTreePer"
          >保存</el-button
        >
        <el-input v-model="filterText" placeholder="" />

        <el-tree
          ref="treeRef"
          class="filter-tree"
          show-checkbox
          node-key="id"
          :data="treeData"
          :props="defaultProps"
          default-expand-all
          :filter-node-method="filterNode"
        />
      </el-col>
    </el-row>
    <!-- 新增弹框 -->
    <el-dialog
      v-model="dialogFormVisible"
      :title="title"
      width="30%"
      @close="handlerClose"
    >
      <el-form :model="formRole">
        <el-form-item label="角色名称" :label-width="formLabelWidth">
          <el-input v-model="formRole.rolename" autocomplete="off" />
        </el-form-item>
        <el-form-item label="角色标识" :label-width="formLabelWidth">
          <el-input v-model="formRole.roleType" autocomplete="off" />
        </el-form-item>
      </el-form>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="dialogFormVisible = false">取消</el-button>
          <el-button type="primary" @click="addRoleList"> 确定 </el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>
<style lang="scss" scoped></style>
