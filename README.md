# Front-End-Web Development Course Work 1 Submission

## Description

This project was created as an requiried for the course work for Front-End-Web Development. This application is a cookery based website where the user can view recipes, view the nutritional data for each of the recipes, search for recipes that are filtered both on the name and the ingridents. The user can also rate the reciptes but this feature is not 100% working. Another feature included in this application is that the user can create their own menus and their own shopping lists. The last feature in this application is the user will be able to navigate between pages.

## Feature Description
The first feature in the application is the ability to view recipes. This feature will display all the recipes in a list using the Accordion layout. The user will then be able to click on the recipe they want to view. After the user has clicked on the recipe they want to view the drop down will expand and the user will be able to view the description, price, ingridents and the ratings that item.  

The second feature in this application is the ability to view the nutritional data for each of the recipies. This feature will display the name and all the nutritional information for the selected item. The user will have to click on the food name and then both the food item and the view nutritional data drop downs will expand as they are linked together. This information provided will include data such as serving size, surgar content, total fat and more. 

The third feature in this application is the ability to search for recipes and ingridents. This feature will allow the user to filter the list of recipes by searching for the name of the recipe they want to view. The search will return the food if it is available and then will be displayed on the screen. The search feature also allows the user to search based on the ingridents included in the recipe.  

The forth feature in this application is the ability to rate recipes. This feature should allow the user to click on the amount of stars they want to rate the indivual item they have selected. The rating should then be saved into the browers local storage. At this point the feature is not 100% working. As of right now the feature saving the rating into local storage but unfortunately the rating gets applied to all of the recipes not just the one selected.

The fith feature in this application is the ability to create menus. This feature will display a list of all the recipes and the user will be able to select the recipes they want. After the recipes have been selected they will be added to a list and after the user is happy they will enter their name into a text box and then click the submit button to save the list. After the list has been saved the items selected will appear under the privious orders header and the list will be saved into local storage so the user can see the list after refreshing or if they go to another page.

The sixth feature in this application is the ability to create shopping lists. This feature will display a list of all the ingridents and the user will be able to select the ingridents they want. After the ingridents have been selected they will be added to a list and after the user is happy they will enter their name into a text box and then click the submit button to save the list. After the list has been saved the ingridents selected will appear under the privious orders header and the list will be saved into local storage so the user can see the list after refreshing or if they go to another page.

The last feature in this application is the ability to allow the user to navigate between each of the pages. This feature will work by if the user clicks on the create menu tab the site will load the create menu page or if the user clicks on the create shopping list tab the create shopping list page will loaded or if the user clicks on the home tab the home page will be loaded. 

# Desgin Document Changes 
Home Page changes 
The home page has not got much changes. The only main change is that instead of just diplaying a list of all the recipes. The recipes and the view nutritional items will be displayed. 

Search Display 
When searching for a name or ingrident the UI has stayed the same.

Expanded Item Display
The changes from the first UI for the expanded item display are. The ingridents are displayed in a list and the nutritional infromation is in a drop down below the food item. Also the ratings are displayed as stars at the bottom of the food item. 

Rate Recipe Changes
The changes are the ratings are no longer a pop up box. They are now displayed as stars at the bottom of the food item. 

Create Menu Page Changes
The changes for the create a menu page are. The recipes are all displayed in a list to be selected. The selected recipes will be displayed under the selected food header and there is now a text box for the users name and a button to submit the menu created. The last change is that after the menu is created the selected items will be displayed under the previous orders header.

Create Shopping List Page Changes
The changes for the create a shopping list page are. The ingridents are all displayed in a list to be selected. The selected ingridents will be displayed under the selected ingridents header and there is now a text box for the users name and a button to submit the shopping list created. The last change is that after the shopping list is created the selected items will be displayed under the previous orders header.


### Link To Live Version Of The Site
https://cookeryappcw1.netlify.app/

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
