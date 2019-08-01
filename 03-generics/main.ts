/**
 * File: main.ts
 * Date: 07/30/2019
 * Author: Glaucia Lemos
 * Description: demo how to use generics in TypeScript
 * Link: https://www.typescriptlang.org/docs/handbook/generics.html
 */

function listInverse<T>(list: Array<T>): Array<T> {
    let heroesListInverse: T[] = [];

    for (let i = list.length -1; i >= 0; i--) {
        heroesListInverse.push(list[i]);
    }

    return heroesListInverse;
}

let heroesName = ["Iron Man", "AntMan", "Thor", "Captain Marvel", "Captain America"];
let numbers = [1,2,3,4,5,6,7];

let listInverseNames = listInverse<string>(heroesName);
let listInverseNumbers = listInverse<number>(numbers);

console.log(listInverseNames);
console.log(listInverseNumbers);
