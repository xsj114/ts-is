export default (arg) => {
    return ({}).toString.call(arg) === '[object Error]';
};
