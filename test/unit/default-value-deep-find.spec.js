const { expect } = require('chai')

const { deepFind } = require('../../index')

describe("unit.deepFind.default", () => {
    it("Should return default value if result is undefined", () => {
        const sample = { value: 'sample-value' }
        const result = deepFind(sample, 'potato', { defaultReturn: 'tomato' })
        expect(result).to.be.deep.equals('tomato')
    })

    it("Should return default value if result is null", () => {
        const sample = { value: null }
        const result = deepFind(sample, 'value', { defaultReturn: 'tomato' })
        expect(result).to.be.deep.equals('tomato')
    })

    it("Should not return default value if result is null and we set null as value", () => {
        const sample = { value: null }
        const result = deepFind(sample, 'value', { defaultReturn: 'tomato', returnDefaultIfNull: false })
        expect(result).to.be.deep.equals(null)
    })

    it("Should return default value if result is null and we override null as undefined", () => {
        const sample = { value: null }
        const result = deepFind(sample, 'potato', { defaultReturn: 'tomato', returnDefaultIfNull: true })
        expect(result).to.be.deep.equals('tomato')
    })

    it("Should not return default value if result is 0", () => {
        const sample = { value: 0 }
        const result = deepFind(sample, 'value', { defaultReturn: 'potato' })
        expect(result).to.be.deep.equals(0)
    })

    it("Should not return default value if result is -0", () => {
        const sample = { value: -0 }
        const result = deepFind(sample, 'value', { defaultReturn: 'potato' })
        expect(result).to.be.deep.equals(-0)
    })

    it("Should not return default value if result is 0n", () => {
        const sample = { value: 0n }
        const result = deepFind(sample, 'value', { defaultReturn: 'potato' })
        expect(result).to.be.deep.equals(0n)
    })

    it("Should not return default value if result is empty string", () => {
        const sample = { value: '' }
        const result = deepFind(sample, 'value', { defaultReturn: 'potato' })
        expect(result).to.be.deep.equals('')
    })

    it("Should not return default value if result is false", () => {
        const sample = { value: false }
        const result = deepFind(sample, 'value', { defaultReturn: 'potato' })
        expect(result).to.be.deep.equals(false)
    })

    it("Should not return default value if result is NaN", () => {
        const sample = { value: NaN }
        const result = deepFind(sample, 'value', { defaultReturn: 'potato' })
        expect(result).to.be.deep.equals(NaN)
    })
})