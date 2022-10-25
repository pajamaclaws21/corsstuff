var http = require("http");
var Unblocker = require("unblocker");

var unblocker = Unblocker({});

http
  .createServer(function(req, res) {
    unblocker(req, res, function(err) {
      var headers = { "content-type": "text/html" };
      if (err) {
        res.writeHead(500, headers);
        return res.end(err.stack || err);
      }
      if (req.url == "/") {
        res.writeHead(200, headers);
        return res.end(
          `<style>
            html, body {
              margin: 0;
              padding: 0;
              background-color: #000015;
              color: #eeeef9;
              font-family: sans-serif;
            }
            div#cont {
              width: 50%;
              height: 50%;
              margin: auto;
              margin-top: 10%;
              text-align: center;
            }
            input {
              padding: 8px;
              background-color: #101025;
              border: none;
              border-radius: 4px;
              color: #dedee9;
            }
            input#sub:hover {
              cursor: hand;
              background-color: #202035;
              transition-duration: 300ms;
            }
            div#desc {
              width: 100%;
              text-align: justified;
              margin: 2%;
            }
            </style>
            <script>
              function loadProxy(url){
                url = url.replace('//', '/')
                window.location.href = 'https://Proxy.ttrmaniac.repl.co/proxy/' + url;
              }
            </script>
            <body>
            <div id='cont'>
              <h2>Proxy ADAM</h2>
              <form onsubmit="return false;">
                <input id='url' type='url' placeholder='URL to websitw' autofocus></input>
                <input id = 'sub' type='submit' value='Go!' onclick="loadProxy(document.getElementById('url').value)"></input>
              </form>
            </div>
            </body>`
        );
      } else {
        res.writeHead(404, headers);
        return res.end("ERROR 404: File Not Found.");
      }
    });
  })
  .listen(8080);

console.log("CORS stuff running great!");