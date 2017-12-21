
function Node(value) {
  this.value = value;
  this.edges = [];
  this.searched = false;
  this.parent = null;
}

Node.prototype.addEdge = function(neighbor) {
  //Add a new edge
  this.edges.push(neighbor);
  neighbor.edges.push(this);
}
