var PEG = require('/usr/local/lib/node_modules/pegjs');
var assert = require('assert');
var fs = require('fs'); // for loading files

// Read file contents
var data = fs.readFileSync('wt-grammar.peg', 'utf-8');
// Show the PEG grammar file
console.log(data);
// Create my parser
var parse = PEG.buildParser(data).parse;
// Do a test
//assert.deepEqual( parse("(a b c)"), ["a", "b", "c"] );
console.log(parse("μπροστά 10"));
