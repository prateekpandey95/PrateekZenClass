let num = [1,4,55,63,44,78,91]

let sum = num.reduce((currenttotal,a) => {

	return currenttotal+a;
},0)

console.log(sum);