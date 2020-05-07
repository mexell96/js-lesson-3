1)
есть массив фруктов типа
[{name: ‘banana’, count: 10}]
придумайте хотя бы 5 фруктов

задача проста — написать функцию, которая принимает 2 аргумента — массив и строку. 
function f (arr, paramName) {}

Пробегается по массиву и возвращает массив тех значений объекта, 
которые указаны вторым аргументом. Использовать функцию так, 
чтобы она вернула названия фруктов (испольуем map)

на вход
[
{name: ‘banana’, count: 10},
{name: ‘orange’, count: 12}
]

если мы функцию вызываем как f(arr, 'name'), на выходе [‘banana’, ‘orange’]

если f(arr, ‘count’), то будет [10, 12]


'use strict';
let fruits = [
    {name: "banana", 
    count: 10
},
    {name: "apple", 
    count: 7,
},
    {name: "orange", 
    count: 3,
},
    {name: "kiwi", 
    count: 5,
},
    {name: "grape", 
    count: 8,
},
];

// Первый вариант
// let newFruit = fruits.map(fruit => {
//     return fruit.name
// })
// console.log(newFruit);

//  Второй вариант 
let newFruit2 = fruits.map(function(fruits) {
    console.log (fruits.name)
})


2)
есть массив людей типа
[{name: ‘Anna’, books: [‘Harry Potter’, ‘War and Peace’]}]
придумайте хотя бы 5 людей с любимыми книгами

написать функцию, которая будет принимать массив первым аргументом. 
На выходе получается список всех книг
function f (arr) {} (испольуем reduce)

Задание со звёздочкой — сделать так, чтобы в массиве на выходе не было дубликатов


let readers = [
    {name: "Anna", books: ["Harry Potter", "War and Peace"]},
    {name: "Oleg", books: ["Harry Potter two", "War and Peace two"]},
    {name: "Igor", books: ["Harry Potter three", "War and Peace three"]},
    {name: "Dasha", books: ["Harry Potter four", "War and Peace four"]},
    {name: "Masha", books: ["Harry Potter five", "War and Peace five"]},
];

let allBooks = readers.reduce(function(sum, elem) {
    return sum.concat(elem.books);
}, []);
console.log(allBooks);




