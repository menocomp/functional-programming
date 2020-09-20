export type StringLiterals = ["0", "1", "2", "3", "4", "5", "6", "7"];
type NumberLiterals = [0, 1, 2, 3, 4, 5, 6, 7];

export type String2Number<T extends StringLiterals[any]> = NumberLiterals[T];
export type Number2String<T extends number> = StringLiterals[T];
export type PreviousNumber<T extends number> = PrependInTuple<never, NumberLiterals>[T];
export type NextNumber<T extends number> = DropFirstInTuple<NumberLiterals>[T];

export type PickLastInTuple<T extends any[]> = T extends [...rest: infer U, argn: infer L ] ? L : never;
export type DropFirstInTuple<T extends any[]> = T extends [arg1: any, ...rest: infer U] ? U : never;
export type PrependInTuple<P, T extends any[]> = T extends [...rest: infer R] ? [P, ...R] : [];

export type ArityFn = (...arg: any) => any;