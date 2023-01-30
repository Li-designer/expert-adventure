<template>
  <div>
    <el-row style="display: flex; justify-content: space-between">
      <el-col :span="16">
        <el-table :data="tableData" stripe style="width: 100%">
          <el-table-column prop="date" label="Date" width="180" />
          <el-table-column prop="name" label="Name" width="180" />
          <el-table-column prop="address" label="Address" />
        </el-table>
      </el-col>
      <el-col :span="7">
        <el-input v-model="filterText" placeholder="Filter keyword" />

        <el-tree
          ref="treeRef"
          class="filter-tree"
          :data="data"
          :props="defaultProps"
          default-expand-all
          :filter-node-method="filterNode"
        />
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts" setup>
import { ref, watch } from "vue";
import { ElTree } from "element-plus";

defineOptions({
  name: "permissionRole"
});

const tableData = [
  {
    date: "2016-05-03",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles"
  },
  {
    date: "2016-05-02",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles"
  },
  {
    date: "2016-05-04",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles"
  },
  {
    date: "2016-05-01",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles"
  }
];

interface Tree {
  id: number;
  label: string;
  children?: Tree[];
}

const filterText = ref("");
const treeRef = ref<InstanceType<typeof ElTree>>();

const defaultProps = {
  children: "children",
  label: "label"
};

watch(filterText, val => {
  treeRef.value!.filter(val);
});

const filterNode = (value: string, data: Tree) => {
  if (!value) return true;
  return data.label.includes(value);
};

const data: Tree[] = [
  {
    id: 1,
    label: "Level one 1",
    children: [
      {
        id: 4,
        label: "Level two 1-1",
        children: [
          {
            id: 9,
            label: "Level three 1-1-1"
          },
          {
            id: 10,
            label: "Level three 1-1-2"
          }
        ]
      }
    ]
  },
  {
    id: 2,
    label: "Level one 2",
    children: [
      {
        id: 5,
        label: "Level two 2-1"
      },
      {
        id: 6,
        label: "Level two 2-2"
      }
    ]
  },
  {
    id: 3,
    label: "Level one 3",
    children: [
      {
        id: 7,
        label: "Level two 3-1"
      },
      {
        id: 8,
        label: "Level two 3-2"
      }
    ]
  }
];
</script>

<style lang="scss" scoped></style>
