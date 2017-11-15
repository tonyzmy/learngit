'use strict';

function grouping_count(collection) {
  var a = [], b = {};
  for (let i =0; i < collection.length; i++) {
    var j;
    for (j = 0; j < a.length; j++) {
      if (a[j].key == collection[i]) {
        a[j].count++;
        break;
      }

    }
    if (a.length == j) {
      a.push({key: collection[i], count: 1});
    }
  }
    for (let i = 0; i < a.length; i++)
      b[a[i].key] = a[i].count;
    return b;
}

module.exports = grouping_count;
//indexof
