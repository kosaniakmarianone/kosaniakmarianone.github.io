/*
#1

Find max and min value

const arr_3 = [3, 8, 1, 9, 10, 3];

let max = arr_3[0];

let min = arr_3[0];

for(i=0;i<arr_3.length;i++){
	if(arr_3[i] > max){
		max = arr_3[i];
	}
	if(arr_3[i] < min){
		min = arr_3[i];
	}
}
console.log(`MAX - ${max}, MIN - ${min}`)
*/

/*
#2

Unique values
const arr_1 = [1, 2, 2, 3, 4, 1, 3, 5];

const new_arr_1 = [];

for(i=0;i<arr_1.length;i++){
	if(new_arr_1.indexOf(arr_1[i]) === -1){
		new_arr_1.push(arr_1[i]);
	}
}
console.log(new_arr_1)
*/

/*
#3

New array with unique values from 2 arrays;

const arr_1 = [1, 2, 3, 4];

const arr_2 = [3, 8, 1, 9, 10];

for( i = 0; i < arr_2.length; i++ ){
	
	if( arr_1.indexOf(arr_2[i]) === -1 ){
		arr_1.push(arr_2[i])
	}
	
}

console.log(arr_1)
*/