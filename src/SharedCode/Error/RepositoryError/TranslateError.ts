export class TranslateRepositoryError extends Error{
    constructor (public message: string){
        super(message);
        this.name = "TranslateError"
    };
}