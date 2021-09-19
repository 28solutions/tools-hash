const http = require('http');
const crypto = require('crypto')

const port = process.env.PORT;
if (!port)
	throw new Error("Can't read port configuration");

http.createServer(function (req, res) {
  const hash = crypto.createHash('md5');

  req.on('data', function(chunk) {
    hash.update(chunk);
  });

  req.on('end', function() {
    const digest = hash.digest("hex");

    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end(digest + '\n');
  });
}).listen(port, '0.0.0.0');

console.log('Server running at http://0.0.0.0:' + port);
