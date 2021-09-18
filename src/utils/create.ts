/* eslint-disable import/prefer-default-export */
import { GeneratorTypes, GeneratorType } from '@/type/index';

const defaults = new Map<GeneratorType, Object>();
defaults.set(GeneratorTypes['text-input'], {
  textarea: false,
  key: '',
  label: '文本',
  width: '',
  hidden: false,
  placeholder: '你好1 ',
  defaultValue: '',
  customClass: '',
  required: true,
});
const inputOpt = defaults.get(GeneratorTypes['text-input']);
defaults.set(GeneratorTypes.textarea, {
  ...inputOpt as object,
  textarea: true,
});
defaults.set(GeneratorTypes['html-code'], {
  key: '',
  label: 'html 块',
  hidden: false,
  customClass: '',
  htmlCode: '<span style="color:red;">111</span>',
});

export function createDefaultOptions(handleKey: GeneratorType) {
  const t = defaults.get(handleKey);
  if (t) {
    return JSON.parse(JSON.stringify(t));
  }
  return null;
}
