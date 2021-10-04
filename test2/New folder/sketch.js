let myBars=[];
let f = 1 ;
let fakeArr;
let midElement;
let fakeheight;
let height;
let Issorted = false;

/////////////////////////////////////////////////////////////////////////
function setup() {
  createCanvas(1200,400);
  frameRate(2);
  fakeArr= [5,7,4,8,10,20,4,40,50,50,3,2];
  // fakeheight = fakeHeight();
  // console.log(fakeheight)
  IsValid(fakeArr , fakeheight); 
}
///////////////////////////////////////////////////////////////
function draw() { 
  background(0);
  drawing(myBars);
  if(!Issorted){
    insertionSort(fakeArr,myBars);
    console.log("hello");
  }
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
      
      //add value from object
     // fakeArr[i]= myBars[i].value;
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



/////// insertion algo

async function insertionSort(arr,myBars2) 
{ 
    let i, key, j ,temp;; 
    let key2 = new Bar(0,0);
    for (i = 1; i < arr.length; i++)
    { 

        key = arr[i]; 
        key2 = myBars2[i]; //>>>>>>>>>
        j = i - 1; 
        while (j >= 0 && arr[j] > key)
        { 
            arr[j + 1] = arr[j]; 
            let myPromise = new Promise(resolve => {
              setTimeout(() => {
                resolve();
              }, 1000)
            });
        await myPromise;
           // myBars2[j + 1].setColor('rgb(0,255,255)');
            myBars2[j + 1].swap(myBars2[j]);  
            j = j - 1; 
        } 
        let check = arr[j + 1];
        arr[j + 1] = key; 
        if(check == arr[j + 1]){
          let myPromise = new Promise(resolve => {
            setTimeout(() => {
              resolve();
            }, 1000)
          });
      await myPromise;
        }
    }
    console.log(arr);
    console.log(myBars2);
     
    Issorted = true;
} 

// function resolveAfter2Seconds() {
//   return new Promise(resolve => {
//     setTimeout(() => {
//       resolve("hello bassam");
//     }, 2000);
//   });
// }

// async function asyncCall() {
//  // console.log('calling');
//   const result = await resolveAfter2Seconds();
//   console.log(result);
  







