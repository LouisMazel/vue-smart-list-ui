Array.prototype.move = function (from, to) {
  this.splice(to, 0, this.splice(from, 1)[0])
}

Number.isInteger = Number.isInteger || function(value) {
  return typeof value === "number" && 
         isFinite(value) && 
         Math.floor(value) === value
}