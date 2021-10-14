// eslint-disable-next-line import/prefer-default-export
import { BaseOptions } from '@/type/component';
import { LayoutOptions } from '@/type/layout';

export enum GeneratorTypes {
  'text-input' = 'text-input',
  'textarea' = 'textarea',
  'html-code' = 'html-code',
  'grid-block' = 'grid-block',
  'switch' = 'switch',
}

export type GeneratorType = keyof typeof GeneratorTypes

export type FormOptions = {
  width: string,
  labelPosition: 'right' | 'left' | 'top',
  labelWidth: string,
  labelSuffix: string,
  size: 'small' | 'mini' | 'middle',
  customClass: string
  styleText: string
}

export type RenderItem = {
  type: GeneratorType,
  id: number,
  options: LayoutOptions | BaseOptions
}

export type RenderConfig = {
  version: string
  platform: 'web' | 'mobile'
  formOptions: FormOptions,
  data: Array<BaseOptions | LayoutOptions>
}
