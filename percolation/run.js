const Percolation = require('./percolation');
const fs = require('fs');

fs.readFile('/Users/kpr/Downloads/percolation/jerry47.txt', 'utf8', (err, data) => {
  if (err) {
    console.log(err);
  }

  const lines = data.split('\n');
  const size = parseInt(lines.shift(), 10);

  const perc = new Percolation(size);

  lines.forEach(line => {
    if (!line.length) {
      return;
    }

    let [y, x] = line.split(' ').filter(entry => !!entry.length);
    x = parseInt(x);
    y = parseInt(y);
    perc.open(x, y, 1);
  });

  console.log(perc.toString());
  console.log(perc.percolates());
});