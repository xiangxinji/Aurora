// eslint-disable-next-line import/prefer-default-export
export enum GeneratorTypes {
  'text-input' = 'text-input',
  'textarea' = 'textarea',
  'html-code' = 'html-code',
  'grid-block' = 'grid-block'
}

export type GeneratorType = keyof typeof GeneratorTypes
