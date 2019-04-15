const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 5000;

//Static file declaration
app.use(express.static(path.join(__dirname, '../build')));

//production mode
if (process.env.NODE_ENV === 'production') {
	app.use(express.static(path.resolve(__dirname, '../build')));
	//
	app.get('*', (req, res) => {
		res.sendfile(path.resolve((__dirname = '../build/index.html')));
	});
}

//build mode
app.get('*', (req, res) => {
	res.sendFile(path.join(__dirname + '../public/index.html'));
});

//Start server
app.listen(port, (req, res) => {
	console.log(`server listening on port: ${port}`);
});
