const express = require('express'),
    app = express(),
    morgan = require('morgan'),
    path = require('path');

const indexRouter = require('./routes/index');

app
    .set('port', process.env.PORT || 5500)
    .set('views', path.join(__dirname, 'views'))
    .set('view engine', 'ejs');

app
    .use(morgan('dev'))
    .use(express.urlencoded({extended: true}))
    .use('/', indexRouter)
    .use(express.static('public'))

app.listen(app.get('port'), () => {
    console.log(`Runing on: ${app.get('port')}`)
})