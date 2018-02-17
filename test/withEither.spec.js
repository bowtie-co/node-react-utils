/* eslint-env mocha */
/* eslint-disable no-unused-expressions */

const expect = require('chai').expect
const { withEither } = require('../')

describe('withEither', function () {
  it('should exist as a function', function () {
    expect(withEither).to.exist
    expect(withEither).to.be.a('function')
  })
})
