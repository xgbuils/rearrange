# array-reorder

[![travis ci][1]][2]
[![npm version][3]][4]
[![Coverage Status][5]][6]
[![Dependency Status][7]][8]

Function that given a changes configuration Map and an array, it creates a new array with reordered positions.

## Install

``` bash
npm install array-reorder --save
```

## Usage

There are several assertions with strings like:

``` JavaScript
const arrayReorder = require('array-reorder')

arrayReorder(new Map([
    [1, 5], // item in position 1 moved to position 5
    [6, 2]  // item in position 6 moved to position 2
]), ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i']) // ['a', 'c', 'g', 'd', 'e', 'b', 'f', 'h', 'i']
```

## Support
- Node.js >=6

## License
MIT

  [1]: https://travis-ci.org/xgbuils/array-reorder.svg?branch=master
  [2]: https://travis-ci.org/xgbuils/array-reorder
  [3]: https://badge.fury.io/js/array-reorder.svg
  [4]: https://badge.fury.io/js/array-reorder
  [5]: https://coveralls.io/repos/github/xgbuils/array-reorder/badge.svg?branch=master
  [6]: https://coveralls.io/github/xgbuils/array-reorder?branch=master
  [7]: https://david-dm.org/xgbuils/array-reorder.svg
  [8]: https://david-dm.org/xgbuils/array-reorder