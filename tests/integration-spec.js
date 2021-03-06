'use strict'

var exec = require('child-process-promise').exec
var expect = require('chai').expect

/* eslint no-undef:0 */

describe('integration test', function () {
  beforeEach(function () {
  })
  it('exists', function () {
    return exec('bunsen')
      .then((response) => {
        expect(response).to.be.ok
      })
  })
  it('it gives help', function () {
    return exec('bunsen -h')
      .then((response) => {
        expect(response).to.be.ok
      })
  })
  it('has a validate command', function () {
    return exec('bunsen validate')
      .then((response) => {
        expect(response).to.be.ok
      })
      .catch((error) => {
        expect(error).to.be.ok
      })
  })
  it('has a convert command', function () {
    return exec('bunsen convert')
      .then((response) => {
        expect(response).to.be.ok
      })
      .catch((error) => {
        expect(error).to.be.ok
      })
  })
  it
})

