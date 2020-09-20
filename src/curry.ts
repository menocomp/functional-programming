import { __ } from "./placeholder";
import { Curry } from './curry.types'

interface ICurryContainer {
  [K: string]: any;
  args: any[];
}

const curry: Curry = (fn: Function) => {
  const container: ICurryContainer = {
    args: [],
  };

  for (let index = 0; index <= fn.length - 1; index++) {
    container[`fn${index + 1}`] = (...args: any[]) => {
      args.forEach((arg, i) => {
        if (i === 0 && container.args.find((arg) => arg === __)) {
          container.args.splice(
            container.args.findIndex((arg) => arg === __),
            1,
            arg
          );
        } else {
          container.args.push(arg);
        }
      });

      if (container.args.filter((arg) => arg !== __).length === fn.length) {
        return fn(...container.args);
      } else {
        return container[`fn${index}`];
      }
    };
  }

  return container[`fn${fn.length}`];
};

export { curry };
