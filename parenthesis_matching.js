let isParenthesisMatching = (str) => {
    let charactersStack = [];

    let opening = {
        '{': '}',
        '[': ']',
        '(': ')'
    };

    let closing = {
        '}': true,
        ']': true,
        ')': true
    }

    for (let i = 0; i < str.length; i++) {

        let character = str[i];

        if (opening[character]) {
            charactersStack.push(character);
        } else if (closing[character]) {
            if (opening[charactersStack.pop()] !== character) return false;
        }
    }
    return str.length > 0 && charactersStack.length === 0
}


module.exports = isParenthesisMatching