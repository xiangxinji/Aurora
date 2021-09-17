// eslint-disable-next-line import/prefer-default-export
export enum GeneratorTypes {
  'text-input' = 'text-input',
  'textarea' = 'textarea',
  'html-code' = 'html-code'
}

export type GeneratorType = keyof typeof GeneratorTypes
