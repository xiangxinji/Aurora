/* eslint-disable import/prefer-default-export */
import { GeneratorType } from '@/type/index';
import {
  HTMLCodeOptions, SwitchOptions, TextOptions, SelectOptions,
} from '@/type/component';
import { GridLayoutOptions, LayoutOptions } from '@/type/layout';

const commonOptions = (label: string) => ({
  key: '',
  label,
  hidden: false,
  width: '',
  customClass: '',
  required: false,
  hiddenLabel: false,
  labelWidth: '',
});

type DefaultOptions = {
  'text-input': TextOptions,
  textarea: TextOptions,
  'html-code': HTMLCodeOptions
  switch: Partial<SwitchOptions>,
  'grid-block': GridLayoutOptions,
  select: SelectOptions,
}

const defaults: DefaultOptions = {
  'text-input': {
    textarea: false,
    placeholder: '文本框',
    defaultValue: '',
    ...commonOptions('文本框'),
  },
  textarea: {
    textarea: true,
    placeholder: '文本域',
    defaultValue: '',
    ...commonOptions('文本域'),
  },
  'html-code': {
    htmlCode: '<span style="color:red;">111</span>',
    ...commonOptions('html 块'),
  },
  switch: {
    ...commonOptions('开关'),
  },
  'grid-block': {
    key: '',
    hidden: false,
    customClass: '',
    columns: [{
      span: 24,
      children: [],
    }],
    layout: true,
  },
  select: {
    labelKey: 'label',
    valueKey: 'value',
    multiple: false,
    data: [
      {
        label: '测试数据1',
        value: 0,
      },
      {
        label: '测试数据2',
        value: 1,
      },
    ],
    ...commonOptions('下拉选择'),
    defaultValue: '',
  },
};

export function createDefaultOptions(handleKey: GeneratorType) {
  const t = defaults[handleKey];
  if (t) {
    return {
      ...JSON.parse(JSON.stringify(t)),
      key: Math.random(),
    };
  }
  return null;
}
