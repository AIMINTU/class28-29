//destructring
const profile={
    name:"Nayeem",
    profession:"student",
    Age:"45",
    address: "segun bagicha"
}
// console.log(profile)
// console.log(profile.profession)
// console.log(profile.name)
const {name,profession,address,Age}=profile
console.log(name,address,profession,Age)

//Array destructring
const number=[23,45,8,47,61,28,12,4,69,83]
const [nayeem,abdur,jannat,ridoy,iphone,jihad,John,Tuhin,mashud]=number
console.log(jihad)