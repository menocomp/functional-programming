"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.__ = exports.compose = exports.curry = void 0;
var curry_1 = require("./curry");
Object.defineProperty(exports, "curry", { enumerable: true, get: function () { return curry_1.curry; } });
var compose_1 = require("./compose");
Object.defineProperty(exports, "compose", { enumerable: true, get: function () { return compose_1.compose; } });
var placeholder_1 = require("./placeholder");
Object.defineProperty(exports, "__", { enumerable: true, get: function () { return placeholder_1.__; } });
