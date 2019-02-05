const MORSE_CODE = {
	'-.-.--': '!',
	'.-..-.': '"',
	'...-..-': '$',
	'.-...': '&',
	'.----.': "'",
	'-.--.': '(',
	'-.--.-': ')',
	'.-.-.': '+',
	'--..--': ',',
	'-....-': '-',
	'.-.-.-': '.',
	'-..-.': '/',
	'-----': '0',
	'.----': '1',
	'..---': '2',
	'...--': '3',
	'....-': '4',
	'.....': '5',
	'-....': '6',
	'--...': '7',
	'---..': '8',
	'----.': '9',
	'---...': ':',
	'-.-.-.': ';',
	'-...-': '=',
	'..--..': '?',
	'.--.-.': '@',
	'.-': 'A',
	'-...': 'B',
	'-.-.': 'C',
	'-..': 'D',
	'.': 'E',
	'..-.': 'F',
	'--.': 'G',
	'....': 'H',
	'..': 'I',
	'.---': 'J',
	'-.-': 'K',
	'.-..': 'L',
	'--': 'M',
	'-.': 'N',
	'---': 'O',
	'.--.': 'P',
	'--.-': 'Q',
	'.-.': 'R',
	'...': 'S',
	'-': 'T',
	'..-': 'U',
	'...-': 'V',
	'.--': 'W',
	'-..-': 'X',
	'-.--': 'Y',
	'--..': 'Z',
	'..--.-': '_',
	'...---...': 'SOS'
};

Object.freeze(MORSE_CODE);

/**
 * This is the entry point to the program.
 *
 * @param {string} morseCode The string to decode.
 */
function decodeMorse(morseCode) {
	// Your code should go here.

	// convert morse code into string separated by spaces
	let morseArr = morseCode.split('   '),
		wordArr = [];

	// loop over each item in array and split into individual letters
	morseArr.forEach((word) => {
		let nWord = word.split(' ');
		// push each mini array into new array
		wordArr.push(nWord);
	});

	// loop over each item in main array
	wordArr.forEach((word) => {
		word.forEach((key) => {
			// loop over each mini array and check if letter is present in morse code keys
			if (key in MORSE_CODE) {
				// replace morse code with exact translation
				word.splice(word.indexOf(key), 1, MORSE_CODE[key]);
			}
		});
	});

	let newArr = [];
	wordArr.forEach((item) => {
		// loop over each item in main array and convert to string then push to new arrau
		newArr.push(item.toString());
	});

	return newArr.join(' ').split(',').join('').trim();
}

// console.log(decodeMorse('   .   .'));

module.exports = decodeMorse;
