export interface BaseOptions {
  key: string;
  label: string;
  required: boolean;
  width: string | number;
  hidden: boolean;
  hiddenLabel : boolean,
  customClass: string;
  labelWidth : string
}

export interface TextOptions extends BaseOptions {
  placeholder: string;
  defaultValue: string;
  textarea: false;
}

export interface HTMLCodeOptions extends BaseOptions {
  htmlCode: string;
}
