const tinhTong = (n) => {
    let S = 0;
    for (i=1; i<=n; i++){
         S += i;
    }
   return S;
}

let sNew = tinhTong(3);
console.log("ket qua: " + sNew);