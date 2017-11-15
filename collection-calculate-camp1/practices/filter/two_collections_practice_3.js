'use strict';

function choose_divisible_integer(collection_a, collection_b) {
	var a=[];
	for(let i=0;i<collection_a.length;i++)
		for(let j=0;j<collection_b.length;j++)
		if(collection_a[i]%collection_b[j]==0)
			{
			a.push(collection_a[i]);
			break;
			}
	return a;
}

module.exports = choose_divisible_integer;
