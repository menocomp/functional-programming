type UnaryFn = (...arg: any) => any;

type StringLiterals = ["0", "1", "2", "3", "4"];
type NumberLiterals = [0, 1, 2, 3, 4];

type String2Number<T extends StringLiterals[any]> = NumberLiterals[T];
type Number2String<T extends number> = StringLiterals[T];
type PreviousNumber<T extends number> = PrependInTuple<never, NumberLiterals>[T];
type NextNumber<T extends number> = DropFirstInTuple<NumberLiterals>[T];

type PickLastInTuple<T extends any[]> = T extends [...rest: infer U, argn: infer L ] ? L : never;
type DropFirstInTuple<T extends any[]> = T extends [arg1: any, ...rest: infer U] ? U : never;
type PrependInTuple<P, T extends any[]> = T extends [...rest: infer R] ? [P, ...R] : [];

type ValidChain<T extends UnaryFn[]> = {
  [K in keyof T]: K extends StringLiterals[any]
    ? K extends Number2String<PreviousNumber<T["length"]>>
      ? T[K]
      : NextNumber<String2Number<K>> extends keyof T
      ? (
          i: ReturnType<T[NextNumber<String2Number<K>>]>
        ) => ReturnType<T[String2Number<K>]>
      : T[K]
    : T[K];
};

type FirstFnParameterType<T extends any[]> = Parameters<PickLastInTuple<T>>[any];
type LastFnReturnType<T extends any[]> = ReturnType<T[0]>;

type Compose = <T extends UnaryFn[]>(...fns: ValidChain<T>) => (p: FirstFnParameterType<T>) => LastFnReturnType<T>;

export { Compose }