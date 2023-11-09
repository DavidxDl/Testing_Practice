export default function capitalize(string = '') {
    let stringCapitalized = '';
    let shouldCap = true;
    for (const letter of string) {
        if (shouldCap && letter !== ' ') {
            shouldCap = false;
            stringCapitalized += letter.toUpperCase();
            continue;
        }
        if(letter === '.' || letter === '?') {
            shouldCap = true;
        }
        stringCapitalized += letter;
    }  
    return stringCapitalized;
}