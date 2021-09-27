/* eslint-disable import/prefer-default-export */
import { GeneratorTypes, GeneratorType } from '@/type/index';
import { BaseOptions, HTMLCodeOptions, SwitchOptions, TextOptions } from '@/type/component';
import { GridLayoutOptions, LayoutOptions } from '@/type/layout';

const commonOptions = (label: string) => ({
  key: '',
  label,
  hidden: false,
  width: '',
  customClass: '',
  required: false,
  hiddenLabel: false,
  labelWidth: ''
});

type DefaultOptions = {
  'text-input': TextOptions,
  textarea: TextOptions,
  'html-code': HTMLCodeOptions
  switch: SwitchOptions,
  'grid-block': GridLayoutOptions
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
    ...commonOptions('html 块')
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
  }
};

export function createDefaultOptions(handleKey: GeneratorType) {
  const t = defaults[handleKey];
  if (t) {
    return {
      ...JSON.parse(JSON.stringify(t)) ,
      key : Math.random()
    };
  }
  return null;
}
