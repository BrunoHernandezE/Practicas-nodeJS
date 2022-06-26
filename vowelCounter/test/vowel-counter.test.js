const counter = require("./../app/vowel-counter");

test("cornea", () => {
    expect(counter("cornea")).toBe(3);
});
test("morrillo", () => {
    expect(counter("morrillo")).toBe(3);
});
test("genetista", () => {
    expect(counter("genetista")).toBe(4);
});
test("iguna la rana", () => {
    expect(counter("iguna la rana")).toBe(6);
});
// test("cornea", () => {
//     expect(counter("cornea")).toBe(3);
// });