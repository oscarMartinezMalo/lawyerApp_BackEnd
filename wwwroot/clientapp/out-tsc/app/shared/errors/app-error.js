export class AppError {
    constructor(originalError) {
        this.originalError = originalError;
    }
    getErrorMessage() {
        if (this.originalError) {
            return this.originalError.error.message;
        }
    }
    getErrorListMessage() {
        if (this.originalError) {
            return this.originalError.error.errors;
        }
    }
}
//# sourceMappingURL=app-error.js.map