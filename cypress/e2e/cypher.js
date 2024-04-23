function decryptString(encryptedString, k) {
	const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
	let decryptedString = "";

	for (let i = 0; i < encryptedString.length; i++) {
		const encryptedChar = encryptedString[i];
		const encryptedIndex = alphabet.indexOf(encryptedChar);
		const decryptedIndex =
			(encryptedIndex - k + alphabet.length) % alphabet.length;
		decryptedString += alphabet[decryptedIndex];
	}

	return decryptedString;
}

const encryptedString = "DEF";
const k = 5;
const decryptedString = decryptString(encryptedString, k);
console.log("Decrypted string:", decryptedString);
