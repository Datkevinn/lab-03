const lietKeSoNguyen = (num) => {
  if (num <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const lietKeSoNguyenTo = (n) => {
  for (let i = 2; i < n; i++) {
    if (lietKeSoNguyen(i)) {
      console.log(i);
    }
  }
};
lietKeSoNguyenTo(30);
