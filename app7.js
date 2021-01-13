new Promise(f => {  // 敢えて f と書いている（普通は resolve と書くところ）
	console.log('--- A ---');
	f('resolved');
	console.log('--- B ---');
})
.then((msg) => {
	console.log('--- C ---');
	console.log(msg);
});

console.log('--- D ---');

// function Promise(F) {
//   function resolve() {  // <- これが resolver。この場合、then に渡された関数を実行するのが resolver の仕事
//      ...
//   }
//   
//   F(resolve);
// }