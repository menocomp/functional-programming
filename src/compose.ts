import { Compose } from "./compose.types";

const compose: Compose =
  (...fns: any[]) =>
  (...x: any[]) =>
    fns.reduceRight((acc: any, cur: any, index: number) =>
      index === 1 ? cur(acc(...x)) : cur(acc)
    );

export { compose };
