// Задание №1
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

let newFruit = fruits.map(fruit => {
    return fruit.name
})
console.log(newFruit);


// Задание №2
'use strict';
let readers = [
    {name: "Anna", books: ["Harry Potter", "War and Peace"]},
    {name: "Oleg", books: ["Harry Potter two", "War and Peace two"]},
    {name: "Igor", books: ["Harry Potter two", "War and Peace three"]},
    {name: "Dasha", books: ["Harry Potter two", "War and Peace four"]},
    {name: "Masha", books: ["Harry Potter five", "War and Peace five"]},
    {name: "Maksim", books: ["Harry Potter six", "War and Peace six"]},
    {name: "Nikita", books: ["Harry Potter seven", "War and Peace seven"]},
];

let allBooks = readers.reduce(function(acc, book) {
    return acc.concat(book.books);
}, []);
// console.log(allBooks);

// 1.
let newAllBooks = allBooks.filter((item,index) => {
    return index === allBooks.indexOf(item);
});
console.log(newAllBooks);


// 2.
let newAllBooks2 = new Set(allBooks);
console.log(newAllBooks2);


// 3.
let newAllBooks3 = allBooks.reduce((uniq, item) => {
    return uniq.includes(item) ? uniq : [...uniq, item];
}, [])
console.log(newAllBooks3);
