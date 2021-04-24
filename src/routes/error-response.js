const { DomainError, errorType } = require("../core/custom-error");

module.exports.getErrorResponse = (res, message, error, stack) => {
    const ret = {
        message,
        error,
        stack
    }

    res.status(getHttpCode(error)).send(ret);
}

function getHttpCode(err) {
    switch (err.domainErrorType) {
        case errorType.InvalidParameters:
            return 400;
        default:
            return 500;
    }
}