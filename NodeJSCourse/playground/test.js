var foo = (x, y, callback) => {
  setTimeout(() => {
    console.log('Before callback', x+y);
  }, 2000);
  callback(x+y);
};

foo(2, 5, (res) => {
  console.log('After callback', res);
});
