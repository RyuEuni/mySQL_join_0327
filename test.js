const http = require("http");
// import fs from "fs";

function body(data){
  return `<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
  </head>
  <body>
  <h1>${data}</h1>
  </body>
  </html>`
}
const dbInfo = {
  host: 'localhost',
  user: 'root',
  password: '0000',
  database: 'test'
};

const server = http.createServer(function(request, response){
  // 최초접속
  if(request.method === 'GET' && request.url === '/'){
  
    response.writeHead(200, {'Content-Type': 'text/html'});

    let tb;
    let conn = mysql.createConnection(dbInfo);
    conn.connect();
    conn.query(`select tb1.*, tb2.gen from tb1 left join tb2 on tb1.id = tb2.id`,
    function(err, tb1){
      if(err) throw err;
      else tb = tamplate.list(tb1); console.log(tb);
    });
    conn.end();

    response.write(body(hello));
    response.end();
  }

});


// 서버 포트 설정
server.listen(2080, function(error) {
if(error) { console.error('서버 안돌아감') } else { console.log('서버 돌아감'); }
});
