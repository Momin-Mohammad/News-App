# News App:
A simple application to display news from India.

## Deployed Link : [News App](https://theeasynews.netlify.app/)
### NOTE: For getting data of users and news added to favourites by logged in user, Json server is used. 
### In order to run the application properly, you need to run the json server by running "npm run server" command from the command line.

 ## How to start the application?
 1. Clone this repository into your local system.
 2. Navigate to the required directory where the react app is installed.
 3. Run the command "npm install"(This will install all the required dependencies).
 4. Run the command "npm start" to start the react app.
 5. In the new terminal, navigate to the directory and run the command "npm run server". This will start the json server
 The application is ready to use.

## Features:
1. Login and Signup
2. Private dashboard for every user
3. News can be added to favourites

## Tech Stacks used:
1. React
2. Redux
3. JSON server

## API Integration detail:
* For getting the news, [GNews](https://gnews.io/) api has been used.
* For getting news from specific country, query as "news" and  country code is provided in the query parameter.
 Ex. for getting news from India "?q=news&country=in" is used in the url (https://gnews.io/api/v4/search?q=news&country=in&apikey=API_KEY).
* Generate the API key from the [GNews](https://gnews.io/) site and enter it at the end of the url. This will give the required data.



