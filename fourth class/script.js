console.log('first');
console.log('second');
setTimeout(() =>{
  console.log('third');
},0);
console.log('fourth');

//call stack- event loop- call back- output

//----------------------------
//              Output
//1st, 2nd, 4th, 3rd


//? Promise Creation Phase
const myPromise = new Promise((resolve, reject) => {
  const num = Math.ceil(Math.random() * 50);

  if (num % 2 === 0) {
    resolve(JSON.stringify({
      name: 'Tasfia tasneem Annesha',
      email: 'tasfiatasneem@iut-dhaka.edu',
      location: 'Dhaka',
      age: 22,
    }));
  } else {
    reject('Odd number');
  }
});

//? Promise Consume Phase
//promise chain
myPromise
   .then((data) => {
     return JSON.parse(data);
  })
  .then((result) => {  // previous result come here
    console.log(result);
    return result.age + 10;
  })
  .then((age) => {
     console.log('Age of Annesha: ', age);
   })
   .catch((errMsg) => {
     console.error(errMsg);
   });



//? Multiple Promise Handle
const promise1 = fetch('https://jsonplaceholder.typicode.com/todos/1');
const promise2 = fetch('https://jsonplaceholder.typicode.com/posts/1');
const promise3 = fetch('https://jsonplaceholder.typicode.com/comments/1');


Promise.all([promise1, promise2, promise3, myPromise])// kinda and operation
  .then((result) => {
    console.log('Promise.all():::', result);
  })
  .catch((err) => {
    console.log('Promise.all():::', err);
  });

Promise.any([promise1, promise2, promise3, myPromise])//kinda or operation
  .then((result) => {
    console.log('Promise.any():::', result);
  })
  .catch((err) => {
    console.log('Promise.any():::', err);
  });

Promise.allSettled([promise1, promise2, promise3, myPromise])
  .then((result) => {
    console.log('Promise.allSettled():::', result);
  })
  .catch((err) => {
    console.log('Promise.allSettled():::', err);
  });

Promise.race([promise1, promise2, promise3, myPromise])
  .then((result) => {
    console.log('Promise.race():::', result);
  })
  .catch((err) => {
    console.log('Promise.race():::', err);
  });

  async function process(){
    const result1 = await doSomethingAsync();
    const result2 = await doAnotherAsync();
    return result1 + result2;
  }

  //callback hell
  asyncfunction1(function (result1)){
    asyncfunction2(result1, function (result2)){
      asyncfunction2(result2, function (result3)){
        asyncfunction2(result3, function (result4)){

          //nested callbacks
        };

      };

    };
  };