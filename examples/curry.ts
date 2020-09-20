import { curry } from '../src';

const AddSpace = (x: string, y: number, z: boolean) => "";

const curriedAdd = curry(AddSpace);

console.log(curriedAdd("Hello")(5)(true));

