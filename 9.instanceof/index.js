'use strict';

{
  class Rabbit {}
  let rabbit = new Rabbit();

  // is it an object of Rabbit class?
  console.log(rabbit instanceof Rabbit); // true
}

{
  function Rabbit() {}

  console.log(new Rabbit() instanceof Rabbit); // true
}

{
  let arr = [1, 2, 3];

  console.log(arr instanceof Array); // true
  console.log(arr instanceof Object); // true
}

{
  class Animal {}
  class Rabbit extends Animal {}

  const rabbit = new Rabbit();
  console.log(rabbit instanceof Animal); // true

  console.log(rabbit.__proto === Animal.prototype);
  console.log(rabbit.__proto__.__proto__ === Animal.prototype);
}

{
  function Rabbit() {}
  const rabbit = new Rabbit();

  Rabbit.prototype = {};
  console.log(rabbit instanceof Rabbit); // false
}
