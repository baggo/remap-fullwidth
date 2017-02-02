# remap-fullwidth
> ＡＥＳＴＨＥＴＩＣ character map

A map of 95 full-width characters designed for use with [`baggo/remap`](https://github.com/baggo/remap-fullwidth).

```javascript
const remap = require('remap')
const fullwidth = require('remap-fullwidth')
const aestheticify = remap(fullwidth)

console.log(aestheticify('AESTHETIC')) // -> ＡＥＳＴＨＥＴＩＣ

```

## Installation
```sh
npm install --save remap-fullwidth
```

## License
MIT
