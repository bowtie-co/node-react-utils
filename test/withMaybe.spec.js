/* eslint-env mocha */
/* eslint-disable no-unused-expressions */

const expect = require('chai').expect
const { withMaybe } = require('../')

describe('withMaybe', function () {
  it('should exist as a function', function () {
    expect(withMaybe).to.exist
    expect(withMaybe).to.be.a('function')
  })
})
