var code = require("../js/utility");

describe("Word Checker", function() {
  it("should return true if the word is the same or only has one letter wrong", function() {
    expect(code.checkWord("test", "test")).toEqual(true);
    expect(code.checkWord("test", "taest")).toEqual(true);
    expect(code.checkWord("atest", "test")).toBe(true);
    expect(code.checkWord("test", "testee")).toBe(false);
    expect(code.checkWord("test", "wrong")).toBe(false);
  });
});
