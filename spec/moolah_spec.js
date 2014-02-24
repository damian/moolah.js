var Moolah = require('../build/moolah').Moolah;

describe("Moolah.js", function() {
  it("should store the passed in value if its a String", function() {
    var m = new Moolah("29");
    expect(m.input).toBe("29");
  });

  it("should throw an Error if the passed in value is not a String", function() {
    expect(function() { new Moolah(232); }).toThrow(new Error("Moolah must be initialized with a String"));
  });

  describe("addition", function() {
    it("should add 198 and 281 to get 479", function() {
      var x = new Moolah("198");
      expect(x.add("281").input).toEqual("479");
    });

    it("should add 198000 and 281 to get 198281", function() {
      var x = new Moolah("198000");
      expect(x.add("281").input).toEqual("479000");
    });

    it("should add 198000 and 281 to get 198281", function() {
      var x = new Moolah("281");
      expect(x.add("198000").input).toEqual("479000");
    });

    it("should add '01' and '010' get 11", function() {
      var x = new Moolah("01");
      expect(x.add("010").input).toEqual("11");
    });

  });
});
