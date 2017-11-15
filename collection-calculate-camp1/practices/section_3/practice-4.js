'use strict';

module.exports = function createUpdatedCollection(collection, objectB) {
       var a=[{key:'a' ,count:0}];
		for(let i=0;i<collection.length;i++)
		{
			var lag1=0,lag2=0;
			if(collection[i].length==1)
			{
				for(let j=0;j<a.length;j++)
				if(collection[i]==a[j].key)
					{
					
					   a[j].count++;
					   lag1=1;
					   continue;
					}
				if(lag1!=1)
				a.push({key:collection[i],count:1});

			}
			if(collection[i].length>1)
				{
					var num=0;
				if(collection[i].charAt(1)==':'||collection[i].charAt(1)=='-')
				num=parseInt(collection[i].substring(2,collection[i].length));
				else
				num=parseInt(collection[i].substring(2,collection[i].length-1));

					for(let k=0;k<a.length;k++)
					{
						if(collection[i].charAt(0)==a[k].key)
						{
							a[k].count+=num
							lag2=1;
							continue;
						}
					}
					if(lag2!=1)
                   a.push({key:collection[i].charAt(0),count:num});
						
				}				
		}

	for(let i=0;i<a.length;i++)
		for(let j=0;j<objectB.value.length;j++)
			if(a[i].key==objectB.value[j])
			a[i].count-=parseInt(a[i].count/3);
	return a;
}
