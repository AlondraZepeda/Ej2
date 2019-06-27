module.exports = {
	checkPalindrome(inputString) {
		let a = '';
		let b = '';
		let size = 0;
		if(inputString.length % 2 == 0) {
			size = Math.ceil(inputString.length/2);
		} else {
			size = Math.ceil((inputString.length/2)-1);
		}
		for (let i = 0; i < size; i++) {
			a = inputString.substring(i, i + 1);
			b = inputString.substring(inputString.length - i -1, inputString.length - i);
			if (a !== b) {
				console.log('No es palindromo');
				return false;
			}
		}
		console.log('Es palindromo');
		return true;
	},
	countWords(text){
		const words = text.split(' ');
		console.log(words.length);
		return words.length;
	},
	countLetters(text){
		const newText = text.replace(/\s+/g, '');
		console.log('Texto sin espacios: ' + newText);
		console.log('Cantidad de letras: ' + newText.length);
		return newText.length;
	},
	countVowels(text) {
		const vowels = ['a','e','i','o','u'];
		let vowelsQty = 0;
		for(let i = 0; i < text.length; i++) {
			for(let j = 0; j < vowels.length; j++) {
				if(text[i] === vowels[j]) vowelsQty ++;
			}
		}
		console.log(vowelsQty);
		return vowelsQty;
	},
	countConsonants(text) {
		const consonants = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'v' ,'w', 'x' ,'y' ,'z'];
		let consonantsQty = 0;
		for(let i = 0; i < text.length; i++) {
			for(let j = 0; j < consonants.length; j++) {
				if(text[i] === consonants[j]) consonantsQty ++;
			}
		}
		console.log(consonantsQty);
		return consonantsQty;
	}
}

