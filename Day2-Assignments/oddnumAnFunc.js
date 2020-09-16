let arr = [10,3,4,5,6,24,53,64];

var result = function(a){
	
	let odd = [];
	for(i= 0; i<a.length;i++)
	{
		if(a[i] % 2 != 0)
		{
			odd.push(a[i]);
		}
	}

	return odd;
}

console.log(result(arr));