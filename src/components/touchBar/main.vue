<template>
  <div class="touch-bar">
    <div class="container" ref="touchContainer">
      <div class="touch-group" v-for="group in settings" :key="group.label">
        <div class="title">{{ group.title }}</div>
        <div class="touch-group-children">
          <draggable :list="group.children" :sort="false"
                     :group="{ name : 'touch' , pull : 'clone' , put : false }" item-key="label"
                     :clone="onClone"
                     style="display: flex;flex-wrap: wrap;justify-content: space-between;">
            <template #item="{ element }">
              <div class="touch-group-item" :data-handler-key="element.handleKey">
                <div class="icon">
                  <span class="el-icon-sunny"></span>
                </div>
                <div class="label">{{ element.label }}</div>
              </div>
            </template>
          </draggable>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { createDefaultOptions } from '@/utils/create';
import { SettingItem } from '@/type/touch';
import { touch } from '@/api/system';

let id = 0;

function onClone(item: SettingItem) {
  const { handleKey } = item;
  if (handleKey) {
    const options = createDefaultOptions(handleKey);
    const result = {
      type: handleKey === 'textarea' ? 'text-input' : handleKey,
      id: id++,
      options,
    };
    console.log(result);
    return result;
  }
  return false;
}

const settings = ref([]);

touch()
  .then((res) => {
    settings.value = res;
  });

</script>
<style lang="scss" scoped>
.touch-bar {
  height: 100%;
  background-color: white;
  border-right: solid 1px #efefef;
}

.touch-group {
  .title {
    background-color: #409EFF;
    color: white;
    padding: 8px 10px;
  }

  .touch-group-children {
    padding: 8px 10px;
  }

  .touch-group-item {
    display: flex;
    padding: 10px 8px;
    background-color: #eef5fe;
    color: #409EFF;
    font-size: 12px;
    border-radius: 3px;
    cursor: pointer;
    margin-bottom: 10px;
    user-select: none;
    width: 48%;
    white-space: nowrap;
    box-sizing: border-box;

    .label {
      margin-left: 8px;
    }

    .icon {
      font-size: 13px;
    }
  }
}
</style>
