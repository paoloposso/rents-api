const errorType = {
	InvalidParameters: "InvalidParameters",
}

class DomainError extends Error {
    constructor(message, type) {
        super(message);
        this.name = this.constructor.name;
        this.domainErrorType = type;
    }
}

module.exports = { errorType, DomainError };
