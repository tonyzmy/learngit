'use strict';

function collect_max_number(collection) {
  return collection.reduce(function (prev,curv) {
    return prev>curv?prev:curv;
    }

  )
}

module.exports = collect_max_number;
