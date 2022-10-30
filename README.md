# FakeBook

A React 18 project, inspired by the famous Social Network. Content is randomly generated. \
A live demo for a quick preview, is available [👉 clicking here](https://fakebook-ten.vercel.app/).

### Project details:
* React 18 with useEffect, Context Hook and useState;
* Hitting user random-generating enpoint
* Routing for user details
* TypeScript
* Styled Components
* Interactive elements for more UX fun! 🎉
* Components/Layout based
* Prettier/Lint for better readability 

![alt text](https://raw.githubusercontent.com/riccardobertolini/fakebook/master/public/github_image.png)


## How to test in local

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) (default port) to view it in the browser.

### `npm test`

Launches the test runner.\

### `npm run build`

Builds the app for production to the `build` folder.\

### Notes
The Open API that generates Users data does not save/cache any of the provided results. 
So, it's virtually impossible retrieve data once refreshed the page - as you would usually do with a backend, like `https://endpoint.io/[id]`. To solve this limitaiton, I'm saving the data initially retrieved in a useContext object. 

Author: Riccardo Bertolini