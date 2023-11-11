const tinhLuyThua = (x, n) => {
  let T = 1;
  for (i = 1; i <= n; i++) {
    T *= x;
  }
  return T;
}

let ketQua = tinhLuyThua(4, 3);
console.log("ket qua: "+ketQua);
