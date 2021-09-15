export function createUnit(unit: string) {
  return function (str: string | number) {
    return typeof str === 'string' ? str : str + unit;
  };
}

// eslint-disable-next-line @typescript-eslint/ban-types
export function mergeClass(...args: Array<(string | Array<string> | object)>): any {
  const result: any = {};
  args.forEach((name: any) => {
    if (typeof name === 'string' || Array.isArray(name)) {
      (typeof name === 'string' ? name.split(' ') : name).forEach((i) => {
        result[i] = true;
      });
    } else {
      Object.keys(name)
        .forEach((k) => {
          if (name[k]) result[k] = true;
        });
    }
  });
  return result;
}
