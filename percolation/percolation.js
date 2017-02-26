const getMap = require('./map');

function Percolation (size) {
  this._openMarker = ' ';
  const options = {
    height: size,
    width: size,
    density: 1,
    openMarker: this._openMarker
  };
  this.site = getMap(options);
  this.size = size;
  this.numberOfOpenSites = 0;

  this.virtualTop = {
    root: ['top', 'top'],
    position: ['top', 'top'],

  };
  this.virtualBottom = {
    root: ['bottom', 'bottom'],
    position: ['bottom', 'bottom'],
  };

  return this;
}

Percolation.prototype.open = function(x, y, base) {
  if (base) {
    x = x - base;
    y = y - base;
  }

  checkRange(x, y);

  if (!this.site[y][x].isOpen) {
    this.site[y][x].isOpen = true;
    this.site[y][x].marker = this._openMarker;
    this.numberOfOpenSites += 1;

    const neighbors = getOpenNeighbors (this.site, x, y, this.size);
    if (y === 0) {
      neighbors.push(this.virtualTop)
    } else if (y === this.size - 1) {
      neighbors.push(this.virtualBottom);
    }
    neighbors.forEach(neighbor => {
      unite(this.site[y][x], neighbor, this.site);
    });
  }

  return this.site[y][x];
};

Percolation.prototype.isOpen = function(x, y) {
  checkRange(x, y);

  return this.site[y][x].isOpen;
};

Percolation.prototype.isFull = function(x, y) {
  return !this.isOpen(x, y);
};

Percolation.prototype.toString = function() {
  return this.site.map(row => {
    return row.map(cell => cell.marker).join('');
  }).join('\n');
};

Percolation.prototype.percolates = function() {
  return getRoot(this.site, this.virtualBottom) === getRoot(this.site, this.virtualTop);
};

// private

function getRoot (map, cell, top) {
  while (cell.root[0] !== cell.position[0] || cell.root[1] !== cell.position[1]) {
    cell = map[cell.root[1]][cell.root[0]];
  }
  return cell;
}

function getOpenNeighbors (map, x, y, size) {
  let openNeighbors = [];

  if (y-1 >= 0 && map[y-1][x].isOpen) openNeighbors.push(map[y-1][x]);
  if (y+1 < size && map[y+1][x].isOpen) openNeighbors.push(map[y+1][x]);
  if (x-1 >= 0 && map[y][x-1].isOpen) openNeighbors.push(map[y][x-1]);
  if (x+1 < size && map[y][x+1].isOpen) openNeighbors.push(map[y][x+1]);

  return openNeighbors;
}

function unite (newCell, oldCell, map) {
  const oldRoot = getRoot(map, oldCell);
  const newRoot = getRoot(map, newCell);

  oldRoot.root[0] = newRoot.root[0];
  oldRoot.root[1] = newRoot.root[1];
};

function checkRange (x, y) {
  if (x >= this.size || y >= this.size) {
    throw new Error('Out of range');
  }
}

module.exports = Percolation;