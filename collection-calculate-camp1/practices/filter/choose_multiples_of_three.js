'use strict';

function choose_multiples_of_three(collection) {
		var a=[];
  for(var i=0;i<collection.length;i++)
	{
		if(collection[i]%3==0)
			a.push(collection[i]);
	}
	return a;
}

module.exports = choose_multiples_of_three;
