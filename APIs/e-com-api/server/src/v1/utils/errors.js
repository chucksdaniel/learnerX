const createError = (status, message) => {
	const err = new Error();
	err.status = status;
	err.message = message;
	return err;
};

module.exports = createError;

/* eslint-disable max-classes-per-file */
class AppError extends Error {
	constructor(message, name = "Custom Error", statusCode = 400) {
		super(message);
		this.statusCode = statusCode;
		this.name = name;
	}

	toJSON() {
		return {
			code: this.statusCode,
			status: "error",
			message: this.message,
			data: process.env.NODE_ENV !== "production" ? this.stack : null,
		};
	}
}

class RouteNotFoundError extends AppError {
	constructor() {
		super("Route not found.", "Check Route Error", 404);
	}
}

class UnauthorizedError extends AppError {
	constructor(message = "Unauthorized route.") {
		super(message, "Unauthorized Error", 401);
	}
}

class ForbiddenError extends AppError {
	constructor(message = "This is forbidden.") {
		super(message, "Forbidden Error", 403);
	}
}

class ValidationError extends AppError {
	constructor(message) {
		super(message, "Validation Error", 422);
	}
}

class DuplicateError extends AppError {
	constructor(modelName) {
		super(`${modelName} document already exist.`, "Duplicate Error", 409);
	}
}

class DocumentNotFoundError extends AppError {
	constructor(modelName) {
		super(
			`${modelName} document not found.`,
			"Document Not Found Error",
			404
		);
	}
}
module.exports = {
	AppError,
	RouteNotFoundError,
	ValidationError,
	DuplicateError,
	ForbiddenError,
	UnauthorizedError,
	DocumentNotFoundError,
};
