module.exports = function getMap(srcOptions) {
  var options = {
    height: 10,
    width: 10,
    density: 0.5,
    openMarker: ' ',
    closedMarker: '\u2716'
  };

  extend(options, srcOptions);

  var map = [];
  for(let y=0; y<options.height; y+=1) {
    map[y] = [];

    for(let x=0; x<options.width; x+=1) {
      map[y][x] = getRandomCell(x, y, options);
    }
  };

  return map;
}

function getRandomCell (x, y, options) {
  let cellParams;

  if (Math.random() >= options.density) {
    cellParams = [x, y, true, options.openMarker];
  } else {
    cellParams = [x, y, false, options.closedMarker];
  }

  return getCell(...cellParams);
}

function extend (dest, source) {
  for (key in source) {
    dest[key] = typeof source[key] === 'undefined' ? dest[key] : source[key];
  }

  return dest;
}

function getCell (x, y, isOpen, marker) {
  return {
    root: [x, y],
    position: [x, y],
    isOpen,
    marker,
  }
}