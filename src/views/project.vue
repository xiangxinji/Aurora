<template>
  <div class="projects">
    <h2 class="title">
      我的项目
    </h2>
    <div class="container">
      <div class="project-item" @click="handleActiveForm(i)" :key="i" v-for="i in 10"
           :style="{ color : getColor(i)}">
        <span class="prefix" :style="{ backgroundColor : getColor(i)}">A</span>
        <div>
          <div class="project-title">
            <span> Aurora  </span>
          </div>
          <div class="description">
            <span>这是一个测试项目....</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';

const colors = ['#409EFF', '#67C23A', '#E6A23C', '#F56C6C', '#909399'];
const router = useRouter();

function getColor(index: number) {
  return colors[index % colors.length];
}

function handleActiveForm(i: number) {
  router.push({ path: `/form-unit/${i}` });
}
</script>
<style lang="scss" scoped>
::v-deep(body) {
  background-color: #efefef !important;
}

.projects {
  width: 1200px;
  margin: 0 auto;
  min-height: 100vh;
}

h2.title {
  padding: 20px 0;
}

.project-item {
  height: 70px;
  border-radius: 4px;
  cursor: pointer;
  display: flex;
  align-items: center;
  padding: 0 15px;
  font-size: 16px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
  background-color:white;

  .prefix {
    width: 40px;
    height: 40px;
    display: inline-block;
    color: white;
    border-radius: 50%;
    text-align: center;
    line-height: 40px;
    margin-right: 18px;
  }

  .description {
    font-size: 12px;
    color: #303133;
  }

  &:hover {
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  }
}

.project-item:not(:last-child) {
  margin-bottom: 18px;
}
</style>
