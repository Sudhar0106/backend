const express=require('express');
const mongoose = require('mongoose');
const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello, Node.js Server!\n');
});

const port = 3000;

server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});