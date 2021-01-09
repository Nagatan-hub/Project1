console.log('--- X ---');
StartListening(OnConnect);
console.log('--- Y ---');

function OnConnect(msg) {
	console.log('--- クライアント接続 ---');
	console.log(msg);
};

// --------------

function StartListening(f_cb) {
	setTimeout(() => {
		f_cb('connected');
	}, 2000);
}