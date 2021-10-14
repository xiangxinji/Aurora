import { FormOptions } from '@/type';

export function resolveFormOptionsBind(formOptions: FormOptions) {
  return {
    ...formOptions,
    style: `width:${formOptions.width};${formOptions.styleText}`,
    class: formOptions.customClass,
  };
}
