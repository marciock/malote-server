const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const cors=require('cors')

const indexRouter = require('./routes/index');

//usuarios
const loginRouter=require('./routes/usuarios/login')
const saveUsuariosRouter=require('./routes/usuarios/save');

//cidades
const cidadesShowRouter=require('./routes/cidades/show')
const cidadesSaveRouter=require('./routes/cidades/save');

//bases
const basesShowRouter=require('./routes/basesUnidades/show');
const basesSaveRouter=require('./routes/basesUnidades/save');
const basesEditRouter=require('./routes/basesUnidades/edit');


const db=require('./models');

const app = express();

db.sequelize.sync().then(()=>{
  console.log('Conectado');
});
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

const optCors={
  origin:'*',
  optionsSuccessStatus:200
}
app.use(cors(optCors))


app.use('/', indexRouter);

//usuarios
app.use('/login',loginRouter);
app.use('/save_usuarios',saveUsuariosRouter);

//cidades
app.use('/cidades_show',cidadesShowRouter);
app.use('/cidades_save',cidadesSaveRouter)

//bases
app.use('/bases_show',basesShowRouter);
app.use('/bases_save',basesSaveRouter);
app.use('/bases_edit',basesEditRouter)


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
