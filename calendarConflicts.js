function findCondlicts(cal) {
  var conflicts = [];
  var tempConflicts = [cal[0][2]];
  var end = cal[0][1];
  for (var i = 1; i < cal.length; i++) {
    if (cal[i][0] >= end) { // no conflicts
      if (tempConflicts.length > 1) {
        conflicts.push(tempConflicts);
      }
      tempConflicts = [];
    }
    end = Math.max(cal[i][1], end);
    tempConflicts.push(cal[i][2]);
  }

  if (tempConflicts.length > 1) {
    conflicts.push(tempConflicts);
  }

  return conflicts;
}

var calendar = [
  [1, 2, 'a'],
  [3, 5, 'b'],
  [4, 6, 'c'],
  [7, 10, 'd'],
  [8, 11, 'e'],
  [10, 12, 'f'],
  [13, 14, 'g'],
  [13, 14, 'h'],
];

console.log(findCondlicts(calendar));