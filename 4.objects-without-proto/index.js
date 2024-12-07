'use strict';

const animal = {
  eats: true,
};

// we can also use Object.create to create an object with a given prototype
const rabbit = Object.create(animal); // same as {__proto__: animal}

console.log(rabbit.eats); // true

// console.log(rabbit.__proto__ === animal);
// console.log(Object.prototype === rabbit.__proto__.__proto__);

// modern methods to get and set the prototype: Object.getPrototypeOf and Object.setPrototypeOf
console.log(Object.getPrototypeOf(rabbit) === animal); // true

Object.setPrototypeOf(rabbit, {}); // change the prototype of rabbit to {}

console.log(rabbit.eats); // undefined

{
  const animal = {
    eats: true,
  };

  let rabbit = Object.create(animal, {
    jumps: {
      value: true,
    },
  });

  console.log(rabbit.jumps); // true
}

// plain object
{
  const obj = Object.create(null);
  console.log(obj.__proto__ === Object.prototype); // false
}
