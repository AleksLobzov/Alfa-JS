// ONCE
export function joinedArgs() {
  return [].join.call(arguments, ', ')
}

export function once(func) {
  // your code here
  let calculate = true;
  return function() {
    if (calculate) {
      calculate = false;
      return func.apply(this, arguments);
    }
  }
}
