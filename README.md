# Relative Date

[![Build Status](https://travis-ci.org/samrith-s/relative_date.svg?branch=master)][build]
[![Coverage Status](https://coveralls.io/repos/github/samrith-s/relative_date/badge.svg)][coverage]
[![npm](https://img.shields.io/npm/v/relative_date.svg)][npm]
[![GitHub license](https://img.shields.io/github/license/samrith-s/sticky-react-table.svg)][license]

A simple package which returns relative human-readable text for any valid date entered. Accepts both JavaScript `Date` and `moment` objects.

## Version 2 Out Now

Relative Date is back in active development! Features will now be added as per the Roadmap mentioned below.

## Installation

To install, simply run

```
npm install relative_date
```

## Usage

```javascript
var RelativeDate = require('relative_date');

console.log(RelativeDate(new Date()).text);
// Output: 1:23am

console.log(RelativeDate(moment().subtract(1, 'day')).text);
//Output: Yesterday

console.log(
  RelativeDate(moment().subtract(Math.floor(Math.random() * 6) + 2, 'd')).text
);
//Output: Monday, Tuesday, Wednesday, Thursday, Friday, Saturday or Sunday

console.log(RelativeDate(moment(new Date()).subtract(8, 'd')).text);
//Output: 21 May, 2017

console.log(RelativeDate(moment().add(100, 'y')).text);
//Output: 100 years from now

console.log(RelativeDate(moment([2017, 40, 20])).text);
//Output: Invalid Date
```

The value returned by `RelativeDate` is an object of this order:

```javascript
RelativeDate(new Date())

// Returned value
{
    value: date.toISOString(),
    text: String,
    valid: Boolean
}
```

If the date is invalid, the text returned would be "Invalid Date" and the value would be an Invalid Date object.

## Tests

You can run tests to check for all the available outcomes, by running `yarn test`

## Issues

All issues and feature requests can be raised in the [issues section](https://github.com/samrith-s/relative_date/issues).

## Contributing

ESLint and Prettier are setup to have consistent formatting. Please raise a PR and do not forget to add tests for any cases you might add!

## Roadmap

- Customizable format for case 'Date is today'
- Customizable format for case 'Date is a parsed date of format D MMM, YYYY'
- Customizable format for case 'Date is from the future'
- Additional sub-cases for 'Date is today'
  - Option to show texts like, 'a few seconds ago', '1 minute ago', '7 hours ago' etc.
  - Option to show texts like, 'just now', 'about a minute', etc.

Copyright &copy; 2018.

[build]: https://travis-ci.org/samrith-s/relative_date
[coverage]: https://coveralls.io/github/samrith-s/relative_date
[npm]: https://www.npmjs.com/package/relative_date
[license]: https://github.com/samrith-s/relative_date/blob/master/LICENSE
