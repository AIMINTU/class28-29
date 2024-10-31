function simple(a,b,callback){
    const c=a+b;
    const d=a-b;
    const result=callback(c,d);
    return result;
}
function sum(first,second){
    const sub=first+second;
    return sub;

}
const cb=simple(10,20,function(x,y){
    return x-y;
})
const cb2=simple(10,20,function(x,y){
    return x*y;
})
console.log(cb)