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

    it("Should return complete lists inside list", () => {
        const data = {
            allValues: [
                { values: ['a']},
                { values: ['b', 'c', 'd']},
                { values: ['e']},
            ],
        }
        const result = deepFind(data, 'allValues.*.values')
        expect(result).to.be.deep.equals([['a'], ['b', 'c', 'd'], ['e']])
    })

    it("Should return complete lists inside direct list", () => {
        const data = {
            allValues: [['a'], ['b', 'c', 'd'], ['e']]
        }
        const result = deepFind(data, 'allValues.*.*')
        expect(result).to.be.deep.equals([['a'], ['b', 'c', 'd'], ['e']])
    })

    it("Should return first value of all lists inside list", () => {
        const data = {
            allValues: [['a'], ['b', '3', '4'], ['c']]
        }
        const result = deepFind(data, 'allValues.*.0')
        expect(result).to.be.deep.equals(['a', 'b', 'c'])
    })

    it("Should return existing path of lists inside direct list", () => {
        const data = {
            allValues: [['a'], ['b', 'c', 'd'], ['e']]
        }
        const result = deepFind(data, 'allValues.?.2')
        expect(result).to.be.deep.equals('d')
    })

    it("Should return existing path inside existing path of lists inside list", () => {
        const data = {
            allValues: [['a'], ['b', { correct: 'correct' }, 'd'], ['e']]
        }
        const result = deepFind(data, 'allValues.?.?.correct')
        expect(result).to.be.deep.equals('correct')
    })
})