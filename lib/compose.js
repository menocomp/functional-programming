"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.compose = void 0;
const compose = (...fns) => (x) => fns.reduceRight((acc, cur) => cur(acc), x);
exports.compose = compose;
