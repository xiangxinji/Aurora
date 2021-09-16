/* eslint-disable @typescript-eslint/ban-types */
import { reactive } from 'vue';
import Event from '@/utils/event';

export default class Store<T extends { id: number | string }> extends Event {
  public data: Array<T> = reactive([]);

  private nextId = 0;

  public current?: T;

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

  public remove(id: string | number) {
    const i = this.data.findIndex((item) => item.id === id);
    if (i > -1) {
      if (this.data[i] === this.current) {
        this.setCurrent();
      }
      this.data.splice(i, 1);
    }
  }

  public get(i: number) {
    return this.data[i];
  }

  public setCurrent(t ?: T) {
    if (!t) {
      this.current = undefined;
    } else if (this.data.indexOf(t) === -1) return;
    this.current = t;
    this.emit('current-change', this.current);
  }

  public indexOf(id: string | number) {
    return this.data.findIndex((i) => i.id === id);
  }
}
