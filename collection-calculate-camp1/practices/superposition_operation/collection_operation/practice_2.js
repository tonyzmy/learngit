'use strict';

function hybrid_operation_to_uneven(collection) {
 return collection.reduce(function (prev,curv) {
   if(curv%2==1)
     prev.push((curv*3+2));
   return prev;
 },[]);


}

module.exports = hybrid_operation_to_uneven;

