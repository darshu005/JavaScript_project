console.log("hello world!");
function calculateSum(a,b){
    return a+b;
}
if(typeof alert=='function'){
    alert("The sum of 5 and 7 is true:"+calculateSum(5,7));
}
else{
    console.log("The sum of 5 and 7 is false:"+calculateSum(5,7));
}