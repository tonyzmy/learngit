'use strict';

function get_integer_interval(number_a, number_b) {
	var a=[];
  if(number_a<number_b)
	{
	//自增1区间
	for(let j=number_a;j<=number_b;j++)
	{
		
		a.push(j);
	}
	}
  else if(number_a>number_b)
	{
	//自减1区间
	for(let j=number_a;j>=number_b;j--)
	{
		
		a.push(j);
	}
	}
  else 
	{
	//只含此数字的数组
	
	a.push(number_a);
	}
	return a;
	
		
}

module.exports = get_integer_interval;

