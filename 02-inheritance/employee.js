"use strict";
/**
 * File: employee.ts
 * Date: 07/30/2019
 * Author: Glaucia Lemos
 * Description: demo how to use inheritance in TypeScript
 * Link: https://www.typescriptlang.org/docs/handbook/classes.html#inheritance
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    /**
     * Constructor Person Class
     */
    function Person(name) {
        this.name = name;
    }
    return Person;
}());
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    /**
     * Constructor Employee Class
     */
    function Employee(name, department) {
        var _this = _super.call(this, name) || this;
        _this.department = department;
        return _this;
    }
    // ==> Class Methods
    Employee.prototype.newEmployee = function () {
        console.log("Hi! My name is " + this.name + " and I work in the " + this.department + " department.");
    };
    return Employee;
}(Person));
// ==> Output:
var employee = new Employee('Glaucia Lemos', 'Development & Innovation');
console.log(employee.newEmployee());
//console.log(employee.name) // ==> descomentar - dará erro pois a propriedade name é private
