'use strict';

class PowerArray extends Array {
  isEmpty() {
    return this.length === 0;
  }
}

let arr = new PowerArray(1, 2, 5, 10, 50);
console.log(arr.isEmpty()); // false

let filteredArr = arr.filter((item) => item >= 10);
console.log(filteredArr); // 10, 50

console.log(filteredArr.isEmpty()); // false
console.log(arr.constructor === PowerArray);

// it will use arr.constructor to create a new array
const arr2 = new arr.constructor(1, 2, 3);

console.log('arr2 :>> ', arr2);

{
  // power array that has method to double the values of the array using map
  class PowerArray extends Array {
    double() {
      return this.map((item) => item * 2);
    }
  }

  const arr = new PowerArray(1, 2, 5, 10);

  console.log(arr.double()); // 2, 4, 10, 20
}

{
  class ArrayCustomObjects extends Array {
    selectById(id) {
      return this.find((item) => item.id === id);
    }
  }

  const arrCustomObjects = new ArrayCustomObjects(
    {
      id: 1,
      name: 'John',
    },
    {
      id: 2,
      name: 'James',
    },
    {
      id: 3,
      name: 'Robert',
    }
  );

  const selectedObject = arrCustomObjects.selectById(3);
  console.log('selectedObject :>> ', selectedObject);
}
