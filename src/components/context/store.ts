/* eslint-disable @typescript-eslint/ban-types */
import { reactive } from 'vue';
import Event from '@/utils/event';

export type FormOptions = {
  width: string,
  labelPosition: 'right' | 'left' | 'top',
  labelWidth: string,
  labelSuffix: string,
  size: 'small' | 'mini' | 'middle',
  customClass: string
  styleText: string
}

export default class Store<T extends { id: number | string }> extends Event {
  public data: Array<T> = reactive([]);

  private nextId = 0;

  public current ?: T;

  public formOptions = reactive({
    labelPosition: 'right',
    labelWidth: '100px',
    labelSuffix: ':',
    size: 'small',
    customClass: '',
    styleText: '',
    width: '100%',
  });

  public set(item: T | Array<T>, appendIndex ?: number) {
    const r: T[] = Array.isArray(item) ? item : [item];
    r.forEach((i) => {
      i.id = this.nextId++;
      if (appendIndex) {
        this.data.splice(appendIndex, 0, i);
      } else {
        this.data.push(i);
      }
    });
  }

  public append(item: T, parentNodes: any) {
    const data = parentNodes || this.data;
    if (!Array.isArray(data)) return;
    item.id = this.nextId++;
    data.push(item);
  }

  public remove(id: string | number, parentNodes ?: any) {
    const data: any = parentNodes || this.data;
    const i = data.findIndex((item: any) => item.id === id);
    if (!Array.isArray(data)) return;
    if (i > -1) {
      if (data[i] === this.current) {
        this.setCurrent();
      }
      data.splice(i, 1);
    }
  }

  public get(i: number) {
    return this.data[i];
  }

  public setCurrent(t ?: T) {
    this.current = t;
    this.emit('current-change', this.current);
  }

  public indexOf(id: string | number) {
    return this.data.findIndex((i) => i.id === id);
  }
}
