# BOHO Living!

<br>

[View live website here!](https://flask-milestone-3-project.herokuapp.com/home)

[View GitHub repository here!](https://github.com/jennymalmoe/MSP3)

<br>

![site on different devices](static/images/mock_up.png) 

BOHO Living is an online home decor shop that offers a selection of trendy home decor items inspired by the modern bohemian style.

<br>

## Table of contents

___

1. [**User Experience**](#ux)
    * Project Goals
    * Business Goals
    * User Goals
    * User Stories
    * Design Choices
        * Color scheme
        * Typography
        * Imagery
        * Icons
    * Wireframes

2. [**Features**](#features)
    * Existing Features
    * Features Left to Implement

3. [**Database Design**](#database-design)

4. [**Technologies Used**](#technologies-used)
    * Languages 
    * Frameworks, Libraries & Programs

5. [**Testing**](#testing)
    * Testing User Stories from User Experience (UX) Section
    * Further Testing
    * Known Bugs

6. [**Deployment**](#deployment)
    * GitHub Pages
    * Forking the GitHub Repository
    * Making a Local Clone

7. [**Credits**](#credits)
    * Code 
    * Content
    * Media
    * Acknowledgements

<br>

# UX

## Project Goals

<br>

The purpose of this project is to 

*"...build a full-stack site based around business logic used to control a centrally-owned dataset. You will set up an authentication mechanism and provide paid access to the site's data and/or other activities based on the dataset, such as the purchase of a product/service"* using HTML, CSS, JavaScript, Python+Django, a relational database (recommending MySQL or Postgres), Stripe payments
and possible additional libraries and API's. 

Create a web application that allows users/store owner to:
    
* Add products to the website (CREATE)
* Find products to purchase online (READ)
* Edit products (UPDATE)
* Delete products (DELETE)

## Business Goals

<br>

This e-commerce website focus on maximizing direct sales to new and returning customers (convert a website visitor into a customer) by simplify and optimize content to be easy to shop (user friendly site). Also establishing brand recognition in the industry.  Target audience?

In addition to the goals above; also blog etc

## User Stories

<br>

| ID  | As A/An    | I want to...                                                      | So I can...                                                                           |
| --- | ---------- | ----------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
|     |            | **_Viewing and Navigation_**                                      |                                                                                       |
| 1   | Shopper    | View list of products                                             | Find something to purchase                                                            |
| 2   | Shopper    | View details of product                                           | See Price, Description, Image, Sizes if any                                          |
| 3   | Shopper    | See list of deals, special offers etc                           | Take advantage of deals to save money                                                |
| 4   | Shopper    | See my cart's total at any time                                   | Avoid spending too much                                                               |
|     |            | **_Registration and User Accounts_**                              |                                                                                       |
| 5   | Reg User   | Register for an account                                           | Save my delivery details and order history, get mails with news and offers                                          |
| 6   | Reg User   | Quickly login/out                                                 | Access my account                                                                     |
| 7   | Reg User   | Request a password reset                                          | Receive an email to reset my password in case I forget it                            |
| 8   | Reg User   | Receive an email confirming my registration                       | Verify my account was registered successfully                                         |
| 9   | Reg User   | Access my user profile                                            | View my order history, manage my personal details                                     |
|     |            | **_Sorting and Searching_**                                       |                                                                                       |
| 10  | Shopper    | Sort the list of available products                               | See the products in a list sorted by price, rating etc            |
| 11  | Shopper    | Sort a category of products                                       | See the products in a category sorted by name, price, rating, etc                     |
| 12  | Shopper    | Sort multiple categories simultaneously                           | Find the best rated or best priced across broad categories |
| 13  | Shopper    | Search for product                                                | Find a specific product I wish to purchase                                               |
| 14  | Shopper    | View a list of search results                                     | See if the product I want is available to purchase                                    |
|     |            | **_Purchasing and Checkout_**                                     |                                                                                       |
| 15  | Shopper    | Easily select the size and quantity whilst purchasing a product     | Ensure I don't accidentally select the wrong product, quantity, or size               |
| 16  | Shopper    | View products in my bag                                           | See what products are in my bag at a glance to ensure the items are correct           |
| 17  | Shopper    | Adjust the quantity of individual items in my bag                 | Easily adjust the amount of an item I intended to purchase (including removing)       |
| 18  | Shopper    | Easily enter my payment information                               | Checkout quickly and easily                                                      |
| 19  | Shopper    | Feel my payment and personal information is secure                | Provide the needed payment and personal information, and feel it is handled safely    |
| 20  | Shopper    | View confirmation of order before completing purchase             | Verify I haven't made any mistakes                                                    |
| 21  | Shopper    | Receive confirmation email after checking out                     | To keep record of the purchase                                                 |
|     |            | **_Admin and Store Management_**                                  |                                                                                       |
| 22  | Site Owner | Add a product                                                     | Add new products to my store                                                          |
| 23  | Site Owner | Edit/update a product                                             | Change the price, description, image etc of a product                                |
| 24  | Site Owner | Delete a product                                                  | Remove products that aren't for sale anymore                                             |


* First Time Visitor Goals

    * As a first time visitor, I want to easily understand the main purpose of the site. What kind of products, prizes etc.
    * As a first time visitor, I want the site navigation to be intutive, user friendly and over all ease-of-use.
    * As a first time visitor, I want to be inspired and interested of buying products.
    * As a first time visitor, I want to feel it is safe to purchase products from the site. 
    * As a first time visitor, I want to locate some sort of contact information or social media links to be able to follow and get a feel for the credibility of the site. 

<br>

* Returning Visitor/Customer Goals

    * As a returning visitor, I want to be able to use my previously added information (such as address etc) when purchase a product.  
   
<br>

* Frequent Visitor Goals

    * As a frequent visitor, I want to get presented with new products and seasonal products.

<br>

## Design Choices

<br>

* Color scheme

    The page consists of a white base with black, light green and orange as accent colors. Button at home page is orange to draw the visitors attention to it since it's the first thing they see when entering the site. Main purpose is to get a large base of Lazy Vegans that adds recipes so the ramount of recipes increases.
    
    When hover buttons, they turn to the light green color to tie different elements of the sites together. The chosen colour scheme was specifically selected in order to define the vibe of the page. 

    Green is usually associated with healthy, organic and vegetarian food. The green and white color combination is clean, crisp, and are associated with nature and environmental awareness. The green color has a warm vibe while the supporting soft white lend a modern look. Since green is found commonly in nature, it makes it an excellent choice for recipes sites with healthy and plant based foods. Many Health food stores, Salad bars and Vegan restaurants chooses these kind of colors.
    
    Orange calls to mind feelings of enthusiasm and warmth. Orange has very high visibility, you can use it to draw attention and highlight the most important elements of your design. Orange is very effective for promoting especially food and kitchen products.
    
    ![Color scheme](static/images/color_scheme.png)

* Typography

    Roboto font is the main font used throughout the site with Major Mono Display used to headers. Roboto has a mechanical skeleton and the forms are largely geometric. At the same time, the font features friendly and open curves. It's subtle and it doesn´t take any attention away from the content. This makes Roboto a more natural reading rhythm more commonly found in humanist and serif types. 
    
    Major Mono Display is a monospaced geometric sans serif all-uppercase typeface with a playful attitude. This font is a great choice for playful web typography.. Major Mono Display is a clean but charming and unconventional font that also gives the site a relaxed vibe. The combination of these fonts represents both the healthy, vegan side aswell as the relaxed fast food approach. 

    ![Fonts](static/images/fonts.png)

* Imagery

    Images and the choices of the images is an important component of this site. I chose contemporary, clean images that appeal most audiences. I have four appealing images at the home page to catch the visitors intrerest right away. I use lot of space around images and content to get the visitor an uncluttered and comfortable browsing experience on all device sizes.

* Icons

    All icons (except the one at the tab which is taken from FreeIcons) used are taken from Font Awsome. I have decided to choose icons for the search button, back to top icon, add buttons, log in button, log out button, cancel button, edit button, register button and social media link (Pinterest) in the footer.

<br>

## Wireframes 


* [Mobile](https://github.com/jennymalmoe/MSP3/blob/main/wireframes/mobile/wireframes_mobile.pdf) 
* [Tablet](https://github.com/jennymalmoe/MSP3/blob/main/wireframes/tablet/wireframes_tablet.pdf)
* [Desktop](https://github.com/jennymalmoe/MSP3/blob/main/wireframes/desktop/wireframes_desktop.pdf)

<br>

**Post wireframes design changes:**
While the project relied on these wireframes, there are some differences between the wireframes and the final product. 

* Only register button at Home page and no Log In button.
* I choose to only have one social media channel in footer.
* There is no qoute at the bottom of Home page.
* There are no category buttons at Recipe page.
* Recipe cards at Recipe page has a little bit of different styling than in wireframes. 
* No user information in Profile page. 
* Slightly different layout of the recipes after you clicked to view recipe.

<br>

# Features

## Existing Features 

<br>

Every page of the website features a consistently responsive and intuitive layout and navigational system:

**General features**
* Fixed navbar to be seen at all times.
* Footer on all pages.  
* Responsive site on all devices. 
* Fixed on top of the page on all device sizes.
* Shown as a collapsible navbar (hamburger button) triggered at tablets and mobile devices. 
* Search bar allowing visitors to search for recipes. 
* Visitor can contact Lazy Vegan (mail) by clicking at mail address in footer.
* Visitor/Users can follow Lazy Vegan at Pinterest by clicking Pinterest icon.

**Home Page**
* Features a modern design and eye catching image.
* Visitor/Users can get redirected directly to Recipe page. 
* Registration, visitors allows to register.

**Recipe Page**
* Visitors/Users can search for recipes.
* Features a clean search bar for user to search. 
* Visitors/Users can read recipes.
* Visitors/Users can see who added the recipes.

**Shop Page**
* Kitchen ware is presented and visitor can get inspired by the products and get redirected to the site and buy the products.
* Features some examples of products that goes hand in hand with the rest of the sites purpose; eco and vegan friendly kitchen ware.

**Log In Page**
* Log In is possible after registered.
* User gets a success message when loged in to verify user stated right username and password.
* Features a clean log in form for user to log in.
* Users can be redirected directly to Registration Page if not already registered.
* Users can contact Lazy Vegan (mail).
* User get redirected to Profile Page after login in.

**Log Out**
* User get redirected to Log In Page after login in.
* User gets a success message when loged out to verify user loged out.
* Features a clean log out form for user to log out.

**Register Page**
* Registration, visiters allows to register.
* User gets a "welcome message" at Profile page when registered to verify user registration. 
* Features a clean registration form for visitor to sign up.
* Visitor can be redirected directly to Log In Page if already registered.
* Visitor can contact Lazy Vegan (mail).
* User get redirected to Profile Page after registered.

**Profile Page**
* Users can see own added recipes. 
* If user hasn't added any recipes, a suggestion to do that is presented along with a button to redirect directly to Add Recipe page. 
* Users can edit, delete and add recipes. 

**Add Recipes**
* User can choose between four categories, add a recipe name, image url, choose to use default image insted of own image, see a preview of that image url, add ingredients and directions for the recipe, tell if it is a gluten free recipe or not.
* User gets a success message when added a recipe to verify adding recipe completed.
* Features a clean form for user to add a recipe.
* Done adding recipe get redirected to Recipe Page.

**Edit Recipe**
* Edit one or more sections in the recipe (only recipes added by user her self).
* User gets a success message when edited a recipe to verify updated recipe completed.
* Delete a recipe (only recipes added by user her self).
* Features a clean form for user to edit, delete or cancel.
* Each section is pre-filled with data provided when adding recipe in first place. 
* Done editing recipe get redirected to Recipe Page.

**Delete Recipe**
* User gets a success message when deleting a recipe to verify recipe now deleted. 

<br>

## Features left to implement
* Email notification functionality for users to be alerted when a new recipe is added.
* Be able to search through categories, kind of food (italian, mexican etc).
* Ability to reset an account password.
* User profile picture functionality, allowing users to add profile pictures.
* Allowing/Enabling users to comment the recipes.
* Present more information about the benefits for being a vegan and living a vegan lifestyle.
* Easier to get contacted by business partners regarding any collaboration, business deals and sponsorship.
* Get more contact information about the registered users to be able to reach out (newsletters, offers etc).
* Some kind of chatt/forum for the community to grow. 

<br>

# Database Design

<br>

MongoDB Atlas is used as database backend for storing user and recipes details. There are three collections; 

<br>

## Database schema
![Database](static/images/db_scheme.png)

<br>

# Technologies Used

<br>

**Languages, Frameworks and Libraries**

<br>

* [BSON](https://bsonspec.org/) - bson.objectid is a required dependency for MongoDB management system.
* [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) - used to create the styling throughout the site.
* [Google fonts](https://fonts.google.com/) - used to import fonts.
* [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML) - used to create the site structure.
* [Flask](https://flask.palletsprojects.com/en/1.1.x/) - framework used to create and populate the templates.
* [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript) - used for the sidenav, back-to-top button, image preview.
* [Jinja](https://jinja.palletsprojects.com/en/3.0.x/) - Jinja templating language was used to simplify and display backend data in html.
* [jQuery](https://jquery.com/) - used to activate the Materialize functionality.
* [Materialize](https://materializecss.com/) - library used for styling and responsiveness.
* [PyMongo](https://pypi.org/project/pymongo/) - flask_pymongo was used for interacting with MongoDB database from Python.
* [Python](https://www.python.org/) - used to write the logic that operates the site.
* [Werkzeug](https://werkzeug.palletsprojects.com/en/2.0.x/) - used for password hashing and authentication.
    
<br>

**Tools and Editors**

<br>

* [Am I Responsive](http://ami.responsivedesign.is/) - used to validate the responsiveness. 
* [Balsamiq](https://balsamiq.com/) - used to create the wireframes.
* [Chrome DevTools](https://developer.chrome.com/docs/devtools/)  - used Lighthouse to check sites performance and the dev tool to check responsiveness.
* [Designwizard](https://www.designwizard.com/) - used for inspirations regarding color combinations.
* [Font-Awesome](https://fontawesome.com/) - used for icons.
* [FreeIcons](https://freeicons.io/) - used for icon in tab.
* [Git](https://git-scm.com/) - used for version control to commit to Git and push to Heroku.
* [GitHub](https://github.com/) - used to store the projects code after being pushed from Git.
* [Gitpod](https://gitpod.io/) - IDE used for development.
* [Heroku](https://www.heroku.com/home) - cloud platform used to deploy application.
* [Jinja](https://jinja.palletsprojects.com/en/3.0.x/) - Jinja templating language was used to simplify and display backend data in html.
* [JSHint](https://jshint.com/) - used to test JS code to ensure there were no errors.
* [Unsplash](https://unsplash.com/) - Images used were obtained from Unsplash.
* [PEP8](https://www.python.org/dev/peps/pep-0008/) - Used as style guide for Python code.
* [PEP8online](http://pep8online.com/) - Used to check code for PEP8 requirements
* [Pixelmator](https://www.pixelmator.com/mac/) - used to resize images.
* [Postimages](https://postimages.org/) - used to create url for images. 
* [RandomKeygen](https://randomkeygen.com/) - used to generate secure password to Secret Key. 
* [TechSini](https://techsini.com/) - mockup generator used for preview of the  website.
* [Visual Studio Code](https://code.visualstudio.com/) - IDE used for code editing.
* [W3C Validator](https://validator.w3.org/) - used to test HTML code to ensure there were no errors.
* [W3C Validator CSS](https://validator.w3.org/) - used to test CSS code to ensure there were no errors.

<br>

### Database Management

<br>

* [MongoDB](https://www.mongodb.com/3) - used for database functionality.
* [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) - used to host the database.

<br>

# Testing
See separate [testing.md file](documentation_testing/testing.md)

<br>

# Deployment

<br>

Requirements to deploy:

* An IDE (Gitpod)
* Python3 (In order to to run the application and use Flask)
* PIP3 (To install all application imports, such as Flask and OS)
* A template folder (To link app routes)
* A database (MongoDB Atlas)

<br>

## MongoDB Configuration
1. Login to your [MongoDB](https://www.mongodb.com/) Account.
2. From Clusters tab, click on Connect.
3. Select Connect to your application.
4. Select Python as Driver and choose Version 3.6 or later
5. Create a new env python file in your project, paste and save the connection link and variables.

![mongo](static/images/mongo_db.png)

6. Create an instance of PyMongo

![py_mongo](static/images/py_mongo.png)

<br>

## GitHub Pages
1. Log into [GitHub](https://github.com/)
2. From the list of repositories, select the repository wanting to deploy.
3. From the menu items near the top of bthe page, select "Settings"
4. Scroll down to the GitHub Pages section.
5. Under "Source" click the drop-down menu labbelled "None" and select "Master Branch"
6. On selecting "Master Branch" the page is automatically refreshed, website is now deplyed. 
7. Scroll back down to the GitHub Pages section to retrieve the link to the deployed site. 

<br>

## Forking the GitHub Repository
Making a copy of the original repository on our GitHub account to view or to make changes without affecting the original repository;
1. Log into [GitHub](https://github.com/) and locate the repository.
2. At the top of the Repository, just above the "Settings" button on the menu, locate the "Fork" button.
3. You should now have a copy of the original repository in your GitHub account.

<br>

## Making a Local Clone
1. Install the Gitpod Browser Extentions for Chrome.
2. After installation, restart the browser. 
3. Log in to [Gitpod](https://www.gitpod.io/) with your gitpod account.
4. Navigate to the Project GitHub repository.
5. Click the green "Gitpod" button in the top right corner of the repository.
6. This triggers a new gitpod workspace to be created from the code in GitHub where you can work locally.

## To work on the project code within a local IDE 
1. Log in to [GitHub](https://github.com/) and locate the GitHub Repository.
2. Under the repository name, click "Clone or download".
3. In the clone with HTTPs section, copy the clone URL for the repository.
4. Open the terminal in your local IDE.
5. Change the current working directory to the location where you want the cloned directory to be made.
6. Type **git clone**, and then paste the URL you copied in Step 3.
7. Press Enter. Your local clone will be created.

<br>

## Heroku Deployment
1. Before deploying your project create a requirements.txt file by running the following command in the CLI;

    ![pip freeze](static/images/pip_freeze.png)

2. Create a Procfile file by running the following command in the CLI;

    ![procfile](static/images/echo.png)

3. git add and git commit the new requirements and Procfile and then git push the project to GitHub.
3. Log in to [Heroku](https://dashboard.heroku.com/apps).
4. Select "New" on your dashboard and then select "Create new app".
5. Choose a name for your application, select your region, and then click "Create app".
6. From the app dashboard, navigate to "Deploy" tab.
7. From Deployment method select "Github" and confirm the linking of the Heroku app by clicking "Search" then select your repository name.
8. Once you select your repository, click on "Connect".
9. After you connected to your repository, click on "Settings" tab on your app dashboard, and click on "Reveal Config Vars" and add your configuration variables to Heroku.
10. Navigate to "Deploy" tab, and from Manual deploy choose your master branch, and click "Deploy Branch".
11. After you deployed your branch "Enable Automatic Deploys".
12. Site is successfully deployed, any further changes will automatically be updated everytime they are commited and pushed on Github.

<br>

# Credits
* My mentor Oluwaseun Owonikoko for helpfull feedback througout the project.
* Code Institute tutor support.
* Fellow students on Slack for a helping hand when I've got stuck.
* Google!

Site for educational purposes only.














superuser
installing django-allauth
installed pillow 
bootstrap v5.1
bulma Bulma is a free, open source CSS framework based on Flexbox and built with Sass. iconclass in base.css.
imgur url img
bug hade inte bs in data-toggle först, ska va data-bs-toggle. Bootstrap Generally, we recommend using a button with the data-bs-target attribute. 
postgres as a server based db, installed a package (psycopg2) to allow usage of postgres and gunicorn package to act as our web server and replace our my development server once the app is deployed to heroku. 
git
stripe payment platform
miniwebtool.com - Django Secret Key Generator
https://django-allauth.readthedocs.io/en/latest/installation.html
https://jsonformatter.org/
pixlmatr for creating my logo
bug1: needed <div class="toast" role="alert" aria-live="assertive" aria-atomic="true"> for bootstrap 5. added data-bs-autohide="false". Instead of <div class="toast custom-toast rounded-0 border-top-0" data-autohide="false">
bug2:changed js from $('toast').toast('show') to 
{% block postloadjs %}
      <script type="text/javascript">
          $('.toast').show()
      </script>
    {% endblock %}
    notification/success messages didn't show. 

bug3: needed data-bs-autohide="false" BS pga bootstrap 5.

If user accendentally or intentionally closes the browser window after the payment is confirmed but before the form is submitted, there would be a payment in stripe but no order in our database. to prevent this situation I've build in some redundancy, each time an event occurs on stripe (such as a payment intent being created) a payment being completed on stripe a webhook is sent out that we can listen for. webhooks are like the signals django sends each time a model is saved or deleted. except that they are sent securely from stripe to a url we specify. (Boutique Adi - stripe - part 10)

AWS Amazon Web Services, s3 (Simple Storage Service) to host/store  media and static files (as well as the product images). Heroku for the rest of our code. 

Postgres

https://10minutemail.com/ to test registration in my account

bug register my account got an SMTPAuthenticationError at /accounts/signup/. whenever I tried registrate a new user, it said "Already have an account? Then please sign in." I had DEVELOPMENT in my gitpod settings, but scope was set for my msp3 not to my msp4 or */* (to access all). It was trying to use the gmail smtp from Gitpod but gmail was expecting the Heroku app to access it, so it wasn't authenticated and thats why it didn't work. 

code taken from boutique ado 

security features

test credit card to use

lägga in requiremets in handbook for msp4 in user stories




