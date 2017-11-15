'use strict';

function compare_collections(collection_a, collection_b) {
  return collection_a.reduce(function (prev,curv,curi,array) {
    return curv==collection_b[curi]&&prev
  },true);
}

module.exports = compare_collections;


