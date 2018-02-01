function findDinnerParties(friends, tableSize) {
  // const groups = [];
  return combineFriends(friends, tableSize, 0, [], []);

  function combineFriends(friends, tableSize, position = 0, group = [], groups) {
    if (group.length >= tableSize) {
      groups.unshift(group);
    } else if (position < friends.length) {
      // leave
      combineFriends(friends, tableSize, position + 1, group, groups);
      // take
      newGroup = Object.assign([], group);
      newGroup.push(friends[position]);
      combineFriends(friends, tableSize, position + 1, newGroup, groups);
      return groups;
    }
  }
}

console.log(findDinnerParties(['a', 'b', 'c', 'd', 'e', 'f', 'g'], 5));