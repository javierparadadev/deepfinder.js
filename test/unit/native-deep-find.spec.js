const { expect } = require('chai')

const DeepFinder = require('../../index')
DeepFinder.nativify()

describe("unit.deepFind.native", () => {
    it("Should run native deepFind in object", () => {
        const sample = { value: 'sample-value' }
        const result = sample.deepFind('value')
        expect(result).to.be.deep.equals('sample-value')
    })

    it("Should run native deepFind in list", () => {
        const sample = ['sample-value']
        const result = sample.deepFind('0')
        expect(result).to.be.deep.equals('sample-value')
    })
})