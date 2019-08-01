/**
 * File: employee.ts
 * Date: 07/30/2019
 * Author: Glaucia Lemos
 * Description: demo how to use inheritance in TypeScript
 * Link: https://www.typescriptlang.org/docs/handbook/classes.html#inheritance
 */

class Person {
    protected name: string;

    /**
     * Constructor Person Class
     */
    constructor(name: string) {
        this.name = name;       
    }
}

class Employee extends Person {
    private department: string;

    /**
     * Constructor Employee Class
     */
    constructor(name: string, department: string) {
        super(name);

        this.department = department;        
    }

    // ==> Class Methods
    public newEmployee() {
        console.log(`Hi! My name is ${this.name} and I work in the ${this.department} department.`);
    }
}

// ==> Output:
let employee = new Employee('Glaucia Lemos', 'Development & Innovation');
console.log(employee.newEmployee());

//console.log(employee.name) // ==> descomentar - dará erro pois a propriedade name é private