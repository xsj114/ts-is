import isAsyncFunction from './async-function';
export default (arg) => {
    return ({}).toString.call(arg) === '[object Function]' || isAsyncFunction(arg);
};
