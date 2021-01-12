(async () => {
	console.log('--- A ---');
	const obj_promise = new Promise(f => {  // ここの f には、Promise が resolver を代入する。だから、一般的には resolve と書く。
		console.log('--- B ---');
		setTimeout(() => {
			console.log('--- C ---');	
			f('resolved');
			console.log('--- D ---');
		}, 2000);
	})
	
	console.log('--- E ---');
	
	const val_then_1 = obj_promise.then((val) => {
		console.log('--- F ---');
		console.log(val)
		return 'then_1';
	});
	
	console.log('--- G ---');
	console.log(val_then_1);
	
	const val_then_2 = await obj_promise.then((val) => {
		console.log('--- H ---');
		console.log(val)
		return 'then_2';
	});
	
	console.log('--- I ---');
	console.log(val_then_1);
	console.log(val_then_2);
	console.log(obj_promise);

	const val_promise = await obj_promise;
	console.log('--- J ---');
	console.log(val_promise);
})();

console.log('--- K ---');