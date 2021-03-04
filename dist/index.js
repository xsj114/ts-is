import isArguments from './arguments';
import isArray from './array';
import isAsyncFunction from './async-function';
import isBoolean from './boolean';
import isError from './error';
import isFormdata from './formdata';
import isFunction from './function';
import isIterable from './iterable';
import isMap from './map';
import isNull from './null';
import isNumber from './number';
import isObject from './object';
import isPromise from './promise';
import isRegexp from './regexp';
import isSet from './set';
import isString from './string';
import isSymbol from './symbol';
import isUndefined from './undefined';
import isWeakMap from './weak-map';
import isWeakSet from './weak-set';
import isWindow from './window';
export { isArguments, isArray, isAsyncFunction, isBoolean, isError, isFormdata, isFunction, isIterable, isMap, isNull, isNumber, isObject, isPromise, isRegexp, isSet, isString, isSymbol, isUndefined, isWeakMap, isWeakSet, isWindow };
const is = {
    arguments: isArguments,
    array: isArray,
    asyncFunction: isAsyncFunction,
    boolean: isBoolean,
    error: isError,
    formdata: isFormdata,
    function: isFunction,
    iterable: isIterable,
    map: isMap,
    null: isNull,
    number: isNumber,
    object: isObject,
    promise: isPromise,
    regexp: isRegexp,
    set: isSet,
    string: isString,
    symbol: isSymbol,
    undefined: isUndefined,
    weakmap: isWeakMap,
    weakset: isWeakSet,
    window: isWindow
};
export default is;
