'use strict';
var is_exist_element = function(collection,element){
  return collection.reduce(function (prev,curv,index,array) {
    if(index%2==0 )
     return prev||curv==element;
    else
      return prev;
  },false)
};
module.exports = is_exist_element;
