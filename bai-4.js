const tinhTong = (n) =>{
    let S=0;

    for(i=2; i<=2n; i+=2){
        S+=1/i;
    }
    return S;
}

let sNew = tinhTong(2);
console.log("Ket qua: "+sNew)
