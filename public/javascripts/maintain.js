var https = require('https');
var fs = require('fs');

var options = {
  key: fs.readFileSync('key.pem'),
  cert: fs.readFileSync('cert.pem')
};

var a = https.createServer(options, function (req, res) {
  res.writeHead(200);
  res.end("hello world\n");
}).listen(3000);

//*GET captains log. */
router.get('/', function(req, res) {
  res.render('captainslog', { title: 'SeaSound logbook' });
});