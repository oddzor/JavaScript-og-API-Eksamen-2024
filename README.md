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

#### Gokstad Ranch Dog Adoption is a fictional business website created for a JavaScript exam.
#### It is created with strictly vanilla HTML, CSS and JS.

---

### Dependencies


#### [Dog API](https://dog.ceo/dog-api/)

#### API That provides users with images of dogs, can be retrieved randomly selected or breed specific.
#### Random selection has been used for this project.


#### [CRUDCRUD](https://crudcrud.com/Dashboard/49b54a659c37444badaa69070d61b85a)

#### This specific endpoint is required for a working app, this issue can be resolved by replacing the endpoint url with a current one. 

> [!CAUTION]  
> As of May 17th 2024, there are approximately 55 days remaining on the endpoints life.


#### [Allow CORS](https://addons.mozilla.org/en-CA/firefox/addon/access-control-allow-origin/)

#### Some sort of Cross-Origin Resource Sharing (CORS) plugin should be used to ensure no errors when using API. Go to your browser specific plugin resource.

<hr>

### Functionality

# Application Workflow for Fetching DogAPI Data and User Interactions

```mermaid
    A[Start] --&gt; B[Fetch DogAPI Data]
    B --&gt; C[Create 25 HTML Elements and Populate using For Loop]
    C --&gt; D{Is User Registered?}
    D --&gt;|Yes| E[Switch to Login]
    E --&gt; F[Login with Username/Password from Backend]
    D --&gt;|No| G[Input Registration Information]
    G --&gt; H[Post to Backend and Login]
    F --&gt; I[Retrieve User ID from Backend and Store in localStorage]
    H --&gt; I
    I --&gt; J[User Logs In]
    J --&gt; K[Click Dog Image from Gallery]
    K --&gt; L[Display Image and Additional Information]
    L --&gt; M{Add to Wishlist?}
    M --&gt;|Yes| N[PUT Request to Add Data to User's "Favorites" Array]
    M --&gt;|No| O[Continue Browsing]
    N --&gt; O
    O --&gt; P[Go to Wishlist to See Selected Favorites]
    P --&gt; Q{Remove Favorites?}
    Q --&gt;|Yes| R[Remove from Backend]
    Q --&gt;|No| S[Continue Browsing]
    R --&gt; S
    S --&gt; T[Click "Delete My Account"]
    T --&gt; U[Clear All Data from Backend and localStorage]
    S --&gt; V[Click "Logout"]
    V --&gt; W[Clear Data from localStorage Only]
    U --&gt; X[End]
    W --&gt; X[End]
    ```