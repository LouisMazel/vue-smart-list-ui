Array.prototype.move = function (from, to) {
  this.splice(to, 0, this.splice(from, 1)[0])
}