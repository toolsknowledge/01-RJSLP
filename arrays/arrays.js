/*
    let arr = [10,20,30,40,50,60,70,80,90,100];
    console.log( arr[0],arr[4], arr[9] );                       //10 50 100
    console.log( arr[10], arr[-1] );                            //undefined undefined
*/


/*
    //length
    //used to know the length of array
    let arr = [10,20,30,40,50,60,70,80,90,100];
    console.log( arr.length );                          //10

    arr.length = 5;
    console.log( arr[4], arr[5], arr[9] );              //50 undefined undefined

    arr.length = 0;
    console.log( arr.length );                          //0
*/


/*
    //delete
    //delete property is used to delete the "particular" element
    //delete property fills the deleted element with "undefined"
    //delete property never releases the "memory"
    let arr = [10,20,30,40,50,60,70,80,90,100];
    console.log( arr.length );                          //10

    delete arr[0];
    console.log( arr.length );                          //10

    delete arr[4];
    console.log( arr.length );                          //10

    arr.push(11);
    console.log( arr.length );                          //11

    console.log( arr );                                 //[ <1 empty item>, 20, 30, 40, <1 empty item>, 60, 70, 80, 90, 100, 11 ]
*/



//iterations
//for()
//forEach()
//for...of()
let arr = [10,20,30,40,50,60,70,80,90,100];

for(let i=0;i<arr.length;i++){
    console.log(  arr[i] );
}


arr.forEach( (arg1,arg2)=>{
    console.log( arg1, arg2 );
} );

for(let value of arr){
    console.log( value );
};


































