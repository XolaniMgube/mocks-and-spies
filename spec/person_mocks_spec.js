let Person = require("../src/person_mocks.js")
let personOne = new Person()

describe("Testing the hello function in the Person Class", function() {
    it("checks if hello() function was called", function() {
        spyOn(personOne, "hello")
        personOne.hello()
        expect(personOne.hello).toHaveBeenCalled()
    })

    it("checks if hello() function was called once", function() {
        spyOn(personOne, "hello")
        personOne.hello()
        expect(personOne.hello).toHaveBeenCalledTimes(1)
    })

    it("checks if hello() function was called with arguments", function() {
        spyOn(personOne, "hello")
        personOne.hello("Xolani", 22)
        expect(personOne.hello).toHaveBeenCalledWith("Xolani", 22)
    })


})
