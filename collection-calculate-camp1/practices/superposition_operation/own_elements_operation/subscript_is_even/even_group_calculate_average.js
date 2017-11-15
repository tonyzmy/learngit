'use strict';
var even_group_calculate_average = function(collection){
  var a=collection.reduce(function (prev,curv,index,array) {
    if(index%2==1)
    {
      prev.push(curv);
      return prev;
    }
    else
      return prev;
  },[]);
  var b=[],c=[],d=[],e=[];
  a.map(function (num) {
    if(num%2==0)
    {
      var count=num.toString().length;
      if(count==1)
        b.push(num);
      else if(count==2)
        c.push(num);
      else
        d.push(num);
    }
  });
  if(b.length>0)
    e.push(parseInt(
      b.reduce(function (prev,curv) {
        return prev+curv;
      })/b.length
    ));
  if(c.length>0)
    e.push(parseInt(
      c.reduce(function (prev,curv) {
        return prev+curv;
      })/c.length
  ));
  if(d.length>0)
    e.push(parseInt(
      d.reduce(function (prev,curv) {
        return prev+curv;
      })/d.length
  ));
  if(e.length==0)
    e.push(0);
  return e;
};
module.exports = even_group_calculate_average;
