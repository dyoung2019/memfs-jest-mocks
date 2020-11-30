jest.mock('fs');

describe('copy test', () => {
  const json = {
    './README.md': '1',
    './src/index.js': '2',
    './node_modules/debug/index.js': '3',
  };
  const fs = require('fs')

  fs.__fromJSON(json, '/app');
  
  const val1 = fs.readFileSync('/app/README.md', 'utf8'); // 1
  it('read val 1', () => {
    expect(val1).toEqual('1')
  })

  const val2 = fs.readFileSync('/app/src/index.js', 'utf8'); // 2
  it('read val 2', () => {
    expect(val2).toEqual('2')
  })  

  const val3 = fs.__asJSON(); // 2
  it('internal read', () => {
    expect(val3['/app/node_modules/debug/index.js']).toEqual('3')
  })  

})