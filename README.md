# Express Babel REST API

This is two scripts that generate a Express server with babel transpiling.
The reason I made these scripts were just out of frustration when I first tried to set up babel with node.


# Set Up

Clone this repo `git clone https://github.com/DJTouchette/express-babel-generator.git`

Theres two ways to proceed:

## Way 1: Bash function

1) In your terminal `$ vim ~/.bash_profile`

2) Add this function
```bash
function gen {
  alias RESTdir="node /path/to/git/repo/expressStructure.js";
  alias RESTfiles="node /path/to/git/repo/expressBoilerREST.js";
  RESTdir $1;
  cd $1 && npm init;
  RESTfiles;

}
```

3) While your in there alias this function:
`alias genREST=gen`

4) Use it ! `genREST [newDirectoryName]`

5) Start server: `npm run start`


## Way 2: Calling The Scripts

1) In terminal `$ node path/to/repo/expressStructure.js [dir name]`

2) `$ cd [dir name] && npm init`

3) `$ node /path/to/git/repo/expressBoilerREST.js`

4) Start server: `$ npm run start`

# Built in npm scripts

`npm run start`: Runs the express server with nodemon and starts babel.

`npm run build`: Compiles es 2015 to a dist folder for production.

`npm run serve` : Runs the production code from dist directory.

`npm run build:docs`: Turns your comments into api docs. (http://apidocjs.com/)

# File Structure
`
src
├── .babelrc ---- Babel config
├── config
|   ├── index.js --- Genral config files
|   
├── models --- All db models
|   ├── index.js
|
├── routes --- All routes to be consumed
|   ├── index.js
|
├── server --- Creating and setting up the server
|   ├── index.js
|   └── middleware.js --- Adding middleware
|   └── server.js --- Creating Server
├── index.js --- Starting point
|
├── .env
`

# Done

Feel free to fork or do what ever!
