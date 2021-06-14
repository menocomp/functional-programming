import { compose } from "../src";

interface IPerson {
  name: string;
  address: string;
}

const person: IPerson = {
  name: "Mina",
  address: "xyz",
};

const getProp = (person: IPerson, prop: keyof IPerson) => person[prop];
const getName = (person: IPerson) => person.name;
const getLength = (str: string) => str.length;
const isEven = (num: number) => num % 2 === 0;

const myComposedUnaryFn = compose(isEven, getLength, getName);

console.log(myComposedUnaryFn(person));

const myComposedArityFn = compose(isEven, getLength, getProp);

console.log(myComposedArityFn(person, "name"));
