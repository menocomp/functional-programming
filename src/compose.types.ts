import { ArityFn, StringLiterals, PreviousNumber, NextNumber, String2Number, Number2String, PickLastInTuple } from "./helpers.types";

type ValidChain<T extends ArityFn[]> = {
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

type Compose = <T extends ArityFn[]>(...fns: ValidChain<T>) => (p: FirstFnParameterType<T>) => LastFnReturnType<T>;

export { Compose }