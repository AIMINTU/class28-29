//randomuser.me
//https://randomuser.me/api/?results=5000
fetch('https://randomuser.me/api/?results=50')
.then(res=>res.json())
.then(data=>console.log(data))