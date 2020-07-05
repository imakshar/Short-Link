# Short Link

  URL shortening service and link management platform, where you can create
  and manage your custom short links Easy access to long urls with custom
  short links and can also see link access count.

## Backend - https://github.com/imakshar/Short-Link-Backend

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Project Structure

    src
     ┣ assest
     ┃ ┗ images
     ┃ ┃ ┣ React App.htm
     ┃ ┃ ┣ chill.png
     ┃ ┃ ┣ landingPageImg.jpg
     ┃ ┃ ┗ linkShare.png
     ┣ components
     ┃ ┣ Footer
     ┃ ┃ ┗ Footer.js
     ┃ ┣ General
     ┃ ┃ ┣ AuthRequired.js
     ┃ ┃ ┣ ForgotPassword.js
     ┃ ┃ ┣ NotFoundPage.js
     ┃ ┃ ┣ RisedCard.js
     ┃ ┃ ┣ SignIn.js
     ┃ ┃ ┗ SignUp.js
     ┃ ┣ Header
     ┃ ┃ ┣ Header.js
     ┃ ┃ ┣ NavBar.js
     ┃ ┃ ┗ Parallax.js
     ┃ ┣ Loader
     ┃ ┃ ┣ Loading.js
     ┃ ┃ ┗ loading.css
     ┃ ┣ PieChart
     ┃ ┃ ┗ PieChart.js
     ┃ ┣ Routes
     ┃ ┃ ┗ Routes.js
     ┃ ┣ CreateLinkDrawer.js
     ┃ ┣ Dashboard.js
     ┃ ┗ Home.js
     ┣ utils
     ┃ ┗ useUser.js
     ┣ App.js
     ┣ constants.js
     ┣ index.js
     ┣ queries.js
     ┣ serviceWorker.js
     ┗ theme.js

## Create constants.js

    export const API_URL = ....
    export const WS_URL = ....
    export const STORAGE_URL = ....

## Available Scripts

In the project directory, you can run:
### `npm i`

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.
 
### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
 
