const pinakas = [ 25, 3, 9, 8, 7, 8, 9, 8 ];

//dialegi enan tixeo apo ton pinaka pou  t dosame
const random = {
	myArray(...arr) {
		let random = Math.floor(Math.random() * arr.length);
		return arr[random];
	},
	number(arr) {
		return Math.floor(Math.random() * arr);
	},
	array(arr) {
		let random = Math.floor(Math.random() * arr.length);
		return arr[random];
	}
};
