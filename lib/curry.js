"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.curry = void 0;
const placeholder_1 = require("./placeholder");
const curry = (fn) => {
    const container = {
        args: [],
    };
    for (let index = 0; index <= fn.length - 1; index++) {
        container[`fn${index + 1}`] = (...args) => {
            args.forEach((arg, i) => {
                if (i === 0 && container.args.find((arg) => arg === placeholder_1.__)) {
                    container.args.splice(container.args.findIndex((arg) => arg === placeholder_1.__), 1, arg);
                }
                else {
                    container.args.push(arg);
                }
            });
            if (container.args.filter((arg) => arg !== placeholder_1.__).length === fn.length) {
                return fn(...container.args);
            }
            else {
                return container[`fn${index}`];
            }
        };
    }
    return container[`fn${fn.length}`];
};
exports.curry = curry;
