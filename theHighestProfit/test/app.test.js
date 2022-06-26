const profit = require("./../app/app");
test("Highest profit possible", () => {
    expect(profit([1, 2, 3, 4, 5])).toStrictEqual([1, 5]);
});

test("Highest profit possible", () => {
    expect(profit([2334454,5])).toStrictEqual([5, 2334454]);
});

test("Highest profit possible", () => {
    expect(profit([5])).toStrictEqual([5, 5]);
});
