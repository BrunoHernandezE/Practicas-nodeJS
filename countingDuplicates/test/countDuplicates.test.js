const counter = require("./../app/countDuplicates");

test("abcde", () => {
    expect(counter("abcde")).toBe(0);
})
test("aabBcd", () => {
    expect(counter("aabBcd")).toBe(2);
})
test("lasd121", () => {
    expect(counter("lasd121")).toBe(1);
})
test("Indivisibilities", () => {
    expect(counter("Indivisibilities")).toBe(2);
})
test("ABBA", () => {
    expect(counter("ABBA")).toBe(2);
})