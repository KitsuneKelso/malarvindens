# Malarvindens.se

This is the official repository for [Malarvindens Kennel](http://www.malarvindens.se/).

The page is build primarily with React

## Setup

You can run all scripts with either `npm run <script>` or `yarn <script>`.

After cloning the project, start by running:

```
yarn install
```

## Build

To build the base `bundle.js` and all `stylesheets` for the project, simply run:

```
yarn build
```

You can run the build scripts to watch for changes and automaticall build new bundle and stylesheets by using:

### Building JSX files to Bundle.js

```
yarn watch
```

### Building SCSS to css

```
yarn sass
```

### Serve the file

You can easilly serve the file to localhost:8080, just run

```
yarn start
```

That should be all you need, have fun!
