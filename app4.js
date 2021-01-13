(() => {
	console.log('--- A ---');

	(async () => {
		console.log('--- B ---');
		await new Promise(f => f(null));
    console.log('--- C ---');
	})();

	console.log('--- D ---');
})();