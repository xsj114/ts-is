"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isWindow = exports.isWeakSet = exports.isWeakMap = exports.isUndefined = exports.isSymbol = exports.isString = exports.isSet = exports.isRegexp = exports.isPromise = exports.isObject = exports.isNumber = exports.isNull = exports.isMap = exports.isIterable = exports.isFunction = exports.isFormdata = exports.isError = exports.isBoolean = exports.isAsyncFunction = exports.isArray = exports.isArguments = void 0;
const arguments_1 = require("./arguments");
exports.isArguments = arguments_1.default;
const array_1 = require("./array");
exports.isArray = array_1.default;
const async_function_1 = require("./async-function");
exports.isAsyncFunction = async_function_1.default;
const boolean_1 = require("./boolean");
exports.isBoolean = boolean_1.default;
const error_1 = require("./error");
exports.isError = error_1.default;
const formdata_1 = require("./formdata");
exports.isFormdata = formdata_1.default;
const function_1 = require("./function");
exports.isFunction = function_1.default;
const iterable_1 = require("./iterable");
exports.isIterable = iterable_1.default;
const map_1 = require("./map");
exports.isMap = map_1.default;
const null_1 = require("./null");
exports.isNull = null_1.default;
const number_1 = require("./number");
exports.isNumber = number_1.default;
const object_1 = require("./object");
exports.isObject = object_1.default;
const promise_1 = require("./promise");
exports.isPromise = promise_1.default;
const regexp_1 = require("./regexp");
exports.isRegexp = regexp_1.default;
const set_1 = require("./set");
exports.isSet = set_1.default;
const string_1 = require("./string");
exports.isString = string_1.default;
const symbol_1 = require("./symbol");
exports.isSymbol = symbol_1.default;
const undefined_1 = require("./undefined");
exports.isUndefined = undefined_1.default;
const weak_map_1 = require("./weak-map");
exports.isWeakMap = weak_map_1.default;
const weak_set_1 = require("./weak-set");
exports.isWeakSet = weak_set_1.default;
const window_1 = require("./window");
exports.isWindow = window_1.default;
const is = {
    arguments: arguments_1.default,
    array: array_1.default,
    asyncFunction: async_function_1.default,
    boolean: boolean_1.default,
    error: error_1.default,
    formdata: formdata_1.default,
    function: function_1.default,
    iterable: iterable_1.default,
    map: map_1.default,
    null: null_1.default,
    number: number_1.default,
    object: object_1.default,
    promise: promise_1.default,
    regexp: regexp_1.default,
    set: set_1.default,
    string: string_1.default,
    symbol: symbol_1.default,
    undefined: undefined_1.default,
    weakmap: weak_map_1.default,
    weakset: weak_set_1.default,
    window: window_1.default
};
exports.default = is;
