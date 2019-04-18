'use strict';

var express = require('express');
var cors = require('cors');
// require and use "multer"...
const multer = require('multer');
const upload = multer({dest: 'uploads/'});
var app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());
app.use('/public', express.static(process.cwd() + '/public'));
app.get('/', function (req, res) {
     res.sendFile(process.cwd() + '/views/index.html');
  });
app.post('/api/fileanalyse',upload.single('upfile'),function(req,res,next){
  const obj = {'name':req.file.originalname,'size':req.file.size,'type':req.file.mimetype};
  res.json(obj);
  console.log('Upload successful.');
});
app.listen(process.env.PORT || 3000, function () {
  console.log('Node.js listening ...');
});
