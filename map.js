const number=[23,45,8,47,61,28,12,4,69,83]
for(const num of number){
    console.log(num)
}
console.log("map start")
const number1=[23,45,8,47,61,28,12,4,69,83]
number1.map(value=>console.log(value))

const number2=[23,45,8,47,61,28,12,4,69,83]
const result= number2.map(kaka=>kaka*2)
console.log(result)
const ept=[]
const number3=[23,45,8,47,61,28,12,4,69,83]
for(let i=0;i<number3.length;i++){
    const result1 =number3[i]+1
    ept.push(result1)
}
console.log(ept)