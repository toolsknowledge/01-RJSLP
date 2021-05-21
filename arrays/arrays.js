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


/*
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
*/



/*
    //reduceRight()
    //used to find the summation from right to left
    console.log(
        ["AshokIT","to","Welcome"].reduceRight((firstValue,nextValue)=>{
            return firstValue+" "+nextValue;
        })
    );              //Welcome to AshokIT
*/


/*
    //findIndex()
    //it is used to know the index of a particular element in array
    let arr = [10,20,30,40,50,60,70,80,90,100];
    console.log(
        arr.findIndex((element,index)=>{
            return element == 50;
        })
    );              //4

    console.log(
        arr.findIndex((element,index)=>{
            return element == 100;
        })
    );      //9


    console.log(
        arr.findIndex((element,index)=>{
            return element == 1000;
        })
    );      //-1


    arr.splice(arr.findIndex((element,index)=>{
        return element == 50
    }),1);
    console.log(arr);


    arr.splice( arr.findIndex((element,index)=>{
        return element == 100
    }), 1 );
    console.log(arr);


    let arr1 = [
        {"p_id":111,"p_name":"p_one","p_cost":10000},
        {"p_id":222,"p_name":"p_two","p_cost":20000},
        {"p_id":333,"p_name":"p_three","p_cost":30000},
        {"p_id":444,"p_name":"p_four","p_cost":40000},
        {"p_id":555,"p_name":"p_five","p_cost":50000}
    ];
    arr1.splice(arr1.findIndex((element,index)=>{
        return element.p_id === 333
    }),1);
    console.log( arr1 );
*/


/*
//indexOf()
//it won't create indexes to duplicate elements
let arr = [10,20,30,10,40,30,10];
for(let value of arr){
    console.log( arr.indexOf(value) );
};


let arr1 = [10,20,30,10,20,30];
arr1.forEach((element,index)=>{
    console.log(element,index,arr1.indexOf(element));
});

//10   0    0
//20   1    1
//30   2    2
//10   3    0
//20   4    1
//30   5    2 

console.log(
    arr1.filter((element,index)=>{
        return arr1.indexOf(element) === index;
    })
);      //[ 10, 20, 30 ]

*/



/*
    //includes()
    //used to search the particular element
    //this function is boolean function
    console.log(
        [10,20,30,40,50].includes(30)
    );          //true

    console.log(
        [10,20,30,40,50].includes(300)
    );          //false 
*/



/*
    //find()
    //find() function, used to serach the element
    //find() function is number function
    console.log(
        [10,20,30,40,50].find((element,index)=>{
            return element == 30;
        })
    );  //30

    console.log(
        [10,20,30,40,50].find((element,index)=>{
            return element == 300;
        })
    );      //undefined
*/


/*
    //some()
    //if atleast "one" element satisfies the condition, it will return true otherwise false
    console.log(
        [10,20,30,40,50].some((element,index)=>{
            return element<=10;
        })
    );
    //true
    console.log(
        [10,20,30,40,50].some((element,index)=>{
            return element<10;
        })
    );
    //false
*/


/*
    //every()
    //if all elements satisfies the condition then it will return true
    console.log(
        [10,20,30,40,50].every((element,index)=>{
            return element<=100;
        })
    );

    //true
    console.log(
        [10,20,30,40,50].every((element,index)=>{
            return element<50;
        })
    );
    //false
*/


/*
    //copyWithin()
    //used to shift the indexes
    let arr1 = [10,20,30,40,50,60,70,80,90,100];
    arr1.copyWithin(5);
    console.log( arr1 );        //[10,20,30,40,50,10,20,30,40,50]


    let arr2 = [10,20,30,40,50,60,70,80,90,100];
    arr2.copyWithin(2);
    console.log( arr2 );        //[10,20,10,20,30,40,50,60,70,80]


    let arr3 = [10,20,30,40,50,60,70,80,90,100];
    arr3.copyWithin(8);
    console.log( arr3 );        //[10,20,30,40,50,60,70,80,10,20]


    let arr4 = [10,20,30,40,50,60,70,80,90,100];
    arr4.copyWithin(-5);
    console.log( arr4 );        //[10,20,30,40,50,10,20,30,40,50]


    let arr5 = [10,20,30,40,50,60,70,80,90,100];
    arr5.copyWithin(-2);
    console.log(arr5);      //[10,20,30,40,50,60,70,80,10,20]


    let arr6 = [10,20,30,40,50,60,70,80,90,100];
    arr6.copyWithin(2,6);
    console.log( arr6 );        //[10,20,70,80,90,100,70,80,90,100]


    let arr7 = [10,20,30,40,50,60,70,80,90,100];
    arr7.copyWithin(-2,-6);
    console.log( arr7 );        //[10,20,30,40,50,60,70,80,50,60]



    let arr8 = [10,20,30,40,50,60,70,80,90,100];
    arr8.copyWithin(-3,6);
    console.log(arr8);                  



    let arr9 = [10,20,30,40,50,60,70,80,90,100];
    arr9.copyWithin(2,4,7);
    console.log( arr9 );        //[10, 20, 50, 60,  70, 60, 70, 80, 90, 100]



    let arr10 = [10,20,30,40,50,60,70,80,90,100];
    arr10.copyWithin(4,7,9);
    console.log(arr10);          //[10,20,30,40,80,90,70,80,90,100]
*/


/*
    //slice()
    //choosing particular elements
    let arr1 = [10,20,30,40,50,60,70,80,90,100];
    console.log( arr1.slice(4,6) );                 //[ 50, 60 ]
    console.log( arr1.slice(1,4) );                 //[ 20, 30, 40 ]
    console.log( arr1.slice(9,10) );                //[ 100 ]
    console.log( arr1.slice(0,1) );                 //[ 10 ]
*/


/*
    //concat()
    //used to concat the arrays
    let arr1 = [10,20,30];
    let arr2 = [40,50,60];
    console.log( arr1.concat(arr2) );           //[ 10, 20, 30, 40, 50, 60 ]

    //ES6
    // "..."
    // spread operator
    console.log(
        [...arr1,...arr2]
    );      //[ 10, 20, 30, 40, 50, 60 ]
*/


/*
    let arr = [10,20,30,40,50,60,70,80,90,100];
    // [60,70,80,90,100,10,20,30,40,50]
    console.log(
        [...arr.slice(5,10),...arr.slice(0,5)]
    );

    //[400,150]
    //[550]
*/


/*
    //fill()
    let arr = [10,20,30,40,50];
    console.log( arr.fill(100) );               //[ 100, 100, 100, 100, 100 ]
    console.log( arr.fill(200,1) );             //[ 100, 200, 200, 200, 200 ]
    console.log( arr.fill(300,2,3) );           //[ 100, 200, 300, 200, 200 ]
    console.log( arr.fill(400,3,4) );           //[ 100, 200, 300, 400, 200 ]
    console.log( arr.fill(500,4,5) );           //[ 100, 200, 300, 400, 500 ]
*/



//sort()
//ascending order / decending order
let arr1 = [10,50,20,40,30];

console.log(
    arr1.sort((num1,num2)=>{
        return num1-num2;
    })
);      //[ 10, 20, 30, 40, 50 ]


console.log(
    arr1.sort((num1,num2)=>{
        return num2-num1;
    })
);      //[ 50, 40, 30, 20, 10 ]


//2nd max element
console.log(
   arr1.sort((num1,num2)=>{
       return num2-num1;
   })[1]
);
//40

//2nd min element
console.log(
    arr1.sort((num1,num2)=>{
        return num1-num2
    })[1]
);   //20

























































































































