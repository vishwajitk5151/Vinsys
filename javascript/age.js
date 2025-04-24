let percent=10;
// let gender="female";
// if(age>50 || gender=="female"){
//     console.log("allow for discount");
// }else{
//     console.log("no discount");
// }
if(percent>90){
    console.log("Grade A+")
}else if(percent>80 && percent<=90){
    console.log("Grade A");
}else if(percent>70 && percent <= 80){
    console.log("Grade B")
}else if(percent>60 && percent <=70){
    console.log("Grade C")
}else if(percent>50 && percent <=60){
    console.log("Grade D")
}else if(percent>40 && percent <=50){
    console.log("Grade E")
}else{
    console.log("fail");
}

let Days=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
let day=6;

for(let i=0;i<7;i++){
    if(i==day){
        console.log(Days[day]);
        break;
    }
}

