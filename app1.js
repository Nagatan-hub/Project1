new Promise(f => {
  console.log('--- A ---');
  WaitForClient(f);
  console.log('--- B ---');
})
.then((msg) => {
  console.log('--- クライアント接続 ---');
  console.log(msg);
});

console.log('--- C ---');

// ----------

function WaitForClient(f_cb) {
  setTimeout(() => {
    f_cb('connected');
  }, 2000);
}