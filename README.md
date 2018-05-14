# Enum Polyfill

For use with [babel-plugin-transform-enum](https://npmjs.com/package/babel-plugin-transform-enum).

# Installation

```sh
$ npm i enum-polyfill
```

# Usage

First, add babel-plugin-transform-enum to your babelrc

```js
{
  "plugins": [
    "transform-enum"
  ]
}
```

In the entry point to your application (the first file that is called), add

```js
require("enum-polyfill");
```

# Note on support

Eventually, should [my proposal](https://github.com/doug-wade/proposal-enum-definitions)
get traction, this will be moved to the [core-js](https://github.com/zloirock/core-js)
repository and then included in [babel-polyfill](https://babeljs.io/docs/usage/polyfill/)
directly, at which point this will no longer be supported.

# Prior Art

Much thanks to the following people whose prior work was instrumental in the creation
of this polyfill

- [@rauschma](https://github.com/rauschma/enums/blob/master/enums.js)
- [@rwaldron](https://github.com/rwaldron/proposal-enum-definitions)
- [@stevekinney](https://github.com/stevekinney/ecmascript-enumerations)
- [@zloirock](https://github.com/zloirock/core-js/blob/master/modules/_global.js)
- [@jdalton](https://github.com/lodash/lodash/blob/ef618992b5c206fd07202d6234807085fe3b58d7/lodash.js#L416)
- [the tc39 mailing list](https://esdiscuss.org/topic/enums)
