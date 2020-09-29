import { __, curry } from "../src";

const Add = (x: number, y: number) => x + y;

const curriedAdd = curry(Add);

console.log(curriedAdd(2)(3));
console.log(curriedAdd(__)(3)(9));
console.log(curriedAdd(1, 5));
console.log(curriedAdd(__, 3)(8));
console.log(curriedAdd(3, __)(4));
