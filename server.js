var express = require('express')
var app = express()
var path = require('path')
var request = require('request');
var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'dnqlal9259*',
  database : 'kisafintech'
});
connection.connect();
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/', function (req, res) {
    connection.query('SELECT * FROM user', function (error, results, fields) {
        if (error) throw error;
        console.log(results);
        res.send(results);
      });
})


app.post('/user', function(req, res){
    
})
app.get('/user', function(req, res){
    res.send('<input type="text" name="username"></input>'
    + '<button>submit</button>');
});

//get, post 방식보다 간편함. view로 따로 관리
app.get('/ejsTest',function (req, res){
  res.render('index')
})
 
app.get('/test', function (req, res){
    console.log(req.header);
    res.send('Hello2');
})
app.get('/request',function(req, res){
    request('http://openapitraffic.daejeon.go.kr/api/rest/busposinfo/', function (error, response, body) {
    res.send(body);
});
})

app.listen(3000)