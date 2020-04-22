const http = require('http');
const fs = require('fs');

http.createServer(function (request, response) {
	console.log('request come', request.url);

	if (request.url === '/') {
		const html = fs.readFileSync('test.html', 'utf8');
		response.writeHead(200, {
			'Content-Type': 'text/html'
		});
		response.end(html);
	}

	if (request.url === '/script.js') {
		response.writeHead(200, {
			'Content-Type': 'text/javascript',
	        'Cache-Control': 'max-age=5'
		});
		response.end('console.log("script loaded")');
	}

	// const etag = request.headers['if-none-match'];
	// if (etag === '777') {
	// 	response.writeHead(304, {
	// 		'Content-Type': 'text/javascript',
	// 		'Etag': '777'
	// 	});
    //     response.end();
	// } else {
	// 	response.writeHead(200, {
	// 		'Content-Type': 'text/javascript',
	// 		'Etag': '777'
	// 	});
	// 	response.end('console.log("script loaded")');
    // }
}).listen(3000);

console.log('server listening on 3000');
