export default class Store<T> {
  private data: Array<T> = [];

  public set(item: T) {
    this.data.push(item);
  }

  public remove(item: T) {
    const i = this.data.indexOf(item);
    if (i > -1) this.data.splice(i, 1);
  }

  public get(i: number) {
    return this.data[i];
  }

  public getData() {
    return this.data;
  }
}
