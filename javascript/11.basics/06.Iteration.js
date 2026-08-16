//loop
//1.for

for(let index = 0; index< 10; index++){
    const element = index;
    console.log(element);    //op: 0 1 2 3 4 5 6 7 8 9
}

for(let i = 0; i<=10; i++){
    console.log(`table of : ${i})`);
    for(let j =0; j<=10; j++){
        console.log(i + '*' + j + '=' + i*j);
    }
}


//while loop 
let index1 = 0
while (index1 <= 10){
    console.log(`value of index is ${index1}`);
    index1 = index1 + 2 
}

let myArray = ['shreya', 'shruti', 'sakshi']
let arr = 0
while (arr < myArray.length){
    console.log(`my name is ${myArray[arr]}`);
    arr = arr + 1
}

//do-while loop
let value = 1
do{
    console.log(`value is ${value}`);
    value++
}while (value <=10)