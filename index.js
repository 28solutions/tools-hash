const http = require('http');
const crypto = require('crypto')

const port = process.env.PORT;
if (!port)
	throw new Error("Can't read port configuration");

http.createServer(function (req, res) {
  var data = "";

  req.on('data', function(chunk) {
    data += chunk;
  });

  req.on('end', function() {
    const hash = crypto.createHash('md5').update(data).digest("hex");

    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end(hash + '\n');
  });
}).listen(port, '0.0.0.0');

console.log('Server running at http://0.0.0.0:' + port);
