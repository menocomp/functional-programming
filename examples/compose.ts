import { compose } from "../src";

interface IPerson {
  name: string;
}

const person: IPerson = {
  name: "Mina",
};

const getName = (p: IPerson) => p.name;
const getLength = (str: string) => str.length;
const isEven = (num: number) => num % 2 === 0;

const myComposedFn = compose(isEven, getLength, getName);

console.log(myComposedFn(person));
