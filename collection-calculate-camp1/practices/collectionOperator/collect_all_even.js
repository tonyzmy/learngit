'use strict';

function collect_all_even(collection) {
	var a=[];  
	for(let i=0;i<collection.length;i++)
		if(collection[i]%2==0)
			a.push(collection[i]);
	return a;
}

module.exports = collect_all_even;
