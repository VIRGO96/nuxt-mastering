export {};

// ____________________

// SIMPLE TYPES
let name: string = 'jhon';
let age: number = 30;
let isActive: boolean = true;

let number: number[] = [1, 2, 3, 4, 5];
let strings: string[] = ['jhon', 'Zack'];

let person: [string, number, boolean] = ['jhon', 30, true];

// ENUMS

enum Color {
    Red,
    Green,
    Blue,
}

let favColor: Color = Color.Green;

// Advance Types

let dynamicValue: any = true;

let unknownValue: unknown = true;

function throwError(message: string): never {
    throw new Error();
}

function logMessage(message: string): void {
    console.log(123);
}

interface Person {
    name: string;
    age: number | string;
    isActive: boolean;
}

let personObj: Person = {
    name: '',
    age: '123',
    isActive: true,
};

interface Employee {
    id: number;
}

type EmployeePerson = Person & Employee;

let employee: EmployeePerson = {
    name: 'Zack',
    age: 25,
    isActive: true,
    id: 123,
};
