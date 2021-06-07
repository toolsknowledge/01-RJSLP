//callback
//passing one function to another function as an argument called as callback

/*
    function fun_one(arg1){
        console.log( arg1() );
    };

    fun_one( function fun_two(){
        return "Hello";
    } );                //Hello
*/


/*
    function fun_one(arg1,arg2){
        console.log( arg1(), arg2() );
    };

    fun_one( function successCallBack(){
                return "Success";
            },
            function errorCallBack(){
                return "Error";
    } );            //Success Error
*/



/*
    function fun_one(arg1,arg2,arg3){
        console.log( arg1(), arg2(), arg3() );
    };

    fun_one( ()=>{ return "Hello_1" }, 
            ()=>{ return "Hello_2" }, 
            ()=>{ return "Hello_3"} );             //Hello_1 Hello_2 Hello_3
*/


/*
    function fun_one(arg1,arg2){
        return arg2(arg1*100)
    };

    fun_one(10, (result)=>{
        console.log(result);
    } );            //1000
*/



function add(num1,callback){
    return callback(false, num1+5);
};

function sub(num1,callback){
    return callback(false,num1-3);
}

function mul(num1,callback){
    return callback(false,num1*2);
}

function div(num1,callback){
    return callback(false, (num1 / 2)-2 );
}


add(5, (error,addRes)=>{
    if(!error){
        sub(addRes, (error,subRes)=>{
            if(!error){
                mul(subRes,(error,mulRes)=>{
                    if(!error){
                        div(mulRes,(error,divRes)=>{
                            if(!error){
                                console.log(divRes);
                            }
                        })
                    }
                })
            }
        } );
    }
} );    //callback hell
        //promises

























































