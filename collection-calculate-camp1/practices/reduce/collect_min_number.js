'use strict';

function collect_min_number(collection) {
  return collection.reduce(function (prev,curv) {
      return prev<curv?prev:curv;
    }

  )
}

module.exports = collect_min_number;

