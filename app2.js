(async () => {
	console.log('--- A ---');
	const msg = await WaitForClientAsync();
	console.log('--- B ---');
	console.log('--- クライアント接続 ---');
	console.log(msg);
})();

console.log('--- C ---');

// --------------

async function WaitForClientAsync() {
	await new Promise(resolve => {
		setTimeout(() => resolve(null), 2000);
	});
	return 'connected';
}