'use strict';

function even_to_letter(collection) {
  var a=[];
  collection.map(function (i) {
    if(i%2==0)
      a.push(String.fromCharCode(96+i));
  });
  return a;
}

module.exports = even_to_letter;
