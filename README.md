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

console.log(relativeDate(moment().subtract(Math.floor(Math.random() * 6) + 2, 'd')).text);
//Output: Monday, Tuesday, Wednesday, Thursday, Friday, Saturday or Sunday

console.log(relativeDate(moment(new Date()).subtract(8, 'd')).text);
//Output: 21 May, 2017

console.log(relativeDate(moment().add(100, 'y')).text);
//Output: 100 years from now

console.log(relativeDate(moment([2017,40,20])).text);
//Output: Invalid Date
```

The value returned by `relativeDate` is an object of this order:
```javascript

relativeDate(new Date())

// Returned value
{
    value: date.toISOString(),
    text: String,
    valid: Boolean
}
```

If the date is invalid, the text returned would be "Invalid Date" and the value would be an Invalid Date object.

## Tests
You can run tests to check for all the available outcomes, by running `npm run cover`

## Issues
All issues and feature requests can be raised in the [issues section](https://github.com/samrith-s/relative_date/issues).

## Contributing
There is an `.editorconfig` to maintain indentation across editors. Feel free to add, modify or update the project and raise a pull request. Do not forget to write tests for any additional cases you might add.

## Feature roadmap
- Customizable format for case 'Date is today'
- Customizable format for case 'Date is a parsed date of format D MMM, YYYY'
- Customizable format for case 'Date is from the future'
- Additional sub-cases for 'Date is today'
    - Option to show texts like, 'a few seconds ago', '1 minute ago', '7 hours ago' etc.
    - Option to show texts like, 'just now', 'about a minute', etc.

## Release History
- 1.0.10 - Updated tests and changed README to reflect changes made to case 'is parsed date'
- 1.0.9 - Changed default 'is date' format from `M/DD/YYYY` to `D MMM, YYYY`
- 1.0.8 - Fixed issue with Uglifier throwing error `unexpected token name`
- 1.0.7 - Rectified test case 3 failing when randomiser subtracts day by 1. Changed the randomisation formula to generate number between 6 and 2
- 1.0.6 - Completed comprehensive README.
- 1.0.5 - Added returned object structure in README.
- 1.0.4 - Added feature roadmap.
- 1.0.3 - Changed license of NPM package to MIT.
- 1.0.2 - Completed README.
- 1.0.1 - Added `.editorconfig`.
- 1.0.0 - Initial release.
