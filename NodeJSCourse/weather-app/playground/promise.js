var asyncAdd = (a, b) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof a === 'number' && typeof b === 'number') {
        resolve(a + b);
      } else {
        reject('Arguments must be numbers');
      }
    }, 1500);
  });
};

asyncAdd(1,'a').then((sum) => {
  console.log('Sum: ' + sum);
  return asyncAdd(sum, 3);
}).then((sum) => {
  console.log('Sum2: ' + sum);
}).catch((err) => {
  console.log(err);
});

// var somePromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     // resolve ('Hey. It worked!');
//     reject('Hey. It didn\'t work!');
//   }, 2500);
// });
//
// somePromise.then((message) => {
//   console.log('Success', message);
// }, (errMessage) => {
//   console.log('Error: ', errMessage);
// });
