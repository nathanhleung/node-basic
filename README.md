# Basic Node App Boilerplate
A basic setup for a Node.js app

## Getting Started
- Start the server by running `npm start` or `node app`.
- Build frontend assets by running `gulp`, and watch assets and compile on changes with `gulp watch`.

## Directories/Important Files
```yaml
assets/ - Assets that need to be built by gulp
  js/ - ES6/Babel files
  styl/ - Stylus files
controllers/ - Express routes, etc.
lib/ - Personal libraries/utility functions
public/ - Don't put stuff in here! This folder is generated by gulp from your assets folder and is on the .gitignore list
static/ - Static files (do put stuff in here), accessible on the frontend from /static/[filename]
views/ - Jade templates
  _layout.jade - Base layout
app.js - server config
gulpfile.js - Gulp config (for example if you want to switch stylus and sass)
```
