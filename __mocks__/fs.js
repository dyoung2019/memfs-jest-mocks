'use strict';

const { fs: fsm, vol } = require('memfs')
const fs = jest.createMockFromModule('fs')

fs.__fromJSON = (json, path) => {
  vol.fromJSON(json, path)
}

fs.__asJSON = () => {
  return vol.toJSON()
}

const mergedMock = {...fs, ...fsm, __vol:vol, __fs: fsm}

module.exports = mergedMock