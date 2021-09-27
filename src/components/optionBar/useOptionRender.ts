import {
  reactive, defineProps, ref, watch, defineEmits, PropType,
} from 'vue';
import { BaseOptions } from '@/type/component';

export default function useOptionBarRenderer(props: any, emit: Function) {
  const data = ref(null);
  watch(() => props.options, (v) => {
    data.value = JSON.parse(JSON.stringify(v));
  }, { immediate: true });

  function set(key: string, data: any) {
    emit('change-field', key, data);
  }

  const context = {
    set,
  };

  const result: [typeof data, typeof context] = [data, context];
  return result;
}

export const CommonProps = {
  options: {
    type: Object as PropType<BaseOptions>,
  },
};
