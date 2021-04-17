const { expect } = require('chai')

const { deepGet } = require('../../index')

describe("unit.deepGet.types", () => {
    it("Should find basic number", () => {
        data = 39
        const result = deepGet(data, '')
        expect(result).to.be.equals(39)
    })
    it("Should find basic number inside object", () => {
        data = {
            value: 39,
        }
        const result = deepGet(data, 'value')
        expect(result).to.be.equals(39)
    })
})