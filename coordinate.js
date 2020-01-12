// [[0,0,0],[0,0,0]]
let coorspacegen = many => {
  let res = [];
  let inner = [];
  for (let initA = 0; initA <= many; initA++) {
    inner.push(0);
  }

  for (let initB = 0; initB <= many; initB++) {
    res.push(inner);
  }
  return res;
};
let coor = data => {
  // split data from -
  getxy = data.split("-");
  //   split again into x and y
  let x = getxy[1].split(" "); // horizontal
  let y = getxy[0].split(" "); // vertical

  //   this an main idea

  return x;
};

// console.log(coor("1 1-1 1"));
// console.log(coor("1 1-100"));
// console.log(coor("2 2 2-10 10 10"));
// dev-mode here :)
console.log(coorspacegen(1));
