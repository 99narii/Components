const express = require('express');
const http = require('http');
const https = require('https');
const path = require('path');
//라이브러리
const dataUtil = require('date-utils');
const cors = require('cors');
const fs = require('fs');

const request = require('./routers/request_router');

//서버 설정
const HTTP_PORT = 444;

//인증서
const options = {
    key: fs.readFileSync(path.resolve(__dirname, './crt/antsnest.key.pem')),
    cert: fs.readFileSync(path.resolve(__dirname, './crt/antsnest.crt.pem'))
};

const app = express(); // Default route for server status 
//접근 CORS보안설정


var whitelist = [
    'http://localhost',
    ]
    var corsOptions = {
        origin: function (origin, callback) {
            if (whitelist.indexOf(origin) !== -1) {
                FileControl.FileAppend('정상 요청 : ' + origin);
                callback(null, true)
            } else if (origin === undefined) {
                FileControl.FileAppend('알수없는 출처 요청');
            } else {
                FileControl.FileAppend('origin 주소 : ' + origin);
                FileControl.FileAppend('허용하지 않은 접근' + origin);
                callback(new Error('Not allowed by CORS'))
            }
        },
        credentials: true
    }



//API 등록 시작
app.use(express.static('static'));
app.use(express.static('src'));
//body-parser 기능을 해줌
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//스테틱 폴더 경로설정
app.use('/', request);
app.use(cors(corsOptions));
app.use(express.static(path.resolve(__dirname, "../build")));
console.log(path.resolve(__dirname + '/../static'));
app.use('/app', express.static(path.resolve(__dirname + '/../static')));
console.log('HTTPS-서버시작');

//HTTP 접근 설정
app.get("/", (req, res) => {
    fs.readFile(path.resolve(__dirname, "../build/index.html"), (error, data) => {
        if (error) {
            console.log(error);
            return res.status(500).send("<h1>500 Error</h1>");
        }
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(data);
    });
});


app.get('/health', (req, res) => {
    console.log('요청확인');
    res.status(200).send('OK');
  });



// const httpServer=http.createServer(app).listen(HTTP_PORT,()=>{
//     console.log('HTTP =>AWS HTTPS 자동전환 서버 시작 : '+HTTP_PORT);
// }); // Create an HTTPS server. 
const httpServer=http.createServer(app);
module.exports = httpServer;