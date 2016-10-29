# Electron Angular Skeleton

A quick starter app which can be used as a skeleton for starting up a new angular2 project with electron.

## Prerequisites
You will need the following installed to use this skeleton
* npm 3.x or greater
* node 4.5.x or greater

## Getting started
Run the following commands to install all required npm modules and type definitions for type script.

```bash
# Install dependencies
npm i

# Install type definitions
typings install

```
Then run the following commands to build and run the application.

```bash
npm run build
npm start
```

To build on file run the following command which will watch for file system changes.

```bash
npm run build
```

## Distributing the app
To package the electron app distribution run the following command. This will create a single distribution
to match the current system. For more information on customizing the distribution visit [here](https://github.com/electron-userland/electron-packager)

```bash
npm run distribute
``` 

## The code
Here is a quick overview of the project structure:
```
electrogram/
 ├──src/                       * contains the application code. 
 │   │   
 │   └──app/                   * angular application code
 │      ├──app.ts              * angular application module
 |      ├──component.ts        * angular component
 │      └──main.ts             * angular boostraping code
 │
 ├──index.html                 * electron main page
 ├──main.js                    * electron starup script     
 ├──webpack.config.js          * webpack configuration file
 ├──tsconfig.json              * typescript configuration file
 ├──typings.json               * typescript definitions for typings
 └──package.json               * npm package configuration file.
 ```

## Author
Gayan Perera  
[Follow @gaparv](https://twitter.com/gaparv)  
[Google+](https://plus.google.com/u/0/118381159417397489677)

## Credits
This boilerplat code is inspired by the following projects.  
[Official Quick Start](https://angular.io/docs/ts/latest/quickstart.html)  
[Image Size Calculator](https://github.com/auth0-blog/angular2-electron)  



