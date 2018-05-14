// unabashedly lifted from
// https://github.com/lodash/lodash/blob/ef618992b5c206fd07202d6234807085fe3b58d7/lodash.js#L416

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

// Adapted from https://github.com/doug-wade/proposal-enum-definitions
const emptyValue = Symbol('empty value');
root.PolyfilledEnumEmptyValue = emptyValue;
root.PolyfilledEnum = function PolyfilledEnum(values) {
  const constructedEnum = Object.freeze(
    Object.create(null, {
      [Symbol.enumSize]: {
        // Specification can define better semantics for deriving
        // and storing the size of the enum object (internal slot)
        value: values.length
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
      values: function() {
        return Object.keys(this);
      },
      memberOf: function(elem) {
        return Object.values(this).includes(elem);
      }
    });
    for (const value of values) {
      if (values[value] === emptyValue) {
        constructedEnum[value] = Symbol(value.toString());
      } else {
        constructedEnum[value] = value;
      }
    }
  );
}
