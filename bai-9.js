const lietKeSoNguyenDuong = (num) => {
  for (let i = 2; i <= num; i += 2) {
    console.log(i);
  }
};

const demSo = (n) => {
  let S = 0;
  for (let i = 2; i <= n; i += 2) {
    if (n % i === 0) {
      S++;
    }
  }
  return S;
};
lietKeSoNguyenDuong(30);
const n = 30;
const ketQua = demSo(n);
console.log(`So luong uoc cua ${n} la: ` + ketQua);

