const array = [0,1,2,3,4,5,6,7,8,9,10] 
let newArray = []
array.forEach(num => {
  if(num % 2 !== 0){
    newArray.push(num)
  }})
console.log(newArray)
