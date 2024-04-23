function findDuplicates(lA, lB) {
	let duplicates = [];
	let setA = new Set(lA);
	let setB = new Set(lB);
	// เช็ค
	for (let item of setA) {
		if (setB.has(item)) {
			duplicates.push(item);
		}
	}

	return duplicates;
}

let lA = [1, 2, 3, 5, 6, 8, 9];
let lB = [3, 2, 1, 5, 6, 0];

let result = findDuplicates(lA, lB);
console.log("Duplicate items:", result);
