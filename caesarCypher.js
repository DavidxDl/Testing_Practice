 export default function caesarCypher(string = '', key){
    let cypherString = '';
    for (const letter in string) {
        const asciiChar = { 
            asciiNumber: string.charCodeAt(letter) + key,
            isLowerCase: string.charCodeAt(letter) > 90 ? true : false
        }

        if(string[letter] === ' ') {
            cypherString += string[letter];
            continue;
        }
        if(asciiChar.asciiNumber > 122 || (asciiChar.asciiNumber > 90 && !asciiChar.isLowerCase))
             asciiChar.asciiNumber -= 26; // if letter is z wrap arround

        cypherString += String.fromCharCode(asciiChar.asciiNumber);
    }
    return cypherString;
}