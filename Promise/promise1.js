const promise=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        const success=false;
        if(success){
            resolve("Operation successfull!");
        }
        else{
            reject("Operation fail");
        }
        
    },1000);// 1 seconds timer
});

promise.then((data)=>console.log(data))
.catch(error=>console.log(error)).
finally(()=>console.log("promise settled"));
console.log("Timer Start");
