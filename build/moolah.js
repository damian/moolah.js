var Moolah;

Moolah = (function() {
  function Moolah(input) {
    if (input == null) {
      input = "0";
    }
    this.input = this._normalizeInput(input);
  }

  Moolah.prototype._normalizeInput = function(input) {
    var isString;
    isString = function(obj) {
      return Object.prototype.toString.call(obj) === '[object String]';
    };
    if (!isString(input)) {
      throw new Error("Moolah must be initialized with a String");
    }
    return input;
  };

  Moolah.prototype.add = function(input) {
    var a, addendA, addendB, b, c, carryover, i, output;
    input = this._normalizeInput(input);
    addendA = this.input.split("");
    addendB = input.split("");
    i = addendA.length > addendB.length ? addendA.length : addendB.length;
    output = "";
    carryover = 0;
    while (i--) {
      a = parseInt(addendA[i] || 0, 10);
      b = parseInt(addendB[i] || 0, 10);
      a += carryover;
      carryover = 0;
      c = a + b;
      if (c >= 10) {
        carryover = 1;
        if (c === 10) {
          c = 0;
        } else {
          c = c % 10;
        }
      }
      output = ("" + c) + output;
    }
    return new Moolah(output);
  };

  return Moolah;

})();

exports.Moolah = Moolah;
