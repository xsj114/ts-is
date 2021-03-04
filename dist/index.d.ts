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
interface Is {
    [key: string]: (arg?: unknown, ...rest: unknown[]) => boolean;
}
declare const is: Is;
export default is;
