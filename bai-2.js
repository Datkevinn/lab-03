const thang = (m) =>{
    if (m >= 1 && m <= 3) {
      console.log("m thuoc qui 1");
    } else if (m >= 4 && m <= 6) {
      console.log("m thuoc qui 2");
    } else if (m >= 7 && m <= 9) {
      console.log("m thuoc qui 3");
    } else if (m >= 10 && m <= 12) {
      console.log("m thuoc qui 4");
    }
    return m;
}

let xacDinh = thang(3);
console.log(xacDinh);