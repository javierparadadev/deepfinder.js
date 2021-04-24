const { expect } = require('chai')

const { deepFind } = require('../../index')

describe("unit.deepFind.types", () => {
    it("Should find basic number", () => {
        const data = 39
        const result = deepFind(data, '')
        expect(result).to.be.equals(39)
    })

    it("Should find basic number inside object", () => {
        const data = {
            value: 39,
        }
        const result = deepFind(data, 'value')
        expect(result).to.be.equals(39)
    })

    it("Should find basic string", () => {
        const data = 'test str'
        const result = deepFind(data, '')
        expect(result).to.be.equals('test str')
    })

    it("Should find basic string inside object", () => {
        const data = {
            value: 'test str',
        }
        const result = deepFind(data, 'value')
        expect(result).to.be.equals('test str')
    })
})