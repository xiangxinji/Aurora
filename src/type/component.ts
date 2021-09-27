export interface BaseOptions {
  key: string;
  label: string;
  required: boolean;
  width: string | number;
  hidden: boolean;
  hiddenLabel: boolean,
  customClass: string;
  labelWidth: string
}

export interface TextOptions extends BaseOptions {
  placeholder: string;
  defaultValue: string;
  textarea: boolean;
}

export interface HTMLCodeOptions extends Omit<BaseOptions, 'required'> {
  htmlCode: string;
}

export interface SwitchOptions extends BaseOptions {
  activeColor ?: string;
  inactiveColor ?: string;
  activeText ?: string;
  inactiveText ?: string;
  activeValue ?: boolean | string | number;
  inactiveValue ?: boolean | string | number;
  defaultValue ?: boolean | string | number;
}
