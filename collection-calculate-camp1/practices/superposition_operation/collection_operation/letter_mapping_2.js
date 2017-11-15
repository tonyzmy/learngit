'use strict';

function average_to_letter(collection) {

  return String.fromCharCode(96+Math.ceil(
    collection.reduce(function (prev,curv) {
      return prev+curv;
    })/collection.length
  ));

}

module.exports = average_to_letter;

