console.log('--- X ---');
Test2(Test1);
console.log('--- Y ---');

function Test1(msg) {
  console.log('TEST1')
  console.log(msg);
}

function Test2(f_cb) {
  setTimeout(() => {
    f_cb('TEST2');
  }, 2000);
}