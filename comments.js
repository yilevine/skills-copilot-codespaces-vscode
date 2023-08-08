// Create web server
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var cors = require('cors');

var comments = [
  { id: 1, author: 'Pete Hunt', text: 'This is one comment' },
  { id: 2, author: 'Jordan Walke', text: 'This is *another* comment' }
];

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.get('/api/comments', function(req, res) {
  res.json(comments);
});