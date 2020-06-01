//askisi  bazeis mia leksi k stin bgazei m ena gramma meta
//na ftiaksw  tin ftiaksw dn kanei rest ta grammata
//const words = "thanos";
const allLatter = [ ...'abcdefghijklmnopqrstuvwxyz' ];
const thesi = [];

const nextLatter = (words) =>
	words.split('').map((element, idx) => {
		thesi.push(allLatter.indexOf(element));
		return allLatter[thesi[idx] + 1];
	});



	

