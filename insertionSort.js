let arr = [6,4,8,1,2,9,7,3,5];
let swap = true;
console.log(arr.toString());
for(let i = 1; i < arr.length; i++)
{
	console.log(arr[i]);
	let j = i - 1;
    let m = i;
    while ( j >= 0 && arr[j] > arr[m]){
    	arr.splice(j, 0, arr.splice(m,1)[0]);
        m = j;
        j--;
    }
  	console.log(arr.toString());
}
