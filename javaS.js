let hight=1.6
let wight=120
let bmi;
bmi= wight /(hight*hight)
let result="";

if(bmi<15)
 result="نقص حاد جدا في الوزن"
else if (bmi>15 && bmi<=16) {
    result="نقص حاد في الوزن"
    
} else if (bmi >16 && bmi<=18.5){
    result="نقص في الوزن"
    
}
else if ( bmi>18.5 && bmi<=25){
    result="وزن طبيعي"
}
else if (bmi >30 && bmi<=25){
    result="زياده في الوزن"
}
else if (bmi >30 && bmi<=35){
    result="سمنه درجه اولى"
}
else if (bmi >35 && bmi<=40){
    result="سمنه درجه ثانيه"
}

else {
    result="سمنه مفرطه جدا"
}

console.log(bmi+" "+result)




/*******************************************/

for(let i=0; i<=25; i++){

    if(i%2!==0)
    continue;
    
    
    console.log(i)

}

/*********************************************/

for(let i=0; i<=10; i++){

    console.log(i*i)

}

/*********************************************/

for(let i=0; i<=20; i++){

    if(i%2==0)
    continue;
        
    console.log(i)
}

/*********************************************/

      var firstnum=0
      var secnum=1
      var tot;
     for(var i=0; i<=10; i++){
         console.log(firstnum) 
         tot=firstnum+secnum
         firstnum=secnum
         secnum=tot   
     }

/*********************************************/

for(let i=1; i<=10; i++){
    for(let j=1; j<=10;j++){
      console.log(i+" x " + j +" = "+ i*j)
    }
}

/*********************************************/



