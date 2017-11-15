'use strict';
var single_element = function(collection){
  var a=collection.reduce(function (prev,curv,index,array) {
    if(index%2==1)
    {
      prev.push(curv);
      return prev;
    }
    else
      return prev;
  },[]);
  return a.reduce(function (prev,curv,index,array) {
      let t=a.length;
      for(var i=index+1;i<array.length;i++)
        if(array[i]==curv)
          array.splice(i--,1);
      if(i==t)
      {
        prev.push(curv);
        return prev;
      }
      else
      {
        return prev;
      }

  },[]);
};
module.exports = single_element;
