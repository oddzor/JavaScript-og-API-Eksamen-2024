# JavaScript & API Exam 2024

#### Created by Odd Grimholt
#### oddgrimholt@gmail.com

---

### Table of Contents

1. General
2. Dependencies
3. Functionality
4. Notes

---

### General

##### Gokstad Ranch Dog Adoption is a fictional business website created for a JavaScript exam.
##### It is created with strictly vanilla HTML, CSS and JS.

---

# Dependencies


#### [Dog API](https://dog.ceo/dog-api/)

##### API That provides users with images of dogs, can be retrieved randomly selected or breed specific.
##### Random selection has been used for this project.


#### [CRUDCRUD](https://crudcrud.com/Dashboard/49b54a659c37444badaa69070d61b85a)

##### This specific endpoint is required for a working app, this issue can be resolved by replacing the endpoint url with a current one. 

> [!CAUTION]  
> As of May 17th 2024, there are approximately 55 days remaining on the endpoints life.


#### [Allow CORS](https://addons.mozilla.org/en-CA/firefox/addon/access-control-allow-origin/)

##### Some sort of Cross-Origin Resource Sharing (CORS) plugin should be used to ensure no errors when using API. Go to your browser specific plugin resource.

<hr>

# Functionality 

#### Fetching of DogAPI

 Simple Fetch request, public API without authorization requirements (API Key).

<br>

#### **Creating HTML elements**

 Creating HTML and populating with API data + random dog names from hardcoded array.

<br>

#### **Registration**

 Retrieving data from input fields, submit button executes ``POST`` request where email, password & an empty favorites array gets posted to the specified endpoint.

<br>

### **Login prior to registration**

 If an attempt is made to login before registering you will be given a invalid credentials/asked to register, because the login function is unable to find you in the [backend](https://crudcrud.com/Dashboard/49b54a659c37444badaa69070d61b85a).

<br>

### **Login**

 Runs a GET request to the /users endpoint on crudcrud, then crosschecking to see if its exists in the endpoint, if function finds a match, it adds the unique content from the ``..{_id:}..`` key that matches the user email and adds the ID to ``localStorage``

<br>

### **Clicking image in gallery**

 When clicking an image in the gallery, the onclick functions executes to retrieve the image url from the picture, then randomly selects a dog name from the ``[dogNames];`` array. Dog name and image url are stored to ``localStorage``. After this is completed, you are redirected to ``selected.html``


 ### **Selected page**

 Image is displayed based on url from `localstorage`, name is populated from ``[dogNames];`` and a random dog fact function executes by randomly selecting a fact from the ``[dogFacts];`` array.


 ### **Extraction and display of breed name**

 Matching the part of the url that contains breed name.

 URL syntax is (for example) ``retriever-golden`` instead of ``golden-retriever``

 Due to the naming standard in the url, a function was used to target that part of the url, then:

 - Retrieve the string in its entirety.
 - Split it at the dash (-).  ``.split``
 - Reverse the order. ``.reverse``
 - Capitalize the first letters in each word. ``chatAt(0).toUpperCase``
-  Rejoin string and store under variable ``reverseString``

After this process, breed name is populated into HTML element correctly formatted.


### **Adding to wishlist**

Retrieving the selected dog name and image from ``localStorage``

For breed, formatting is adjusted to avoid stored breed info as ``..{breed: Breed: Golden Retriever }..``, this is achieved by replacing "Breed:" with an empty space/``null``.

The ``[favorites];`` array under the specified user is updated with a ``PUT`` request and the ``favoriteDog`` object is now available from the [backend](https://crudcrud.com/Dashboard/49b54a659c37444badaa69070d61b85a). 


### Wishlist 

User specific data is retrieved from the [backend](https://crudcrud.com/Dashboard/49b54a659c37444badaa69070d61b85a) and displayed inside a specified container. ``forEach`` entry there is an image, name, breed and delete button element created in HTML.


### Remove button

<button>Remove</button>

The remove button ``onclick`` function will target the specific index and splice this from the ``[favorites];`` array, then run a ``PUT`` request to update [backend](https://crudcrud.com/Dashboard/49b54a659c37444badaa69070d61b85a) based on the ``updatedFavorites`` variable.



### Logout button

<button>Log Out</button> 

This button will completely clear ``localStorage`` and redirect to ``index.html`` allowing you to login again, or login/register with other user credentials.

### Delete account 

<button>Delete My Account</button>

The delete account button will target the user credentials that is currently logged with a ``DELETE`` request while also completely clearing ``localStorage``.


### Sorting by name

<button>Sort by Name </button> 

Sorting the favorites by name is achieved by using ``.sort`` and a ``localeCompare`` function to alphabetically arrange the entries when you click the button  

<hr>

# Notes


#### Backend limitations

I was attempting to create an endpoint ``users/id/favorites``, but this method is not allowed on crudcrud. Subdirectories were not permitted, creating own backend would make structure of data easier to work with.


#### Endpoint lifetime


The crudcrud endpoint has both a request limit and a time limit until it goes dead. I realized a bit too late that crudAPI does not have limitations on time, but this is a possible change.


<hr>

*End of Document*









<style>
button {
  background-color: #764cea;
  border-radius: 8px;
  border-style: none;
  color: #FFFFFF;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  font-weight: 500;
  height: 2rem;
  margin-block: 1rem;
  outline: none;
  padding: 0.5rem 0.75rem;
  width: 10rem;
}
</style>
