# Best Bikes
Best Bikes is a platform to sell 2nd hand and used bikes. Where buyers can buy bikes and sellers can add their bikes for sale. There is a Admin in this website who can manage all the types of users and can remove any buyer and seller from the system. After adding the products seller can see the list of products and buyers can also seel the products they have purchased. There are many other features also which are described below.

This website is made by using React Router DOM, Firebase Authentication, amd Mongodb as the database. CRUD operation is done where needed. Besides tailwind css is used for the styling purpose. Some component libraries are also used for the design. React hot toast and sweet alert is added to show the alerts for better user experience. For the payment gateway Stripe is used

This is project is basically divided in two parts. 
- Client Side
- Server Side

## Client Side
- In the client user can experience the smooth UI/UX of this project. In the home page a user can see the image slider related to the bikes that are being sold through this website. Besides there are 3 bike brands are added on the homepage. By clicking on a category buyer will go the relevant product details page and buy the bike he/she wants. If buyer wants he/she can report a product and that report will be seen by the admin and he can delete the report also.

## Server Side
- For the server side I have used node.js and express.js for the server purpose. I have created brand category data according to the bike brands and loaded the category data to the homepage. All the data are sent to the mongodb server. there is no static data in this project. This project is based on online used bike selling and For that I have added all the data to the Mongodb database and fetch the data when needed.

## Project Features
- This project is based on resale product selling. At first in the sign up page a user will choose the role he/she wants
- If a user wants to be a seller that there will different routes for them. If user wants to be a buyer then also he will be redirected to another route.
- Best Bikes helps a buyer to get his dream bike with a very low price.
- If a buyer is not satisfied with the bikes or find some thing unusual then he/she can report about the bike to the admin
- There is a home page That contains a slider, 3 bike categories and some other section related to the project.
- By clicking any of the category user will be redirected to the relevant bike page where he/she can see the bike of that brand only
- In every bike details user can buy the bike. To bike the bike first he/she she has to confirm the order and then user will redirected to the payment page where all the payment procedures will be done
- For payment gateway Stripe is used. User has to give the card information to complete the payment.
- After a successful payment user will be notified about the payment
- On the my orders page, a buyer can see the products he/she has purchased.
- As, there are 3 major users in this project so, I have made a dashboard and differentiate the users based on their role. Admin can see "All Sellers", "All Buyers" and "Reported Items". A seller can see "My Products" and "Add a Product" features whereas a normal user can see ""My Orders"
- Once a buyer booked some thing a modal is opened to take the confirmation from the buyer
- If a user is not logged in then , he/she will not be able to see the bike details. After a successful login user to be redirected to the bike details page. All the categories data are fetched from mongodb server 
- There is Blog page which is an Open route. Any one can visit the page and see some of the questions and answers is given based on the project requirements.
- Authentication is an important part of the website. There are some routes that are private routes. Which means a user can not visit the route if he is not logged in.
- All the users roles are separate and based on that users will see the options on the dashboard.
- For the Authentication purpose I have used the google's Firebase authentication system. I have added some authentication systems. 1) Email and Password Login 2) Google Login 
- If a user wants he can directly login by using his/her google account.
- The Navbar of this projects shows the logged in user's information such as the name (if the user has a display name) or the email. All these information are shown by conditional rendering.
- At the time of sign up user has to fill up the role he wants and based on that he/she can make the actions on this website
- If a user is not login to the website then the nav bar will show the Signup and Login options. user can toggle between these two.
- Register and Login form is created for the user to get registered and logged in.
- If someone wants to visit a route which is not available in the website then an error message will be shown.  
- Admin has the highest authority. If Admin wants he can delete any buyer or seller or any reports that the buyers are added.
- Admin can verify a seller and by verifying the seller there will be a tick mark after the seller's name.
- On the My Products page for the seller route there is a advertise button on each card. By Clicking on the advertise button the product will be shown to advertises section on the home page. If there is no product to advertise then there will be no such section on the home page.


## Frameworks and Libraries used in this project
### React Router DOM: 
- React Router DOM is an npm package that enables and implements dynamic routing in a web app. It allows the developer to display pages and allow users to navigate them. It is a fully-featured client and server-side routing library for React. React Router Dom is used to build single-page applications i.e. applications that have many pages or components but the page is never refreshed instead the content is dynamically fetched based on the URL. This process is called Routing and it is made possible with the help of React Router Dom.

### Firebase: 
- Firebase is a Backend-as-a-Service (Baas). It provides developers with a variety of tools and services to help them develop quality apps, grow their user base, and earn profit. It is built on Google’s infrastructure. For the authentication  purpose I have used firebase in this project.

### Tailwind CSS and it's Component Library: 
- Tailwind CSS was used in the website and some of the component libraries of Tailwind was used such as: daisyUI, MambaUI, AntDesign, Kitwind etc. 

### React FontAwesome  And React Icons: 
- React Font Awesome is used to show the icons in the project 

### React Hot Toast  And Sweet Alert: 
Toast or Hot Toast notifications are pop-up messages that display some information to the user. This information could be a success message, warning, error, and so on.

- React Hot Toast is one of the top React toast libraries available. This tool allows the user to add toast notifications to the application with ease and can also be used to set notifications and alerts.

- Sweet Alert is also used to show alert for the successful login and registration. for the error alerts is has been used also.


### GitHub Link (Client Side) of This Project: 
Github Link Client Side:  https://github.com/programming-hero-web-course-4/b612-used-products-resale-clients-side-Fahimsakib1


### GitHub Link (Server Side) of This Project:
Github Link Server Side:  https://github.com/programming-hero-web-course-4/b612-used-products-resale-server-side-Fahimsakib1

### Firebase Live Site Link:
Live Site Link: https://best-bikes-client.web.app
