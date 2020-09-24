import { __ } from "./placeholder";
import { Curry } from "./curry.types";

interface ICurryContainer {
  args: any[];
}

const curry = (fn: Function) => {
  const container: ICurryContainer = {
    args: [],
  };

  const readMoreParams = (...args: any[]) => {
    args.forEach((arg, i) => {
      if (arg !== __ && container.args.find((arg) => arg === __)) {
        container.args.splice(
          container.args.findIndex((arg) => arg === __),
          1,
          arg
        );
      } else if (container.args.length < fn.length) {
        container.args.push(arg);
      }
    });

    if (container.args.filter((arg) => arg !== __).length === fn.length) {
      const result = fn(...container.args);
      container.args = [];
      return result;
    }
    return readMoreParams;
  };

  return readMoreParams;
};

export { curry };
