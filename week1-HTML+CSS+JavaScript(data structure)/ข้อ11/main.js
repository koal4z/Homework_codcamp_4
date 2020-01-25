const array = [0,9,1,8,2,7,3,6,4,5]
let newArr = []

function sorting(arr,nArr) {
Math.min(...arr)
nArr.push(Math.min(...arr))
array.splice(array.indexOf(Math.min(...arr)),1)
}

for (let i = array.length ; i > 0 ; i--){
  sorting(array,newArr)
}
console.log(newArr)