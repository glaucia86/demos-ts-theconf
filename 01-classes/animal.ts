/**
 * File: animal.ts
 * Date: 07/30/2019
 * Author: Glaucia Lemos
 * Description: demo how to use classes in TypeScript
 * Link: https://www.typescriptlang.org/docs/handbook/classes.html
 */

class Animal {
    public name: string;
    public price: number;
    public breed: string;

    /**
     * Simple Constructor - Animal Class
     */
    constructor(name: string, price: number, breed: string) {
        this.name = name;
        this.price = price;
        this.breed = breed;
        
    }

    //==> Class Methods
    bark(barkType: string = 'woof, woof') {
        console.log(`${this.name} is a beautiful dog. But barks ${barkType} a lot!`);
    }
}

// ==> Output:
let animal = new Animal('Jake', 1000.00, 'Pischer');
console.log(`${animal.name}'s price is R$ ${animal.price}. And the breed is ${animal.breed}`);
animal.bark();