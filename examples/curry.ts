import { curry } from "../src";

const Add = (x: number, y: number) => x + y;

const curriedAdd = curry(Add);

console.log(curriedAdd(1, 5));
console.log(curriedAdd(1)(5));
