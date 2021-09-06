function add(a, b, c, d, e) {
  return a + b + c + d + e
}

function curry (fn) {
  if (!fn || typeof fn !== 'function') {
    return '请输入函数'
  }
  var args = Array.prototype.slice.call(arguments)
  args = args.slice(1)
  if (args.length >= fn.length) {
    return fn.apply(args)
  }
  return function () {
    var argsInner = Array.prototype.slice.call(arguments)
    var allArg = args.concat(argsInner)
    if (allArg.length >= fn.length) {
      return fn.apply(null, allArg)
    } else {
      allArg.unshift(fn)
      return curry.apply(null, allArg)
    }
  }
}

console.log(curry(add, 1)(3, 2)(4, 5))
