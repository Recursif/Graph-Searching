
function Graph() {
    this.nodes = [];
    this.graph = {};
    this.end = null;
    this.start = null;
}

Graph.prototype.reset = function() {
  for (var i = 0; i <  this.nodes.lenght; i++) {
    this.nodes[i].searched = false;
    this.nodes[i].parent = null;
  }
}

Graph.prototype.addNode = function(n) {
  this.nodes.push(n);
  var title = n.value;
  this.graph[title]
}

Graph.prototype.setStart = function(actor) {
  this.start = this.graph[actor];
  return this.start;
}

Graph.prototype.setEnd = function(actor) {
  this.end = this.graph[actor];
  return this.end;
}


Graph.prototype.getNode = function(actor) {
  var n = this.graph[actor];
  return n;
}
