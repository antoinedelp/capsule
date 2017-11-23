var React = require('react');
//var ReactDOMServer = require('react-dom/server');
var express = require('express');
var app = express();



app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', function(req, res){
  res.render('jeux')
}
);

app.listen(7000, function(){
console.log('app listening to port 7000')
});
