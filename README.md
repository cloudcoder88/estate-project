# RealEstateApp

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.2.15.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.

## real-estate-backend

  this is the backend server for my real-estate project

## Tech Stack

 -node.js
 -Express
 -Nodemailer
 -Body-Parser
 -Cors

## Deployment

 Frontend= Github pages
 Backend =Render

## ContactFormFlow

  1 user submits form on Angular frontend
 2 Angular sends request to backend endpoint

## HOW I CREATED THE BACKEND SERVER

1. i put my server.js+package.json in a github repo,i added node_modules to a gitignore file( the repo describes your node.js server(Express+Nodemailer)

2. CONNECTED THE REPO TO RENDER

i made a web service and linked it to my github repo

3    BUILD AND SERVER COMMANDS
i build commands: npm install(installs dependencies)

ii start commands: npm start(runs node.js server)

4 RENDER RUNS YOUR SERVER IN THE CLOUD AND GIVES YOU A URL

5 CONNECT YOUR RENDER SERVER TO ANGULAR

i replace your local host with the url from render in your contact.component.ts,so now,when someone fills out the form,Angular sends the data to your render server

6 NODEMAILER HANDLES Emails

i) your server takes the data,builds an email,and uses Gmail App password to send it
II you will receive that email in your inbox

IN SUMMARY
GITHUB=stores your code
RENDER= run your backend server online
GITHUB PAGES =runs your angular frontend online
Angular form and render backend=gmail in your inbox
