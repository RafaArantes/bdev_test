const isParenthesisMatching = require('./parenthesis_matching')


test('Test case #1', () => {
    expect(isParenthesisMatching('(a[0]+2[2c[6]]){24 + 53}')).toBe(true)
})
test('Test case #2', () => {
    expect(isParenthesisMatching('f(e(d))')).toBe(true)
})
test('Test case #3', () => {
    expect(isParenthesisMatching('[()]{}([])')).toBe(true)
})
test('Test case #4', () => {
    expect(isParenthesisMatching('((b)')).toBe(false)
})
test('Test case #5', () => {
    expect(isParenthesisMatching('(c]')).toBe(false)
})
test('Test case #6', () => {
    expect(isParenthesisMatching('{(a[])')).toBe(false)
})
test('Test case #7', () => {
    expect(isParenthesisMatching('([)]')).toBe(false)
})
test('Test case #8', () => {
    expect(isParenthesisMatching(')(')).toBe(false)
})
test('Test case #9', () => {
    expect(isParenthesisMatching('')).toBe(false)
})