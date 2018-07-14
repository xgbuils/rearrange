# rearrange

[![travis ci][1]][2]
[![npm version][3]][4]
[![Coverage Status][5]][6]
[![Dependency Status][7]][8]

Function that given a movement configuration Map and an array, it creates a new array with rearranged positions.

## Install

``` bash
npm install rearrange --save
```

## Usage

``` JavaScript
const rearrange = require('rearrange')

rearrange(new Map([
    [1, 5], // item in position 1 moved to position 5
    [6, 2]  // item in position 6 moved to position 2
]), ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i']) // ['a', 'c', 'g', 'd', 'e', 'b', 'f', 'h', 'i']
```

## Support
- Node.js >=6

## License
MIT

  [1]: https://travis-ci.org/xgbuils/rearrange.svg?branch=master
  [2]: https://travis-ci.org/xgbuils/rearrange
  [3]: https://badge.fury.io/js/rearrange.svg
  [4]: https://badge.fury.io/js/rearrange
  [5]: https://coveralls.io/repos/github/xgbuils/rearrange/badge.svg?branch=master
  [6]: https://coveralls.io/github/xgbuils/rearrange?branch=master
  [7]: https://david-dm.org/xgbuils/rearrange.svg
  [8]: https://david-dm.org/xgbuils/rearrange