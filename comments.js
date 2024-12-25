//create web server
const express = require('express');
const app = express();
//create a port
const port = 3000;
//create a path
const path = require('path');
//create a bodyParser
const bodyParser = require('body-parser');
//create a comments array
const comments = [{name: 'John', comment: 'Hello World!'}];
//create a view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
//create a public path
app.use(express.static(path.join(__dirname, 'public')));
//create a bodyParser
app.use(bodyParser.urlencoded({extended: true}));
//create a get request
app.get('/', (req, res) => {
    res.render('comments/index', {comments});
});
//create a post request
app.post('/comments', (req, res) => {
    const {name, comment} = req.body;
    comments.push({name, comment});
    res.redirect('/');
});
//create a port
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});