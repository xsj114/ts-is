export default function isUndefined(arg) {
    if (!arguments.length) {
        new TypeError('is.isUndefined should have at least one argument');
    }
    return ({}).toString.call(arg) === '[object Undefined]';
}
