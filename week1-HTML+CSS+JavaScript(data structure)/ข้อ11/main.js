const array = [0,9,1,8,2,7,3,6,4,5]
let newArr = []

function sorting() {
Math.min(...array)
newArr.push(Math.min(...array))
array.splice(array.indexOf(Math.min(...array)),1)
}

for (let i = array.length ; i > 0 ; i--){
  sorting()
}
console.log(newArr)