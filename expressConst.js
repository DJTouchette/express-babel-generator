
module.exports = {

  ['src/routes/index.js']: `
  export default function testRoute(app, port) {
    app.get('/', (req, res) => {
      res.send('Hello! The API is at http://localhost:' + port + ' /api');
    });
  }`,


    ['src/server/index.js']: `
    import makeServer from './server';

    export default makeServer;`,

    ['src/server/middleware.js']: `
    import bodyParser from 'body-parser';
    import cookieParser from 'cookie-parser';
    import morgan from 'morgan';

    export default function applyMiddleware(app) {
      app.use(bodyParser.urlencoded({ extended: false }));
      app.use(bodyParser.json());
      app.use(cookieParser());

      if (process.env.DEV) {
        app.use(morgan('dev'));
      }

    }`,

    ['src/server/server.js']: `
    // ============= Making Server ============= //
    // ========================================= //

    import express from 'express';

    // ======= Applying all middleware ========== //
    // ========================================= //
    import applyMiddleware from './middleware.js';

    // ======= Enviroment variables ============= //
    // ========================================= //
    import env from 'node-env-file';

    // import process from 'process';

    // ======= All configs live here ============ //
    // ========================================= //
    // import config from '../config/index.js';

    // ============== Routes ==================== //
    // ========================================= //
    import testRoute from '../routes/index.js';

    env('./.env');

    const app = express();
    const port = process.env.PORT || 8080;

    // ======= Applies all imports ============== //
    // ========================================= //
    export default function makeServer() {
      applyMiddleware(app);
      // config(app);
      testRoute(app, port);
      app.listen(port, () => {
        console.log('Listening on port: ' + port);
      });

      return app;
    }`,

    ['src/index.js']: `import makeServer from './server/index.js';

const app = makeServer();`,

    ['src/.babelrc']: `
    {
  "presets": ["es2015", "stage-2"],
  "plugins": []
  }`,

    ['.env']:
    `
PORT=3000
MONGO_URI=
DEV=true
SECRET=thisisthesecret`,

    ['src/.gitignore']: `
      dist
      .env
    `,
    
}
