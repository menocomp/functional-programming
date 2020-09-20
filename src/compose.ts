import { Compose } from './compose.types';

const compose: Compose = (...fns) => (x) => fns.reduceRight((acc: any, cur: any) => cur(acc), x);

export { compose };
