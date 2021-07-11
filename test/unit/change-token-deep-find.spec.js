const { expect, assert } = require('chai')

const { deepFind } = require('../../index')

describe("unit.deepFind.token", () => {
    it("Should return default value with default token", () => {
        const sample = { data: { value: 'potato' } }
        const result = deepFind(sample, 'data.value', { token: '.' })
        expect(result).to.be.deep.equals('potato')
    })

    it("Should return default value with different token", () => {
        const sample = { data: { value: 'potato' } }
        const result = deepFind(sample, 'data,value', { token: ',' })
        expect(result).to.be.deep.equals('potato')
    })

    it("Should return error if token is special library character", () => {
        const sample = { data: { value: 'potato' } }
        try {
            deepFind(sample, 'data,value', { token: '?' })
        } catch (err) {
            assert.isNotNull(err)
            return
        }
        assert.fail('Deepfind must throw error.')
    })
})