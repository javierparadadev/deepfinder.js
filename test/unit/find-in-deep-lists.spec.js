const { expect } = require('chai')

const { deepFind } = require('../../index')

describe("unit.deepFind.lists", () => {
    it("Should return first value of a list", () => {
        const data = ['a', 'b', 'c']
        const result = deepFind(data, '0')
        expect(result).to.be.deep.equals('a')
    })

    it("Should return first value of a embedded list", () => {
        const data = {
            values: ['a', 'b', 'c'],
        }
        const result = deepFind(data, 'values.0')
        expect(result).to.be.deep.equals('a')
    })

    it("Should return all values of a list", () => {
        const data = {
            values: ['a', 'b', 'c'],
        }
        const result = deepFind(data, 'values.*')
        expect(result).to.be.deep.equals(data.values)
    })

    it("Should return first subvalue of a list", () => {
        const data = {
            values: [
                { value: 'a'},
                { value: 'b'},
                { value: 'c'},
            ],
        }
        const result = deepFind(data, 'values.0.value')
        expect(result).to.be.deep.equals('a')
    })

    it("Should return all subvalues of a list", () => {
        const data = {
            values: [
                { value: 'a'},
                { value: 'b'},
                { value: 'c'},
            ],
        }
        const result = deepFind(data, 'values.*.value')
        expect(result).to.be.deep.equals(data.values.map(obj => obj.value))
    })

    it("Should return first existing path in list", () => {
        const data = {
            values: [
                { nya: 'a'},
                { value: 'b'},
                { nya: 'c'},
            ],
        }
        const result = deepFind(data, 'values.?.value')
        expect(result).to.be.deep.equals('b')
    })
})