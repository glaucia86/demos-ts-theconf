"use strict";
/**
 * File: animal.ts
 * Date: 07/30/2019
 * Author: Glaucia Lemos
 * Description: demo how to use classes in TypeScript
 * Link: https://www.typescriptlang.org/docs/handbook/classes.html
 */
var Animal = /** @class */ (function () {
    /**
     * Simple Constructor - Animal Class
     */
    function Animal(name, price, breed) {
        this.name = name;
        this.price = price;
        this.breed = breed;
    }
    //==> Class Methods
    Animal.prototype.bark = function (barkType) {
        if (barkType === void 0) { barkType = 'woof, woof'; }
        console.log(this.name + " is a beautiful dog. But barks " + barkType + " a lot!");
    };
    return Animal;
}());
// ==> Output:
var animal = new Animal('Jake', 1000.00, 'Pischer');
console.log(animal.name + "'s price is R$ " + animal.price + ". And the breed is " + animal.breed);
animal.bark();
