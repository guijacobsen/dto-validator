import 'reflect-metadata';
import { plainToClass } from "class-transformer";
import { validateSync } from "class-validator";


export abstract class DtoBase<T> {
    constructor(data?: T) {
        if (data) {
            Object.assign(this, plainToClass(this.constructor as any, data));
        }
    }

    validate(): boolean {
        const errors = validateSync(this);
        return errors.length == 0;
    }

    validationErrors(): string[] {
        const errors = validateSync(this);
        return errors.map(error => error.property);
    }
}