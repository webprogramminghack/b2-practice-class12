'use strict';

class Animal {
  constructor(name) {
    this.speed = 0;
    this.name = name;
  }
  run(speed) {
    this.speed = speed;
    console.log(`${this.name} runs with speed ${this.speed}.`);
  }
  stop() {
    this.speed = 0;
    console.log(`${this.name} stands still.`);
  }
}

class Rabbit extends Animal {
  // if the constructor is not provided, it is taken from the parent class
  hide() {
    console.log(`${this.name} hides!`);
  }
}

const rabbit = new Rabbit('White Rabbit');
rabbit.run(5); // White Rabbit runs with speed 5.
rabbit.hide(); // White Rabbit hides!

// overiding the method
{
  class Animal {
    constructor(name) {
      this.speed = 0;
      this.name = name;
    }

    run(speed) {
      this.speed = speed;
      console.log(`${this.name} runs with speed ${this.speed}.`);
    }

    stop() {
      this.speed = 0;
      console.log(`${this.name} stands still.`);
    }
  }

  class Rabbit extends Animal {
    hide() {
      console.log(`${this.name} hides!`);
    }

    stop() {
      super.stop(); // call parent stop
      this.hide(); // and then hide

      // arrow functions have no super
      // setTimeout(function () {
      //   super.stop();
      // }, 1000);
      // setTimeout(() => super.stop(), 2000);
    }
  }

  let rabbit = new Rabbit('White Rabbit');

  rabbit.run(5); // White Rabbit runs with speed 5.
  rabbit.stop(); // White Rabbit stands still. White Rabbit hides!
}

// overriding constructor
{
  class Animal {
    constructor(name) {
      this.speed = 0;
      this.name = name;
    }

    run(speed) {
      this.speed = speed;
      console.log(`${this.name} runs with speed ${this.speed}.`);
    }

    stop() {
      this.speed = 0;
      console.log(`${this.name} stands still.`);
    }
  }

  class Rabbit extends Animal {
    constructor(name, color) {
      super(name); // call parent constructor
      // this.name = name; // this is not defined because the parent constructor is not called resulting in undefined since this doesn't have reference to the object
      this.color = color;
    }
  }

  const rabbit = new Rabbit('White Rabbit', 'white');

  console.log('rabbit :>> ', rabbit);
}
