let myBars=[];
let f = 1 ;
let fakeArr;
let midElement;
let fakeheight;
let height;

/////////////////////////////////////////////////////////////////////////
function setup() {
  createCanvas(1200,400);
  fakeArr = [30, 40 ,55 ,50 ,60,50];
  // fakeheight = fakeHeight();
  // console.log(fakeheight)
  IsValid(fakeArr , fakeheight); 
}
///////////////////////////////////////////////////////////////
function draw() { 
  background(0);
  drawing(myBars);
}

//to check if the array reminder is odd 

function isOdd(numb){
  return (numb%2 != 0)
}

// if the array reminder is odd leave it 
// if the array reminder is even min 1 

function decrement(x){
  if(isOdd(x)){
   return x--;
  }else{
    return x ;
  }
}
//calculate the starting point of the array 
function calculateNumbe(array,mid){
  let x = decrement(array.length);
  return (600-((x-mid)*50));

}
// main logic point 
function IsValid(fakeArr){
  if(fakeArr.length>20){
    alert("please enter valid number of element , maximum is 20")
  }else{
    midElement = ceil(fakeArr.length/2);
    let startingPoint = calculateNumbe(fakeArr,midElement);
    console.log(startingPoint);
    for(let i = 0 ; i < fakeArr.length;i++){
      myBars[i] = new Bar(startingPoint,fakeArr[i]);
      startingPoint +=50;
    }
    
  }
}
function drawing(arr){
  for(let i = 0 ; i < fakeArr.length;i++){  
    arr[i].draws();
    //arr[i].update();
    arr[i].texts();  
  }
}


// function fakeHeight(){
//   let fkheight = [];
//   let f = 14;
//   for(let x = 0 ; x < 20 ; x++){
//     fkheight[x]=f;
//     f+=14;
//   }
//   return fkheight;
// }





