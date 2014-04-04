just-debounce
=============

just a basic denounce function

# Why?
I searched npm and the first 3 pages of results for "debounce" did not have a
small corectly implemented version of debounce

# Usage
```
var db = require('just-debounce')

var debounced = db(function(v) {console.log(v)}, 100)

debounce('hi')
debounce('hi')
// logs 'hi' once after 100ms
```
```
var db = require('just-debounce')

var debounced = db(function(v) {console.log(v)}, 100, true)

debounce('hi')
debounce('hi')
// logs 'hi' once right away, but not a second time. calling after 100ms will log again
```
