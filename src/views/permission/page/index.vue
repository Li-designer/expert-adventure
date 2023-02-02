/* eslint-disable prettier/prettier */
<script setup lang="ts">
import { getAsyncRoutes } from "@/api/routes";
import { CircleCloseFilled } from "@element-plus/icons-vue";
import { reactive, ref, toRaw, toRefs } from "vue";
import type { FormInstance, FormRules } from "element-plus";
import { useRenderIcon } from "@/components/ReIcon/src/hooks";
import { CirclePlusFilled } from "@element-plus/icons-vue";
import { Menu } from "./type";
import {
  getMenuChildren,
  getMenuCreate,
  getMenuDetail,
  getMenuUpdate,
  MenuCreatResult,
  MenuUpdateResult
} from "@/api/permission/page";
import { message } from "@/utils/message";
defineOptions({
  name: "permissionPage"
});

const tableData = ref<Menu[]>([]);
const allData = ref<Menu[]>([]);
const dialogVisible = ref(false);
const dialogTitle = ref<string>("");
// * 获取所有异步路由
const getAllAsyncRoute = async () => {
  const { data } = await getAsyncRoutes();
  allData.value = data || [];
  // 保存所有异步路由筛选子路由
  if (data.length > 0) {
    tableData.value = dealTreeData(data);
  }
};

const load = async (
  row: Menu,
  treeNode: unknown,
  resolve: (date: Menu[]) => void
) => {
  // * 筛选子路由
  // setTimeout(() => {
  const { data, success } = await getMenuChildren({ key: row.key });
  if (success) {
    const tableDataChildren: Menu[] = dealTreeData(data);
    resolve(tableDataChildren);
  }
  // }, 1000);
};
const handlerExpand = () => {};

const dealTreeData = (data: Menu[]) => {
  const arr: Menu[] = data.map(item => {
    item.hasChildren = item.children?.length > 0 ? true : false;
    return {
      ...item,
      icon: item.meta.icon,
      title: item.meta.title,
      rank: item.meta.rank || 0,
      hasChildren: item.hasChildren
    };
  });
  return arr;
};

getAllAsyncRoute();

// *表单
const flagEdit = ref(false);
const id = ref(null);
const formSize = ref("default");
const Row = ref<Menu>();
const ruleFormRef = ref<FormInstance>();
const expandTable = ref();
const ruleForm = reactive({
  title: "",
  path: "",
  rank: "",
  icon: "",
  parentKey: "",
  key: "",
  component: "",
  showLine: false,
  keepAlive: false
});
const options = [
  {
    label: "material-symbols:menu-book-outline-rounded",
    value: "material-symbols:menu-book-outline-rounded"
  },
  {
    label: "bi:car-front",
    value: "bi:car-front"
  },
  {
    label: "bi:calendar4-range",
    value: "bi:calendar4-range"
  }
];

const rules = reactive<FormRules>({
  name: [
    { required: true, message: "Please input Activity name", trigger: "blur" },
    { min: 3, max: 5, message: "Length should be 3 to 5", trigger: "blur" }
  ],
  region: [
    {
      required: true,
      message: "Please select Activity zone",
      trigger: "change"
    }
  ],
  count: [
    {
      required: true,
      message: "Please select Activity count",
      trigger: "change"
    }
  ],
  date1: [
    {
      type: "date",
      required: true,
      message: "Please pick a date",
      trigger: "change"
    }
  ],
  date2: [
    {
      type: "date",
      required: true,
      message: "Please pick a time",
      trigger: "change"
    }
  ],
  type: [
    {
      type: "array",
      required: true,
      message: "Please select at least one activity type",
      trigger: "change"
    }
  ],
  resource: [
    {
      required: true,
      message: "Please select activity resource",
      trigger: "change"
    }
  ],
  desc: [
    { required: true, message: "Please input activity form", trigger: "blur" }
  ]
});

const submitForm = async (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  await formEl.validate(async (valid, fields) => {
    if (valid) {
      if (!flagEdit.value) {
        const res: MenuCreatResult = await getMenuCreate({
          ...ruleForm,
          name: ruleForm.key
        });
        if (res.success) {
          message("操作成功!", { type: "success" });
          close();
          getAllAsyncRoute();
        }
      } else {
        const res: MenuUpdateResult = await getMenuUpdate({
          id: id.value,
          ...ruleForm,
          name: ruleForm.key
        });
        if (res.success) {
          message("操作成功!", { type: "success" });
          close();
          await getAllAsyncRoute();
        }
      }
    } else {
      console.log("error submit!", fields);
    }
  });
};

// const getParentRow = (arr, key) => {
//   let Row = {};
//   arr.forEach(item => {
//     if (item.parentkey == key) {
//       Row = item;
//     } else if (item.children && item.children.length > 0) {
//       getParentRow(item.children, key);
//     }
//   });
//   return Row;
// };

const resetForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  formEl.resetFields();
};

// 编辑菜单
const editMenu = async row => {
  Row.value = row;
  console.log(Row.value);

  flagEdit.value = true;
  const { data: form, success } = await getMenuDetail({ id: row.id });
  if (success) {
    Object.keys(ruleForm).forEach(item => {
      ruleForm[item] = form[item];
    });
    id.value = row.id;
    dialogTitle.value = row.title;
    dialogVisible.value = true;
  }
};
// 新增
const deleteMenu = row => {};
const close = () => {
  dialogVisible.value = false;
  flagEdit.value = false;
  clearForm();
};

const clearForm = () => {
  const form = {
    title: "",
    path: "",
    rank: "",
    icon: "",
    parentKey: "",
    key: "",
    component: "",
    showLine: false,
    keepAlive: false
  };
  Object.keys(ruleForm).forEach(item => {
    ruleForm[item] = form[item];
  });
};

const addMenu = () => {
  dialogTitle.value = "新增菜单";
  dialogVisible.value = true;
};
</script>

<template>
  <!--  -->
  <div>
    <el-button
      @click="addMenu"
      size="small"
      :icon="CirclePlusFilled"
      style="margin-bottom: 10px"
      >新增菜单</el-button
    >
    <el-table
      ref="expandTable"
      :data="tableData"
      style="width: 100%"
      @expand-change="handlerExpand"
      row-key="id"
      border
      lazy
      :load="load"
      :tree-props="{ children: 'children', hasChildren: 'hasChildren' }"
    >
      <el-table-column prop="title" label="标题" />
      <el-table-column prop="icon" label="图标" />
      <el-table-column prop="name" label="组件标识" />
      <el-table-column prop="path" label="菜单路径" />
      <el-table-column prop="component" label="组件路径" />
      <el-table-column prop="rank" label="排序" />
      <el-table-column prop="showLink" label="是否显示" />
      <el-table-column prop="keepAlive" label="是否缓存" />
      <el-table-column fixed="right" label="操作" width="120">
        <template #default="{ row }">
          <el-button link type="primary" size="small" @click="editMenu(row)"
            >编辑</el-button
          >
          <el-button link type="danger" size="small" @click="deleteMenu(row)"
            >删除</el-button
          >
        </template>
      </el-table-column>
    </el-table>
    <el-dialog
      @close="close"
      v-model="dialogVisible"
      title="Tips"
      width="30%"
      :show-close="false"
    >
      <template #header="{ close, titleId, titleClass }">
        <div class="my-header">
          <h4 :id="titleId" :class="titleClass">{{ dialogTitle }}</h4>
          <el-icon class="el-icon--left" @click="close">
            <CircleCloseFilled />
          </el-icon>
        </div>
      </template>
      <div>
        <el-form
          ref="ruleFormRef"
          :model="ruleForm"
          :rules="rules"
          label-width="120px"
          class="demo-ruleForm"
          :size="formSize"
          status-icon
        >
          <el-form-item label="标题" prop="title">
            <el-col :span="20">
              <el-input v-model="ruleForm.title" />
            </el-col>
          </el-form-item>
          <el-form-item label="菜单路径" prop="path">
            <el-col :span="20">
              <el-input v-model="ruleForm.path" />
            </el-col>
          </el-form-item>
          <el-form-item label="父组件名" prop="parentKey">
            <el-col :span="20">
              <el-input v-model="ruleForm.parentKey" />
            </el-col>
          </el-form-item>
          <el-form-item label="组件名" prop="key">
            <el-col :span="20">
              <el-input v-model="ruleForm.key" />
            </el-col>
          </el-form-item>
          <el-form-item label="组件路径" prop="component">
            <el-col :span="20">
              <el-input v-model="ruleForm.component" />
            </el-col>
          </el-form-item>
          <el-form-item label="排序" prop="rank">
            <el-col :span="20">
              <el-input v-model="ruleForm.rank" />
            </el-col>
          </el-form-item>
          <el-form-item label="选择图标" prop="icon">
            <el-col :span="20">
              <el-select v-model="ruleForm.icon" placeholder="Select">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                >
                  <div class="icon-box">
                    <div class="sub-menu-icon">
                      <component :is="useRenderIcon(toRaw(item.label))" />
                    </div>
                    <span
                      style="
                        float: right;
                        color: var(--el-text-color-secondary);
                        font-size: 13px;
                      "
                      >{{ item.value }}</span
                    >
                  </div>
                </el-option>
              </el-select>
            </el-col>
          </el-form-item>
        </el-form>
      </div>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="close">取消</el-button>
          <el-button type="primary" @click="resetForm(ruleFormRef)">
            重置
          </el-button>
          <el-button type="primary" @click="submitForm(ruleFormRef)">
            确定
          </el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>
<style lang="scss" scope>
.my-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
