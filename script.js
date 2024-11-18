// Домашнее задание к уроку №33: “Объекты”

// Задание 1: Создание объекта

let person = {
    name: "Мира",
    age: 25,
    city: "Лондон",
}

console.log(person);


// Задание 2: Доступ к свойствам объекта

console.log(person.name);
console.log(person.age);

person.city = "Алматы";

console.log(person.city);


// Задание 3: Методы объекта

let person1 = {
    name: "Мира",
    age: 25,
    city: "Лондон",
    greet() {
        console.log("Привет, меня зовут " + this.name + ", мне " + this.age + " лет!")
    }
}

person1.greet();


// Задание 4: Сравнение объектов (Reference Type)

obj1 = { a: 10, b: 20 }
obj2 = { a: 10, b: 20 }

console.log(obj1 == obj2); // вывел false
console.log(obj1 === obj2); // тоже вывел false

/*
В JavaScript объекты имеют ссылочный тип. И сравнивая 2 объекта, мы сравниваем их ссылки. 
Поэтому даже если содержимое 2 объектов будет абсолютно одинаковым, они не могут быть равны. 
Они будут равны только в том случае, если будут сравниваться их ссылки, которые ведут в одно место.  
*/


// Задание 5: Поверхностное и глубокое копирование объектов

let book = {
    title: "Люди как боги",
    author: "Герберт Уэллс",
    details: {
        year: 1923,
        pages: 318,
    }
}

let copyBook = Object.assign({}, book);
copyBook.details.year = 1936;

console.log(book);
console.log(copyBook);

/*
Изменение во вложенном объекте повлияло на копию, так как мы сделали поверхностное копирование объектов, 
которое коснулось только первого уровня свойств. 
*/


// Задание 6: Методы объектов

let calculator = {
    a: 10,
    b: 15,
    sum() {return this.a + this.b},
    multiply() {return this.a * this.b}
};

console.log(calculator.sum());
console.log(calculator.multiply());


// Задание 7: `const` и изменение содержимого объектов

const car = {
    brand: "Tesla",
    model: "Model S"
}

car.brand = "BMW";
console.log(car);

/*
При использовании const мы можем менять изменять содержимое объектов. Главное не переназначать переменную на другой объект. 
*/
