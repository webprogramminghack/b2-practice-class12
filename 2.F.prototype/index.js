'use strict';

function Rabbit(name) {
  this.name = name;
}

console.log(Rabbit.prototype); // see in the browser
console.log(Rabbit.prototype.constructor === Rabbit);

let animal = {
  eats: true,
};

Rabbit.prototype = animal;

const rabbit = new Rabbit('White Rabbit'); // rabbit.__proto__ == Rabbit.prototype

console.log(rabbit.eats);

console.log(Rabbit.prototype === rabbit.__proto__);

// Naturally, if we do nothing, the constructor property is available to all rabbits through [[Prototype]]:
{
  function Rabbit() {}

  const rabbit = new Rabbit();

  console.log(rabbit.constructor === Rabbit); // true (from prototype)
  console.log(rabbit.__proto__.constructor === Rabbit);
}

// We can use constructor property to create a new object using the same constructor as the existing one.
{
  function Rabbit(name) {
    this.name = name;
  }

  let rabbit = new Rabbit('White Rabbit');

  let rabbit2 = new rabbit.constructor('Black Rabbit');

  console.log(rabbit2.name); // Black Rabbit
}

// what happens if we alter Rabbit.prototype?
{
  function Rabbit() {}

  Rabbit.prototype = {
    jumps: true,
  };

  // we should do this instead
  // Rabbit.prototype.jumps = true;

  let rabbit = new Rabbit();
  console.log(rabbit.constructor === Rabbit);
}

// contoh tambahan
// selalu masukkan method ke prototype
{
  function Rabbit(name) {
    this.name = name;
  }

  Rabbit.prototype.eat = function () {
    console.log(`${this.name} eats`);
  };

  const rabbit1 = new Rabbit('White Rabbit');
  const rabbit2 = new Rabbit('Black Rabbit');

  rabbit1.eat();
  rabbit2.eat();
}
