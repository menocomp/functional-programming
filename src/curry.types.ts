import { ArityFn, DropFirstInTuple, Placeholder } from './helpers.types'

type currified<T extends any[], R extends any> = T["length"] extends 0 ? R : {
  [K in keyof T]: Recursive<T, R>
}[0];

type Recursive<T extends any[], R extends any> =     
  "0" extends keyof DropFirstInTuple<T> ?             
      (x: T[0]) => Recursive<DropFirstInTuple<T>, R>                
      : (x: T[0]) => R

type AllOverloads<A extends ArityFn> = {
  (...args: Parameters<A>): ReturnType<A>;
  (x: Parameters<A>[0]): currified<DropFirstInTuple<Parameters<A>>, ReturnType<A>>;
  (x: Placeholder): (y: Parameters<A>[0]) => currified<DropFirstInTuple<Parameters<A>>, ReturnType<A>>
  (x: Placeholder, y: Parameters<A>[0]): currified<DropFirstInTuple<Parameters<A>>, ReturnType<A>>
  (x: Parameters<A>[0], y: Placeholder): currified<DropFirstInTuple<Parameters<A>>, ReturnType<A>>
}

export type Curry = <A extends ArityFn>(fn: A) => AllOverloads<A>;
