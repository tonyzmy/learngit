'use strict';

function choose_no_repeat_number(collection) {
	var a=[];
  	for(var i=0;i<collection.length;i++)
	{
		if(a.length==0){
		a.push(collection[i]);
		continue;
		}
		for(var j=0;j<a.length;j++)
		if(collection[i]==a[j])
			break;
		if(j==a.length)
		a.push(collection[i]);
	}
	return a;
}

module.exports = choose_no_repeat_number;
