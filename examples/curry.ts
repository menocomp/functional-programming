import { __, curry } from '../src';

const Add = (x: number, y: number) => x + y;

const curriedAdd = curry(Add);

console.log(curriedAdd(1, 5, __, 5, 6));
console.log(curriedAdd(1)(5));
console.log(curriedAdd(__)(1, 5));
console.log(curriedAdd(__, 1, 5, __));
console.log(curriedAdd(__)(__)(1, __)(5));
