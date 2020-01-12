// [[0,0,0],[0,0,0]]
let coorspacegen = data => {
  let raw = data.split("-");
  let a = raw[1].split(" ");
  let b = raw[0].split(" ");

  let rawsample = [...a, ...b];
  let sample = [];
  for (let rw = 0; rw <= rawsample.length - 1; rw++) {
    sample.push(Number(rawsample[rw]));
  }

  let higher = 0;

  for (let inB = 0; inB <= sample.length - 1; inB++) {
    if (sample[inB] >= higher) {
      higher = sample[inB];
    }
  }

  let res = [];
  let inner = [];
  for (let initA = 0; initA <= higher; initA++) {
    inner.push(0);
  }

  for (let initB = 0; initB <= higher; initB++) {
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
console.log(coorspacegen("2 2 2-10 10 10"));
