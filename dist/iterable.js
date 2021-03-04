import isFunction from './function';
export default (arg) => {
    return isFunction(arg[Symbol.iterator]);
};
