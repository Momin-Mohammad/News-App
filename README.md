# News App:
A simple application to display news from India.

## Deployed Link : [News App](https://theeasynews.netlify.app/)

 ## Walk through the application :
 1. The user needs to login first to access Dashboard and Favourite page. If the user has not signed in than he/she needs to sign in first.
 2. Once the user is logged in he/she will be directed to the Dashboard and can see the user name in the navbar with a logout button.
 3. On the Dashboard all the news are displayed using the gnews.io API. On clicking on a particular news the user can view full news article on a new page.
    Also at the end of the news article there is link present to view news article source.
 4. On the Dashboard user can add news article to his/her favourites by clicking on the heart icon.
 5. All the favourite news selected can be seen on the favourites page. This page content will be different for each user.
 6. User can log out by clicking the logout button from the Navbar.

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



