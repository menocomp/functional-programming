import { compose } from "../src";

interface IPerson {
  name: string;
  address: string
  age: number;
  isMale: boolean;
}

const person: IPerson = {
  name: "Mina",
  address: "xyz",
  age: 30,
  isMale: true,
};

type PropsWithType<T, U> = keyof { [P in keyof T as T[P] extends U ? P : never]: T[P] };

const getProp = <T extends IPerson, U extends keyof T & PropsWithType<T, string>>(person: T, prop: U): T[U] => person[prop];
const getName = (person: IPerson) => person.name;
const getLength = (str: string) => str.length;
const isEven = (num: number) => num % 2 === 0;

const myComposedUnaryFn = compose(isEven, getLength, getName);

console.log(myComposedUnaryFn(person));

const myComposedArityFn = compose(isEven, getLength, getProp);

console.log(myComposedArityFn(person, "name"));
