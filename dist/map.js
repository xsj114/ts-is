export default (arg) => {
    return ({}).toString.call(arg) === '[object Map]';
};
