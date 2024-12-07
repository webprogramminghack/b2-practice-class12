'use strict';

// run from chrome console
const obj = {
  toString() {
    return 'hello everyone';
  },
};

const obj = {};
alert(obj);

const obj = new Object();
console.log(obj);

console.log(obj.__proto__ === Object.prototype);
console.log(obj.toString === obj.__proto__.toString);
console.log(obj.toString === Object.prototype.toString);

// console.log(Object.prototype.__proto__);

// go to keynote and show the diagram
const arr = [1, 2, 3];

console.log(arr.__proto__ === Array.prototype);
console.log(arr.__proto__.__proto__ === Object.prototype);
console.log(arr.__proto__.__proto__.__proto__ === null);

function f() {}

console.log(f.__proto__ === Function.prototype);
console.log(f.__proto__.__proto__ === Object.prototype);

// go to keynote and show the diagram that array prototype is closer than object prototype
console.log(arr.toString());

String.prototype.show = function () {
  console.log(this);
};

'Hello'.show();

Function.prototype.defer = function (ms) {
  const f = this;
  return function () {
    setTimeout(() => f.apply(this, arguments), ms);
  };
};

function f(a, b) {
  console.log(a + b);
}

f.defer(2000)(1, 2);

let user = {
  name: 'John',
  sayHi() {
    console.log(this.name);
  },
};

user.sayHi = user.sayHi.defer(2000);
user.sayHi();
