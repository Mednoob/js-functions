// Josephus Permutation
// WikiPedia: https://en.wikipedia.org/wiki/Josephus_problem
// CodeWars Kata: https://www.codewars.com/kata/5550d638a99ddb113e0000a2

// Returns the removed items in order
function josephus(items,k){
  const cloned = [...items];
  const res = [];
  let last = 0;
  while (cloned.length) {
    const index = last - 1 + k;
    const splIndex = index >= cloned.length ? index % cloned.length : index;
    res.push(cloned.splice(splIndex, 1)[0]);
    last = splIndex;
  }
  
  return res;
}
