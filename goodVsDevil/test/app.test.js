const winnerSpected = require("./../app/app");
test("Test", () => {
    expect(winnerSpected('1 1 1 1 1 1', '1 1 1 1 1 1 1')).toBe('Battle Result: Evil eradicates all trace of Good');
});
test("Test", () => {
    expect(winnerSpected('0 0 0 0 0 10', '0 1 1 1 1 0 0')).toBe('Battle Result: Good triumphs over Evil');
});
test("Test", () => {
    expect(winnerSpected('1 0 0 0 0 0', '1 0 0 0 0 0 0')).toBe('Battle Result: No victor on this battle field');
});