
function caesar(str, shift) {
    let strResult = '';
    const string = str.toUpperCase();
    for (let index = 0; index < string.length; index++) {
        let code = string.charCodeAt(index);
        if (code >= 65 && code <= 90) {
            if (code > 90) code = code - 26;
            strResult+=String.fromCharCode(code + shift) ;
        } else strResult+=string[index];
    }
    return strResult;
}

module.exports = caesar;