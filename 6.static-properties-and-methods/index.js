'use strict';

class User {
  static staticMethod() {
    console.log(this === User);
  }
}

User.staticMethod(); // true

{
  class User {}

  User.staticMethod = function () {
    console.log(this === User);
  };

  User.staticMethod();
}

// example of static method on built in class
// Date.now(); // returns current timestamp
// Array.from(); // creates a new array from an array-like or iterable object
// Object.keys(); // returns an array of a given object's own enumerable property names

// the static method usually related to the instance
class Article {
  constructor(title, date) {
    this.title = title;
    this.date = date;
  }

  static compare(articleA, articleB) {
    return articleA.date - articleB.date;
  }
}

const articles = [
  new Article('HTML', new Date(2019, 1, 1)),
  new Article('CSS', new Date(2019, 0, 1)),
  new Article('JavaScript', new Date(2019, 11, 1)),
];

articles.sort(Article.compare);
// console.log(articles);

// it's not available on the instance
// console.log(articles[0].compare); // undefined

// Static properties are inherited.
class Animal {
  static habitat() {
    return 'Earth';
  }
}

class Dog extends Animal {}

console.log(Dog.habitat());

console.log(Dog.__proto__ === Animal); // true
