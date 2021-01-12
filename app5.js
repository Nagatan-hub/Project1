console.log('--- A ---');

const val_async = (async () => {
	console.log('--- B ---');
	const val_promise = await new Promise(f => f('resolved'));
	console.log('--- C ---');
	return val_promise;
})();

console.log('--- D ---');
console.log(val_async);

val_async.then((val) => {
	console.log('--- E ---');
	console.log(val)
});

(async () => {
	console.log('--- F ---');
	console.log(await val_async);
	console.log('--- G ---');
})();

console.log('--- H ---');