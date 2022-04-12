// Strings Mix
// CodeWars Kata: https://www.codewars.com/kata/5629db57620258aa9d000014

function stringsMix(s1, s2) {
  const lowRegex = /[a-z]/g;
  const noSame = (arr) => arr.filter((x, i) => arr.indexOf(x) === i);
  const matchOne = s1.match(lowRegex);
  const matchTwo = s2.match(lowRegex);
  const mixed = {};

  for (const letter of noSame(matchOne ? matchOne : [])) {
    const length = matchOne.filter(x => x === letter).length;
    mixed[letter] = [length > 1 ? length : 0, 0];
  }
  for (const letter of noSame(matchTwo ? matchTwo : [])) {
    const firstLetter = mixed[letter] ? mixed[letter] : [0];
    const length = matchTwo.filter(x => x === letter).length;
    mixed[letter] = [firstLetter[0], length > 1 ? length : 0];
  }

  return Object.keys(mixed)
    .filter(x => mixed[x][0] !== 0 || mixed[x][1] !== 0)
    .sort((a, b) => {
      const maxA = Math.max(...mixed[a]);
      const maxB = Math.max(...mixed[b]);
      const sortProp = {
        '1': 1,
        '2': 2,
        '=': 3
      };

      if (maxA !== maxB) return maxB - maxA;
      else {
        const aSign = `${noSame(mixed[a]).length === 1 ? '=' : mixed[a].indexOf(maxA) + 1}`
        const bSign = `${noSame(mixed[b]).length === 1 ? '=' : mixed[b].indexOf(maxB) + 1}`
        const propA = sortProp[aSign];
        const propB = sortProp[bSign];

        if (propA === propB) {
          return [a, b].sort()[0] === a ? -1 : 1;
        } else return [sortProp[aSign], sortProp[bSign]].sort((a, b) => b - a)[0] === sortProp[aSign] ? 1 : -1
      }
    })
    .map((x, i) => {
      const data = mixed[x];
      let prefix = "=";
      let length = data[0];
      if (data[0] !== data[1]) {
        const isFirstMore = data[0] > data[1];
        prefix = isFirstMore ? 1 : 2;
        length = isFirstMore ? data[0] : data[1];
      }

      return `${prefix}:${x.repeat(length)}`;
    }).join("/");
}

console.log(stringsMix("wweellpp", "weeelppp"));
