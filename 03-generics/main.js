"use strict";
/**
 * File: main.ts
 * Date: 07/30/2019
 * Author: Glaucia Lemos
 * Description: demo how to use generics in TypeScript
 * Link: https://www.typescriptlang.org/docs/handbook/generics.html
 */
function listInverse(list) {
    var heroesListInverse = [];
    for (var i = list.length - 1; i >= 0; i--) {
        heroesListInverse.push(list[i]);
    }
    return heroesListInverse;
}
var heroesName = ["Iron Man", "AntMan", "Thor", "Captain Marvel", "Captain America"];
var numbers = [1, 2, 3, 4, 5, 6, 7];
var listInverseNames = listInverse(heroesName);
var listInverseNumbers = listInverse(numbers);
console.log(listInverseNames);
console.log(listInverseNumbers);
