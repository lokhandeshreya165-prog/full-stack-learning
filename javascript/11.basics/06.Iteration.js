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