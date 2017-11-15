'use strict';
var even_asc_odd_desc = function(collection){
  for(let i=0;i<collection.length-1;i++)
      for(let j=i+1;j<collection.length;j++)
        if(collection[i]>collection[j])
        {
          let t=collection[i];
          collection[i]=collection[j];
          collection[j]=t;
        }
  var a=[];
  collection.map(
    i=>{
      if(i%2==0)
        a.push(i);
    }

  );
  for(let j=collection.length-1;j>=0;j--)
  {
    if(collection[j]%2==1)
      a.push(collection[j]);
  }
  return a;
};
module.exports = even_asc_odd_desc;
