import { ArityFn, DropFirstInTuple } from './helpers.types'

type currified<T extends any[], R extends any> = {
  [K in keyof T]: Recursive<T, R>
};

type Recursive<T extends any[], R extends any> =     
  "0" extends keyof DropFirstInTuple<T> ?             
      (x: T[0]) => Recursive<DropFirstInTuple<T>, R>                
      : (x: T[0]) => R


export type Curry = <A extends ArityFn>(fn: A) => currified<Parameters<A>, ReturnType<A>>[0];