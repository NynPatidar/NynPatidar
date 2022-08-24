const http = require('http')

const port = 8080

const server = http.createServer((req,res)=>{
  res.statusCode = 400;
  res.end();
});

const listener= server.listen(port, () => {
  console.log(`Server running at port ${port}`)

  var option = {
    port: 8080,
    host: '127.0.0.1',
  }; 
  
  var request = http.request({
    port: 8080,
    host: '127.0.0.1',
  });
  
  request.end();

  request.once('response', (res) => {
    console.log(res.statusCode);
  })
})

setTimeout(()=>{
  server.close()
},5000)