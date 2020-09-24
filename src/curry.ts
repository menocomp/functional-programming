import { __ } from "./placeholder";
import { Curry } from "./curry.types";

const curry: Curry = (fn: Function) => {
  const readMoreParams = (currentArgs: any[]) => (...newArgs: any[]) => {
    newArgs.forEach((arg, i) => {
      if (arg !== __ && currentArgs.find((arg) => arg === __)) {
        currentArgs.splice(
          currentArgs.findIndex((arg) => arg === __),
          1,
          arg
        );
      } else if (currentArgs.length < fn.length) {
        currentArgs.push(arg);
      }
    });

    if (currentArgs.filter((arg) => arg !== __).length === fn.length) {
      const result = fn(...currentArgs);
      currentArgs = [];
      return result;
    }
    return readMoreParams(currentArgs);
  };

  return readMoreParams([]);
};

export { curry };
