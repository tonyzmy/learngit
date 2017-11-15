'use strict';

function grouping_count() {
  var collection = [1,1,1,1,2,3,1,3,4,2,3,1,3,4,2];
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
console.log(grouping_count());
// module.exports = grouping_count;
//indexof
