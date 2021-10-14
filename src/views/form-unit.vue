<template>
  <div class="form-unit">
    <h2 class="title">
      设计单元 [所属项目 : 测试项目1]
    </h2>

    <div class="container">
      <el-row :gutter="20">
        <el-col :span="6" v-for="i in 10" :key="i">
          <div class="form-unit-item" @click="onDesign(i)">
            <div class="title">单元名称</div>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';

const router = useRouter();

function onDesign(i: number) {
  router.push({ path: `/design/${i}` });
}
</script>
<style lang="scss" scoped>
.form-unit {
  width: 1200px;
  margin: 0 auto;
  min-height: 100vh;
}

h2.title {
  padding: 20px 0;
}

.form-unit-item {
  height: 190px;
  border: solid 1px #efefef;
  margin-bottom: 20px;
  border-radius: 4px;
  background-color: white;
  cursor: pointer;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform .3s ease-in-out;

  &:hover {
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    transform: translateY(-3px);
  }

  .title {
    font-size: 18px;
  }
}
</style>
