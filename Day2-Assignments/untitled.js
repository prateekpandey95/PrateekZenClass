let arr = ["Hello", "World", "good mOrNiNg"];

var result = function(a){
	
	let caps = [];
	for(i= 0; i<a.length;i++)
	{
		caps.push(a[i].toUpperCase());
		
	}

	return caps;
}

console.log(result(arr));