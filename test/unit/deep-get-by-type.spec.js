const { expect } = require('chai')

const { deepGet } = require('../../index')

describe("unit.deepGet.types", () => {
    it("Should find basic number", () => {
        const data = 39
        const result = deepGet(data, '')
        expect(result).to.be.equals(39)
    })

    it("Should find basic number inside object", () => {
        const data = {
            value: 39,
        }
        const result = deepGet(data, 'value')
        expect(result).to.be.equals(39)
    })

    it("Should find basic string", () => {
        const data = 'test str'
        const result = deepGet(data, '')
        expect(result).to.be.equals('test str')
    })

    it("Should find basic string inside object", () => {
        const data = {
            value: 'test str',
        }
        const result = deepGet(data, 'value')
        expect(result).to.be.equals('test str')
    })
})