const moment = require('moment');

module.exports = function(date) {
  date = moment(date);
  let parsedDate = {
    value: date.toISOString(),
    text: null,
    valid: true
  };

  if (!date._isValid) {
    parsedDate.valid = false;
    parsedDate.text = 'Invalid Date';
    return parsedDate;
  }

  let diff = moment(Date.now()).diff(date, 'days');

  if (diff < 0) {
    parsedDate.text = moment(date).fromNow(true) + ' from now';
  } else if (diff < 1) {
    parsedDate.text = date.format('h:mma');
  } else if (diff === 1) {
    parsedDate.text = 'Yesterday';
  } else if (diff > 1 && diff < 7) {
    parsedDate.text = date.format('dddd');
  } else {
    parsedDate.text = date.format('D MMMM, YYYY');
  }

  return parsedDate;
};
