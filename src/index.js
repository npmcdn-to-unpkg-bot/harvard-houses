var uniqueRandomArray = require('unique-random-array');
var harvardHouses = require('./harvard-houses.json');
var getRandomHouse = uniqueRandomArray(harvardHouses);

const random = number => {
	if (number === 'undefined') {
		return getRandomHouse();
	} else {
		var getRandomHouses = [];
		for (var i = 0; i < number; i++){
			getRandomHouses.push(getRandomHouse());
		}
		// console.log(getRandomHouses);
		return getRandomHouses;
	}
}

module.exports = {
	all: harvardHouses,
	random: random
};
