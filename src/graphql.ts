
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
}

export interface IQuery {
    add(id: string): HelloWorld | Promise<HelloWorld>;
}

export interface ISubscription {
    addHelloWorld(): HelloWorld | Promise<HelloWorld>;
}
