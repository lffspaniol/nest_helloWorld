
/** ------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export interface HelloWorld {
    ID: string;
    count?: number;
    Hello: string;
    CreatedAt?: Date;
    UpdatedAt?: Date;
    DeletedAt?: Date;
}

export interface IQuery {
    get(id: string): HelloWorld | Promise<HelloWorld>;
}

export interface IMutation {
    create(message?: string): HelloWorld | Promise<HelloWorld>;
}

export interface ISubscription {
    addedHelloWorld(): HelloWorld | Promise<HelloWorld>;
}
