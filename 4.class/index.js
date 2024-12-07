'use strict';

// we usually create an object using constructor function
{
  function User(name) {
    this.name = name;
  }

  User.prototype.sayHi = function () {
    console.log(this.name);
  };

  let user = new User('John');
  // user.sayHi();
}

// but we can make it using class
// syntactic sugar
{
  class User {
    constructor(name) {
      this.name = name;
    }

    sayHi() {
      console.log(this.name);
    }
  }

  let user = new User('John');
  // user.sayHi(); // John

  console.log(User.prototype);

  console.log(typeof User);

  console.log(User === User.prototype.constructor); // true
}

// not just a syntactic sugar
{
  class User {
    // constructor() {} // tidak perlu pakai constructor juga tetap jalan
  }

  console.log(typeof User); // function
  // User(); // Error: Class constructor User cannot be invoked without 'new'

  console.log(User);
}

// class expression
{
  const User = class {
    sayHi() {
      console.log('Hello');
    }
  };

  new User().sayHi();
}

// utilizing lexical environment
{
  function makeClass(phrase) {
    return class {
      sayHi() {
        console.log(phrase);
      }
    };
  }

  const User = makeClass('Hello');
  new User().sayHi();
}

// just like literal objects, classes may include getters/setters
{
  class User {
    constructor(name) {
      // invokes the setter
      this.name = name;
    }

    get name() {
      return this._name;
    }

    set name(value) {
      if (value.length < 4) {
        console.log('Name is too short');
        return;
      }
      this._name = value;
    }
  }

  let user = new User('John');
  // console.log(user.name);

  // console.log('user is:', user);

  // console.log('User.prototype :>> ', User.prototype); // see in browsers
}

// proof that prototype is created before constructor
{
  class User {
    constructor(name) {
      // invokes the setter
      this.getName(name);
    }

    getName(name) {
      this._name = name;
    }
  }

  let user = new User('John');

  // console.log('user :>> ', user);

  // console.log('User.prototype :>> ', User.prototype); // see in browsers
}

// class fields
{
  class User {
    name = 'John';

    sayHi() {
      console.log(`Hello, ${this.name}`);
    }
  }

  const user = new User();
  user.sayHi();
}

// The constructor is a special method in JavaScript classes, and it is stored on the class prototype, not on the individual object instances.
{
  class User {
    constructor() {
      this.name = 'John';
    }
  }
}

{
  // const button = {
  //   value: 'hello',
  //   click: () => {
  //     console.log(this.value);
  //   },
  // };

  class Button {
    constructor(value) {
      this.value = value;
    }
    click = () => {
      // this will take 'this' from surrounding context
      // the this is lexically bound
      console.log(this.value);
    };
  }

  let button = new Button('hello');

  //the 'this' is resolved when the class is invoked, it's too late to do this
  button.__proto__.test = () => {
    console.log('test:', this.value);
  };

  button.test();

  // setTimeout(button.click, 1000); // hello

  // button.test();

  // kita buktikan bahwa this pada arrow function bukan dynamic
  const obj = {
    value: 'hey guys',
  };

  obj.click = button.click;

  obj.click();
}

{
  class Person {
    constructor() {
      this.friends = ['John', 'Pete', 'Alice'];
    }
    getFriends = () =>
      this.friends.forEach((friend) => {
        console.log(friend);
      });
  }

  const person = new Person();
  person.getFriends();

  // {
  //   const obj = {
  //     friends: ['John', 'Pete', 'Alice'],
  //     getFriends: () =>
  //       this.friends.forEach((friend) => {
  //         console.log(friend);
  //       }),
  //   };

  //   obj.getFriends();
  // }
}
