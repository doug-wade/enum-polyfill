// unabashedly lifted from
// https://github.com/lodash/lodash/blob/ef618992b5c206fd07202d6234807085fe3b58d7/lodash.js#L416

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

Symbol.enumSize = Symbol.enumSize || Symbol('enumSize');

// Adapted from https://github.com/doug-wade/proposal-enum-definitions
root.PolyfilledEnum = function PolyfilledEnum(values) {
  const constructedEnum = Object.create(null, {
    [Symbol.enumSize]: {
      // Specification can define better semantics for deriving
      // and storing the size of the enum object (internal slot)
      value: Object.keys(values).length
    },
    [Symbol.iterator]: {
      * value() {
        // Specification can define better semantics for deriving
        // and storing keys and values (internal slot)
        let keys = Object.keys(values);
        let index = 0;
        while (index < keys.length) {
          yield keys[index];
          index++;
        }
      }
    },
    keys: {
      get: function() {
        return function () { return Object.keys(this); };
      },
    },
    values: {
      get: function() {
        return function () { return Object.values(this); };
      },
    },
    entries: {
      get: function() {
        return function () { return Object.entries(this); };
      },
    },
    has: {
      get: function() {
        return function (elem) { return Object.values(this).includes(elem); };
      },
    },
    size: {
      get: function() {
        return function() { return this[Symbol.enumSize]; };
      }
    },
    forEach: {
      get: function() {
        return function(callback) {
          for (const member in Object.keys(this)) {
            callback(member, this[member], this);
          }
        }
      }
    },
  });
  for (const value in values) {
    constructedEnum[value] = values[value];
  }
  return Object.freeze(constructedEnum);
}
