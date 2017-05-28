# Relative Date

[![Build Status](https://travis-ci.org/samrith-s/relative_date.svg?branch=master)](https://travis-ci.org/samrith-s/relative_date) [![Coverage Status](https://coveralls.io/repos/github/samrith-s/relative_date/badge.svg)](https://coveralls.io/github/samrith-s/relative_date) [![npm](https://img.shields.io/npm/v/npm.svg)]()

[![NPM](https://nodei.co/npm/relative_date.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/relative_date/)

A simple package which returns relative human-readable text for any valid date entered. Accepts both JavaScript `Date` and `moment` objects.

## Installation

To install, simply run `npm install relative_date`

## Usage

```javascript
var relativeDate = require('relative_date');

console.log(relativeDate(new Date()).text);
// Output: 1:23am

console.log(relativeDate(moment().subtract(1,'day')).text);
//Output: Yesterday

console.log(relativeDate(moment().subtract(Math.floor(Math.random() * 7) + 1, 'd')).text);
//Output: Monday, Tuesday, Wednesday, Thursday, Friday, Saturday or Sunday

console.log(relativeDate(moment(new Date()).subtract(8, 'd')).text);
//Output: 5/21/2017

console.log(relativeDate(moment().add(100, 'y')).text);
//Output: 100 years from now

console.log(relativeDate(moment([2017,40,20])).text);
//Output: Invalid Date
```

## Tests
You can run tests to check for all the available outcomes, by running `npm run cover`

## Issues
All issues and feature requests can be raised in the [issues section](https://github.com/samrith-s/relative_date/issues).

## Contributing
There is an `.editorconfig` to maintain indentation across editors. Feel free to add, modify or update the project and raise a pull request. Do not forget to write tests for any additional cases you might add.

## Feature roadmap
- Customizable format for case 'Date is today'
- Customizable format for case 'Date is a parsed date of format M/D/YYYY'
- Customizable format for case 'Date is from the future'
- Additional sub-cases for 'Date is today'
    - Option to show texts like, 'a few seconds ago', '1 minute ago', '7 hours ago' etc.
    - Option to show texts like, 'just now', 'about a minute', etc.

## Release History
- 1.0.3 - Changed license of NPM package to MIT
- 1.0.2 - Completed readme
- 1.0.1 - Added `.editorconfig`
- 1.0.0 - Initial release
