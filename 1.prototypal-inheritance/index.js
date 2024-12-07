'use strict';

{
  let animal = {
    eats: true,
  };
  let rabbit = {
    jumps: true,
  };

  rabbit.__proto__ = animal; // sets rabbit.[[Prototype]] = animal

  // we can find animal properties in rabbit now
  console.log(rabbit.eats);
  console.log(rabbit.jumps);
}

// If we have a method in animal, it can be called on rabbit:
{
  let animal = {
    eats: true,
    walk() {
      console.log('Animal walk');
    },
  };

  let rabbit = {
    jumps: true,
    __proto__: animal,
  };

  // walk is taken from the prototype
  rabbit.walk(); // Animal walk
}

// The prototype chain can be longer:
{
  let animal = {
    eats: true,
    walk() {
      console.log('Animal walk');
    },
  };

  let rabbit = {
    jumps: true,
    __proto__: animal,
  };

  let longEar = {
    earLength: 10,
    __proto__: rabbit,
  };

  // walk is taken from the prototype chain
  longEar.walk(); // Animal walk

  // There are only two limitations:
  // The references can’t go in circles. JavaScript will throw an error if we try to assign __proto__ in a circle.

  // animal__proto__ = longEar; // Error: Cyclic __proto__ value
  // The value of __proto__ can be either an object or null. Other types are ignored.
  rabbit.__proto__ = 'Hey everyone'; // ignored
  rabbit.walk();
}

// Writing doesn’t use prototype
// Write/delete operations work directly with the object.
{
  let animal = {
    eats: true,
    // this method won't be replaced
    walk() {},
  };

  let rabbit = {
    __proto__: animal,
  };

  rabbit.walk = function () {
    console.log('Rabbit! Bounce-bounce!');
  };

  // see what's inside rabbit now
  console.log('rabbit :>> ', rabbit);

  // see what's inside animal now
  console.log('animal :>> ', animal);

  delete rabbit.walk;

  // // see what's inside rabbit now
  console.log('rabbit :>> ', rabbit);

  // // see what's inside animal now
  console.log('animal :>> ', animal);
}

// No matter where the method is found: in an object or its prototype. In a method call, this is always the object before the dot.
{
  // animal has methods
  let animal = {
    walk() {
      if (!this.isSleeping) {
        console.log(`I walk`);
      }
    },
    sleep() {
      this.isSleeping = true;
    },
  };

  let rabbit = {
    name: 'White Rabbit',
    __proto__: animal,
  };

  // modifies rabbit.isSleeping
  rabbit.sleep();

  console.log(rabbit.isSleeping); // true
  console.log(animal.isSleeping); // undefined (no such property in the prototype)

  console.log('rabbit :>> ', rabbit);
}

// iteration
{
  let animal = {
    eats: true,
    walk() {
      console.log('Animal walk');
    },
  };

  let rabbit = {
    jumps: true,
    __proto__: animal,
  };

  // Object.keys only returns own keys
  console.log(Object.keys(rabbit)); // jumps

  // for..in loops over both own and inherited keys
  for (let key in rabbit) console.log(key); // jumps, then eats

  for (let key in rabbit) {
    let isOwn = rabbit.hasOwnProperty(key);

    if (isOwn) {
      console.log(`Our: ${key}`);
    } else {
      console.log(`Inherited: ${key}`);
    }
  }
}

// studi kasus
{
  let hamster = {
    // stomach: [],

    eat(food) {
      this.stomach.push(food);
    },
  };

  let speedy = {
    // stomach: [],
    __proto__: hamster,
  };

  let lazy = {
    // stomach: [],
    __proto__: hamster,
  };

  // This one found the food
  speedy.eat('apple');
  console.log('speedy.stomach :>> ', speedy.stomach);
  console.log('lazy.stomach :>> ', lazy.stomach);
}
