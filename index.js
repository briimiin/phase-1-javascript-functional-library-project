// Function to iterate over each element of an array or object and call a function on each element
function myEach(collection, callback) {
    if (Array.isArray(collection)) {
      for (let i = 0; i < collection.length; i++) {
        callback(collection[i]);
      }
    } else {
      for (const key in collection) {
        callback(collection[key]);
      }
    }
    return collection;
  }
  
  // Function to create a new array with the results of calling a provided function on every element in the calling array
  function myMap(collection, callback) {
    const result = [];
    myEach(collection, element => {
      result.push(callback(element));
    });
    return result;
  }
  
  // Function to apply a function against an accumulator and each element in the array (from left to right) to reduce it to a single value
  function myReduce(collection, callback, initialValue) {
    let accumulator = initialValue !== undefined ? initialValue : 0;
    if (Array.isArray(collection)) {
      for (const element of collection) {
        accumulator = callback(accumulator, element);
      }
    } else {
      for (const key in collection) {
        accumulator = callback(accumulator, collection[key]);
      }
    }
    return accumulator;
  }
  
  // Function to find the first element in the array that satisfies the provided testing function
  function myFind(collection, predicate) {
    for (const element of collection) {
      if (predicate(element)) {
        return element;
      }
    }
    return undefined;
  }
  
  // Function to filter elements in the array based on the provided callback function
  function myFilter(collection, callback) {
    const result = [];
    myEach(collection, element => {
      if (callback(element)) {
        result.push(element);
      }
    });
    return result;
  }
  
  // Function to get the size of the collection (length for arrays, number of keys for objects)
  function mySize(collection) {
    if (Array.isArray(collection)) {
      return collection.length;
    } else {
      return Object.keys(collection).length;
    }
  }
  
  // Function to get the first element of the collection
  function myFirst(collection, n = 1) {
    return collection.slice(0, n);
  }
  
  // Function to get the last element of the collection
  function myLast(collection, n = 1) {
    return collection[collection.length - 1];
  }
  
  // Function to get all the keys of an object
  function myKeys(object) {
    return Object.keys(object);
  }
  
  // Function to get all the values of an object
  function myValues(object) {
    return Object.values(object);
  }
  
  // You can implement other functions (like myEach, myFind, etc.) following a similar pattern
  
  // Export the functions if needed
  module.exports = {
    myEach,
    myMap,
    myReduce,
    myFind,
    myFilter,
    mySize,
    myFirst,
    myLast,
    myKeys,
    myValues
  };
  