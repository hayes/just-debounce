just-debounce
=============

just a basic denounce function

# Why?
I searched npm and the first 3 pages of results for "debounce" did not have a
small corectly implemented version of debounce

# Usage

### arguments
* `fn`: the function to debounce
* `delay`: deboucne delay in ms
* `at_start:` if true, the function will be called at the begining of the
delay rather than the end
* `guarantee`: ensures the time before the next call th `fn` is not greater \
than the delay perior.
```
var db = require('just-debounce')

var debounced = db(function(v) {console.log(v)}, 100)

debounced('hi')
debounced('hi')
// logs 'hi' once after 100ms
```
```
var db = require('just-debounce')

var debounced = db(function(v) {console.log(v)}, 100, true)

debounced('hi')
debounced('hi')
// logs 'hi' once right away, but not a second time. calling after 100ms will log again
```
```
var db = require('just-debounce')

var debounced = db(function(v) {console.log(v)}, 100, false, true)

debounced('hi')
setTimeout(function() {debounced('hi2')}, 80)

// logs 'hi2' once 100ms after the first call to debounced
```
