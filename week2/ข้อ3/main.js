//1

function grader(a,b,c) {
  let n;
  n = a+b+c ;
  if (n>=80){
      return console.log('A')
  } else if (n>=75) {
      return console.log('B+')
  } else if (n>=70) {
      return console.log('B')
  } else if (n>=65) {
      return console.log('C+')
  } else if (n>=60) {
      return console.log('C')
  } else if (n>=55) {
      return console.log('D+')
  } else if (n>=50) {
      return console.log('D')
  } else {return console.log('F')}      
             
}
 
grader(25,25,30)

//2

function maxMin(n,arr) {
  for (let i=0;i<arr.length;i++)
  if (n <1 || n>1000){
      return console.log(false)
  } else if (arr[i] < -2000000000 || arr[i]>2000000000){
      return console.log(false)
  } else {
      return console.log(Math.max(...arr));
  }
  
}

maxMin(5,[1,2,3,4,5])

//3

function addMatrix(m,n,matOne,matTwo){
let matrix = [];
let A;
let B = [];
let C = [];
let D = [];
//console.log(matrix)
//console.log(matOne,matTwo)
for(let i=0;i<m;i++){
  for(let j=0;j<n;j++){
      //console.log(matOne[i][j]+matTwo[i][j]);
      A = matOne[i][j]+matTwo[i][j];
      if (i === 0) {
          B.push(A);          
      } else if (i === 1) {
          C.push(A);             
      } else if (i === 2) {
          D.push(A);          
      }
  }
  
}
matrix.push(B)
matrix.push(C)
matrix.push(D)  
console.log(matrix)
}

addMatrix(3,3,[[1,2,3],[3,2,1],[1,3,2]],[[1,1,1],[1,1,1],[1,1,1]]);
addMatrix(2,2,[[1,2],[5,6]],[[3,4],[7,8]])
//4
function checker(str) {
  if (str === str.toUpperCase()){
      return console.log("All Capital Letter");
  } else if (str === str.toLowerCase()) {
      return console.log("All Small Letter");
  } else {return console.log('Mix')}
}

checker('asdasddfsdf')


//5

function pytha(a,b) {
let c;
  c = a**2 + b**2
console.log(Math.sqrt(c))
}
pytha(3,4);

//7
function rad(r) {
radient = Math.PI*(r**2)
taxi = 2*r*r 
console.log(radient,taxi)
}
rad(42)
//8

function xTwo(xOne,s){
  let n;
  if ((s<-1000||s>1000) && (xOne<-1000||xOne>1000)){
      return false ;
  } else{
  n = (2*s)-xOne;
  return console.log(n);
  }    
}
xTwo(11,15);
xTwo(4,3);


//9 
function ABC(a,b,c,str) {
  let arr= []
  let arrnum = [a,b,c]
  arrnum.sort()
  let newset=['','','']
  for(let i=0;i<str.length;i++){   
      if (str[i]==='C'){
           arr.push(3)
      }else if (str[i]==='B'){
          arr.push(2)
      }else{arr.push(1)};    
  }
  //sort target C>B>A
newset.fill(arrnum[2],arr.findIndex(num = n => n===3),arr.findIndex(num = n => n===3)+1)
newset.fill(arrnum[1],arr.findIndex(num = n => n===2),arr.findIndex(num = n => n===2)+1)  
console.log(newset.fill(arrnum[0],arr.findIndex(num = n => n===1),arr.findIndex(num = n => n===1)+1))  
}

ABC(1,5,3,'ABC')
ABC(6,4,2,'CAB')

//10
function trik(str) {
  let sum = 0
  let arr = []
  for (let i=0;i<str.length;i++){
      if(str[i]==='A' || str[i]==='B'){
          arr.push(1)
      }else if(str[i] === 'C'){
          arr.push(2)}
      
      if (sum === 2 || sum >= 2){
          sum -= arr[i]
      }else if(sum === 0 || sum <= 0 || sum === 1){
          sum += arr[i]}
  }

  if (sum === 0) {
      return console.log(1)
  } else if (sum === 1) {
      return console.log(2)
  } else {
      return console.log(3)
  }   
}
trik('AB')
trik('CBABCACCC')
