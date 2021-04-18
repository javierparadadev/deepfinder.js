const { expect } = require('chai')

const { deepFind } = require('../../index')

describe("unit.deepFind.lvls", () => {
    it("Should return value with 0 depth lvls", () => {
        const data = {
            value: 39,
        }
        const result = deepFind(data, '')
        expect(result).to.be.deep.equals(data)
    })

    it("Should return value with 1 depth lvl", () => {
        const data = {
            value: 39,
        }
        const result = deepFind(data, 'value')
        expect(result).to.be.equals(data.value)
    })

    it("Should return value with 2 depth lvls", () => {
        const data = {
            subdata: {
                value: 39,
            },
        }
        const result = deepFind(data, 'subdata.value')
        expect(result).to.be.equals(data.subdata.value)
    })

    it("Should return value with 3 depth lvls", () => {
        const data = {
            subdata: {
                subsubdata: {
                    value: 39,
                },
            },
        }
        const result = deepFind(data, 'subdata.subsubdata.value')
        expect(result).to.be.equals(data.subdata.subsubdata.value)
    })
})