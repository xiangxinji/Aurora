import { GeneratorTypes, GeneratorType } from '@/type/index';

// eslint-disable-next-line import/prefer-default-export
export function createDefaultOptions(handleKey: GeneratorType) {
  if (handleKey === GeneratorTypes['text-input'] || handleKey === GeneratorTypes.textarea) {
    return {
      textarea: handleKey === GeneratorTypes.textarea,
      key: '',
      label: '文本',
      width: '',
      hidden: false,
      placeholder: '你好1 ',
      defaultValue: '',
      customClass: '',
      required: true,
    };
  }
  if (handleKey === GeneratorTypes['html-code']) {
    return {
      key: '',
      label: 'html 块',
      hidden: false,
      customClass: '',
      htmlCode: '<span style="color:red;">111</span>',
    };
  }
  return null;
}
