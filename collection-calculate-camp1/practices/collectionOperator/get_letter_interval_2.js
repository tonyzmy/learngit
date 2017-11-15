'use strict';

function get_letter_interval_2(number_a, number_b) {
   	  	var a=[];
  if(number_a<number_b)
	{
	//自增字母区间
	for(let j=number_a;j<=number_b;j++)
	{	
		if(j>26)
			if(j%26==0)
			a.push(String.fromCodePoint(96+parseInt((j-1)/26),96+26));
			else
			a.push(String.fromCodePoint(96+parseInt(j/26),96+j%26));
		else
		a.push(String.fromCodePoint(96+j));
	}
	}
  else if(number_a>number_b)
	{
	//自减字母区间
	for(let j=number_a;j>=number_b;j--)
	{
		
		if(j>26)
			if(j%26==0)
			a.push(String.fromCodePoint(96+parseInt((j-1)/26),96+26));
			else
			a.push(String.fromCodePoint(96+parseInt(j/26),96+j%26));
		else
		a.push(String.fromCodePoint(96+j));
	}
	}
  else 
	{
	//只含此数字对应字母的数组
	
		if(number_a>26)
			if(number_a%26==0)
			a.push(String.fromCodePoint(96+parseInt((number_a-1)/26),96+26));
			else
			a.push(String.fromCodePoint(96+parseInt(number_a/26),96+number_a%26));
		else
		a.push(String.fromCodePoint(96+number_a));
	}
	return a;

}

module.exports = get_letter_interval_2;

