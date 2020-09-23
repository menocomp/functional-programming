import { curry } from '../src';

const AddSpace = (x: string, y: number, z: boolean) => `${x} ${y} ${z}`;

const curriedAdd = curry(AddSpace);

console.log(curriedAdd("Hello")(5)(true));
console.log(curriedAdd("Hello", 5, true));

