const expect = {
  equal: (first, second) => {
    console.log(equal(first, second));
  }, 
  hasLength: (a, l) => {
    console.log(hasLength(a, l));
  }
}

function equal(first, second) {
  return first === second;
}

function hasLength(ar, length) {
  return ar.length === length;
}

function findCubicPairs(limit) {
  const pairs = {};
  for(let a=1; a<=limit; a++) {
    for(let b=a; b<=limit; b++) {
      const sum = Math.pow(a, 3) + Math.pow(b, 3);
      if (!pairs[sum]) {
        pairs[sum] = [];
      }

      pairs[sum].push([a, b]);
    }
  }

  return pairs;
}

const sums = findCubicPairs(25);
const matching = Object.keys(sums).filter(s => sums[s].length > 1).reduce((acc, cur) => {
  acc[cur] = sums[cur];
  return acc;
}, {});

console.log(matching);

findCubicPairs(1)
expect.hasLength(Object.keys(findCubicPairs(1)), 1);
expect.hasLength(findCubicPairs(1)[2], 1);
expect.equal(findCubicPairs(1)[2][0][0], 1);