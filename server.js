// Tiny local server for Lantern River. Run: node server.js  then open http://localhost:8000
const http = require('http');
const fs = require('fs');
const path = require('path');

const file = path.join(__dirname, 'index.html');
http.createServer((req, res) => {
  fs.readFile(file, (err, data) => {
    if (err) { res.writeHead(500); return res.end('Could not read index.html'); }
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    res.end('<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"></head><body style="margin:0">' + data + '</body></html>');
  });
}).listen(8000, () => console.log('Lantern River running at http://localhost:8000'));
