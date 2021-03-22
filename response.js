//sending response
const http= require('http');
const server=http.createServer((req,res)=>{

    console.log(req.url,req.method,req.headers);
//    res.setHeader('Content-Type','text/html') ye batane ke liye hai ki hum html data hejne wale hai as a response    

    res.setHeader('Content-Type','text/html');
    res.write('<html>');
    res.write('<body>Hello From Node</body>');
    res.write('</html>');
    res.end();
//res.end() ke baad kuch bhi likhenge to error ayega kyuki ere browser ko lagega ki end matlab iske baad ab koi data nai ayega fir bhi hum bhejenge to we will get an error

    // res.write('<body>Hello From Node</body>');
  

})
server.listen(3005);

//Network me jakr,all,localhost me header me dekh sakte aur header ke ander response me html dekh sakte hai
