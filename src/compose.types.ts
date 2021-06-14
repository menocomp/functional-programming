import {
  UnaryFn,
  ArityFn,
  StringLiterals,
  PreviousNumber,
  NextNumber,
  String2Number,
  Number2String,
} from "./helpers.types";

type ValidChain<T extends [...UnaryFn[], ArityFn]> = {
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

type FirstFnParametersType<T extends any[]> = Parameters<
  T[PreviousNumber<T["length"]>]
>;
type LastFnReturnType<T extends any[]> = ReturnType<T[0]>;

type Compose = <T extends [...UnaryFn[], ArityFn]>(
  ...fns: ValidChain<T>
) => (...p: FirstFnParametersType<T>) => LastFnReturnType<T>;

export { Compose };
