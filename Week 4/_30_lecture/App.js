const addNumbers=(...args)=>{
    let sum=0;
    args.forEach((arg)=>(sum+=arg));
    return sum;
}
console.log(addNumbers(4,5,1,-2,10,5));
