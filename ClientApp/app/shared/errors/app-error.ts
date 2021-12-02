export class  AppError {
  constructor(public originalError?: any) {}

  public getErrorMessage(): any {
    if ( this.originalError ) {
      return this.originalError.error.message;
    }
  }

  public getErrorListMessage(): any {
    if ( this.originalError ) {
      return this.originalError.error.errors;
    }
  }
}
