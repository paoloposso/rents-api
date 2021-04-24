module.exports.getErrorResponse = (message, error, stack) => {
    let ret = {
        message,
        error,
        stack
    }
    return ret;
}