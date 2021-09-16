// eslint-disable-next-line max-classes-per-file
export default class Event {
  private events = new Map<string, Array<Function>>();

  public on(eventName: string, handler: Function) {
    const handlers = this.events.get(eventName) || [];
    const i = handlers.indexOf(handler);
    if (i === -1) {
      handlers.push(handler);
    }
    this.events.set(eventName, handlers);
  }

  public emit(eventName: string, ...args: Array<any>) {
    const handlers = this.events.get(eventName);
    if (!handlers) return;
    handlers.forEach((handler) => {
      // eslint-disable-next-line prefer-spread
      handler.apply(null, args);
    });
  }
}
