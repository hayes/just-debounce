module.exports = debounce

function debounce(fn, delay, at_start) {
  var timeout

  if(typeof delay === 'undefined') {
    delay = 0
  }

  return function() {
    var args = Array.prototype.slice.call(arguments)
      , self = this

    if(timeout && at_start) {
      return
    } else if(!at_start) {
      clear()
      return timeout = setTimeout(run, delay)
    }

    timeout = setTimeout(clear, delay)
    fn.apply(self, args)

    function run() {
      clear()
      fn.apply(self, args)
    }

    function clear() {
      clearTimeout(timeout)
      timeout = null
    }
  }
}
