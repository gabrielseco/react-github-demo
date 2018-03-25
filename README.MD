# Installation

```sh
  npm install
```

## Start

```sh
  npm run dev
```

## Build

```sh
  npm run build
```

## What I Did
I did two pages one for the repos and another for the user and his organizations.

What I did here is a MVP because for me it was like a hack weekend.

## Architecture
I used React for the components

The service to connect to Github is a Object Factory instead a class.

I used React Router to structure the pages of my app.

The styles strategy is CSS Modules + a folder stylesheets which follows an ITCSS
structure.

I used Flow to have support about types.

Why did not used CRA?, well this week I started making my own boilerplate so this is a extension of it.

It features Webpack4, Stylelint, CSS Modules...

I did not use bootstrap because I don't usually go with it in my Pet Projects.

I used redux, when I was starting using it this morning but I noticed that I didn't need it, the reason was I used a new React Pattern called Render Props, see the App Container.

See the commit below when I was adding redux

https://github.com/gabrielseco/react-github-demo/commit/174ce7fe580a22095e111c51ce278b31d4b8f656

The unit tests what I did is used snapshot testing.

## WHAT IS MISSING
* Right now is missing code splitting by route to have a better performance.

* Use the webpack resolvers alias for dev experience

* Integration Testing

* More Unit Tests to have a better coverage.

* Improve the Search Component for example

# React Interview Project
This is a small project for a react interview.

## Goal
Create a React application that retrieves and displays the user repositories and organisations in Github.

## UX/UI
Up to you, probably it should include an input to enter the username, one area to display the repositories of the user and another area to display the organisations

## Retrieving data
To make things easier we have commited a github-api.js file with the REST APIs needed to retrieve the information.

## Bootstrapping the project
Up to you, we recommend [create-react-app](https://github.com/facebook/create-react-app).

## Submitting the solution
Copy this repository to a repository on your name and add the solution there. It should be clear how to build and run the project locally.

## Bonus (don't need to be in the below specific order)
* Use ES6 syntax including arrow functions, destructuring and async/await
* Adding types with Flow or Typescript
* Adding a spinner when information is loading
* Some sort of Unit Test
* Some sort of Integration Test
* Having a nice UI using a components library (Bootstrap?)
* Divide the application in different pages and use a router
* Adding state management
* Deploy the project somewhere
