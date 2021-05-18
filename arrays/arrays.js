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

/*
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
*/



/*
    //push()
    //unshift()
    //pop()
    //shift()
    let arr = [20,30,40];
    console.log( arr );                     //[ 20, 30, 40 ]

    arr.push(50);
    console.log( arr );                     //[ 20, 30, 40, 50 ]

    arr.unshift(10);
    console.log( arr );                     //[ 10, 20, 30, 40, 50 ]


    arr.pop();
    console.log( arr );                     //[ 10, 20, 30, 40 ]


    arr.shift();
    console.log( arr );                     //[ 20, 30, 40 ]
*/

/*
    //splice()
    //splice() function used to add / remove any index from array
    let arr = [10,20,30,40,50,60,70,80,90,100];
    arr.splice( 4, 2 );
    console.log( arr );                 //[10,20,30,40,70,80,90,100]


    arr.splice(5,2);
    console.log( arr );                 //[ 10, 20, 30, 40, 70, 100 ]


    arr.splice(5,1);
    console.log( arr );               //[ 10, 20, 30, 40, 70 ]


    arr.splice(0,1);
    console.log( arr );                 //[ 20, 30, 40, 70 ]


    arr.splice(3,0,50,60);
    console.log( arr );                 //[ 20, 30, 40, 50, 60, 70 ]


    arr.splice(0,1,10,20);
    console.log( arr );                 //[ 10, 20, 30, 40, 50, 60, 70 ]


    arr.splice(7,0,80,90,100);
    console.log( arr );                 //[10,20,30,40,50,60,70,80,90,100]
*/






/*
    //map()
    //it is used to manipulate the each and every array element
    console.log(
        [1,2,3,4,5].map( (element,index)=>{
                return element * 100;
        } )
    );              //[ 100, 200, 300, 400, 500 ]


    console.log(
        [1,2,3,4,5].map((element,index)=>{
            return "$" + element;
        })
    );          //[ '$1', '$2', '$3', '$4', '$5' ]
*/


/*
    //filter()
    //it is used to apply the conditions on array
    console.log(
        [100,200,300,400,500].filter((element,index)=>{
            return element<=300;
        })
    );          //[ 100, 200, 300 ]


    console.log(
        [1,2,3,4,5].map((element,index)=>{
            return element*100;
        }).filter((element,index)=>{
            return element<100;
        })
    );              //[]

*/



//reduce()
//it is used to find the sum of array elements
console.log(
    [1,2,3,4,5].reduce((firstValue,nextValue)=>{
        return firstValue + nextValue;
    })
);
//15

console.log(
    [1,2,3,4,5].map((element,index)=>{
        return element
    }).filter((element,index)=>{
        return element<=5;
    }).reduce((firstValue,nextValue)=>{
        return firstValue+nextValue;
    })
);              //15















































































































































