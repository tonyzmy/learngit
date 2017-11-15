'use strict';

function spilt_to_zero(number, interval) {
  Number.prototype.add = function(arg){
    var r1,r2,m;
    try{r1=this.toString().split(".")[1].length}catch(e){r1=0}
    try{r2=arg.toString().split(".")[1].length}catch(e){r2=0}
    m=Math.pow(10,Math.max(r1,r2))
    return (this*m+arg*m)/m
  }

  var a=[number];
  while(number>0)
  {
    number=number.add(-interval);
    a.push(number);
  }
  return a;
}



module.exports = spilt_to_zero;
