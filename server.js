const express = require('express');
const path = require('path');
const compression = require('compression');
const morgan = require('morgan');
const { StringDecoder } = require('string_decoder');
const url = require('url');
const handlers = require('./lib/handlers');
const helpers = require('./lib/helpers');
const {createServer} = require('http');

const app = express();
const normalizePort = port => parseInt(port, 10);
const PORT = normalizePort(process.env.PORT || 3001);

const dev = app.get('env') !== 'production';

const routes = {
  '/api/blog' : handlers.blog,
  '/api/blogs' : handlers.blogs,
  '/api/email' : handlers.email
};

app.all('*/api/*', (req, res) => {
  let parsedUrl = url.parse(req.url, true);
  let pathname = parsedUrl.pathname;

  let decoder = new StringDecoder('utf8');
  let buffer = '';

  req.on('data' , function (data) {
    buffer += decoder.write(data)
  });
  req.on('end' , function () {
    buffer += decoder.end();

    let data = {
      method: req.method.toLowerCase(),
      payload: helpers.jsonToObj(buffer),
      query: parsedUrl.query,
      headers: req.headers,
      pathname: pathname
    };

    let handler = typeof(routes[pathname]) !== 'undefined' ? routes[pathname] : handlers.notfound;

    handler(data, function (statusCode, payload, contentType){
      res.status(statusCode);
      res.contentType(contentType);

      if ( contentType === 'application/json' ) {
        res.json(payload)
      } else {
        res.send(payload);
      }
    });
  });
});

/* RENDERING FOR PRODUCTION */
/* ------------------------- */
if(!dev) {
  app.disable('x-powered-by');
  app.use(compression());
  app.use(morgan('common'));

  app.use(express.static(path.resolve(__dirname, 'build')))
  console.log(__dirname,'darpan-path')
  app.all('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'build', 'index.html'));
  });
};

if (dev) {
  app.use(morgan('dev'))
};

const server = createServer(app)
.listen(PORT, err => {
  console.log('Server started at ' + PORT)
});
