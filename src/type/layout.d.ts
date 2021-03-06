import { BaseOptions } from './component';

export interface LayoutOptions {
  key: string,
  hidden: boolean,
  customClass: string,
  layout: true,
}

export interface GridLayoutOptions extends LayoutOptions {
  columns: Array<{
    span: number,
    children: BaseOptions []
  }>;
}
