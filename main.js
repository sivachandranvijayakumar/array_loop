//1.print array in reverse order    

	// let original_array = [1, 2, 3, 4, 5];

	// let reversed_array = [];

	// for (let i = original_array.length - 1; i >= 0; i--) 
	// {
		// reversed_array.push(original_array[i]);
	// }

	// console.log("Reversed Array: ");
	// console.log(reversed_array);
	
		let num=[10,20,30,40,50];
		for(let i=(num.length-1);i>=0;i--){
			console.log("reverse order:",num[i]);
		}

//2.two array concat and reverse order


	let arr1=[1,2,3];
	let arr2=[4,5,6];
	
	let con=arr1.concat(arr2);
	console.log("concat value:",con);
	for(let i=(con.length-1);i>=0;i--){
		console.log("reversed value:",con[i]);
	}
	
	// let rev=con.reverse();
	// console.log("reverse value:",rev);
	
	
//3.array increment and multiply

	// let val=[1,2,3,4,5];
	// let add=2;
	// let mul=3;
	
	// let addval=val.map(element=>element+add);
	// let mulval=val.map(element=>element*mul);
	
	// console.log("added value:",addval);
	// console.log("multiplied value:",mulval);
	
	
	let org_arr=[1,2,3,4,5];
	let add=2;
	let mul=3;
	
	for(let i=0;i<org_arr.length;i++){
		console.log("array increment and multiplied value:",(org_arr[i]+add)*mul);
	}