const morseDecoder = require("./../app/index");

test("Text message: ", () => {
    expect(morseDecoder(".... . -.--   .--- ..- -.. .")).toBe("HEY JUDE")
})

test("Text message: ", () => {
    expect(morseDecoder("")).toBe("")
})

test("Text message: ", () => {
    expect(morseDecoder("")).toBe("")
})

test("Text message: ", () => {
    expect(morseDecoder("")).toBe("")
})
