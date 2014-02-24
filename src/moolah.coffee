class Moolah
  constructor: (input = "0") ->
    @input = this._normalizeInput(input)

  _normalizeInput: (input) ->
    isString = (obj) ->
      Object.prototype.toString.call(obj) == '[object String]'

    unless isString(input)
      throw new Error("Moolah must be initialized with a String")

    input

  # _padInput: (x, y) ->
  #   smallerArray = (a, b) ->
  #     arrayDiff(a, b) > 0 ? b : a

  #   arrayDiff = (a, b) ->
  #     a.length - b.length

  #   leftPad = (str, len) ->
  #     while (str.length < len)
  #       str = "0" + str
  #     str

  #   smaller = smallerArray(x, y)
  #   leftPad(smaller, Math.abs(arrayDiff(x, y)))
  #     

  add: (input) ->
    input = this._normalizeInput(input)

    addendA = @input.split("")
    addendB = input.split("")
    i = if addendA.length > addendB.length then addendA.length else addendB.length

    output = ""
    carryover = 0
    while (i--)
      a = parseInt(addendA[i] || 0, 10)
      b = parseInt(addendB[i] || 0, 10)
      # console.log("I=", i, addendA[i], "A=", a, "B=", b)
      a += carryover
      carryover = 0
      c = a + b
      if c >= 10
        carryover = 1
        if c == 10
          c = 0
        else
          c = c % 10
      output = "#{c}" + output
      # console.log("Output = ", output)

    # console.log('Final', output)
    new Moolah(output)


exports.Moolah = Moolah
