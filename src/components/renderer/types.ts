export interface BaseOptions {
  key: string;
  label: string;
  required: boolean;
  width: string | number;
  hidden: boolean;
  customClass: string;
}

export interface TextOptions extends BaseOptions {
  placeholder: string;
  defaultValue: string;
  textarea : false
}
