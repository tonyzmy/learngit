'use strict';

function get_intersection(collect_b, collect_a) {
  //求两个集合的交集
	var a=[];
	for(let i=0;i<collect_a.length;i++)
		for(let j=0;j<collect_b.length;j++)
		if(collect_a[i]==collect_b[j])
		{
			a.push(collect_a[i]);
			break;
		}
	return a;
}

module.exports = get_intersection;
