**Ecommerce CMS**
----
  Ecommerce CMS is an application to monitor inventory of an online store. This app has:
*  **REST API**
 * **JSON formatted response**
---
# URL
```
Server URL : http://localhost:3000
or
Server URL : https://ecommerce-dody.herokuapp.com
```
---
* **URL**

  `GET`/products

* **Method:**

  `GET`
  
*  **URL Params**

   None

* **Data Params**

  Request Headers: User `access_token=[string]`

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** 
    ```javascript
    [
      {
        "id": 1,
        "name": "Galaxy Note 10",
        "image_url": "https://cdn.gsmarena.com/imgroot/news/19/05/galaxy-note10-render/-727/gsmarena_001.jpg",
        "price": 15000000,
        "stock": 15,
        "createdAt": "2021-02-17T14:16:52.575Z",
        "updatedAt": "2021-02-17T14:16:52.575Z"
      },
      {
          "id": 2,
          "name": "Motorola P30",
          "image_url": "https://cdn.gsmarena.com/imgroot/news/18/08/motorola-p30/-728/  gsmarena_007.jpg",
          "price": 10000000,
          "stock": 10,
          "createdAt": "2021-02-17T14:17:33.020Z",
          "updatedAt": "2021-02-17T14:17:33.020Z"
      }
    ]
 
* **Error Response:**

  * **Code:** 500  <br />
    **Content:** 
    ```javascript
    { 
      "Internal Server error" 
    }
---
* **URL**

  `POST`/products

* **Method:**

  `POST`
  
*  **URL Params**

   None

* **Data Params**

  Request Body: `name=string`, `image_url=string`, `price=integer`, `stock=integer`

* **Success Response:**

  * **Code:** 201 <br />
    **Content:** 
    ```javascript
        {
        "id": 1,
        "name": "Galaxy Note 10",
        "image_url": "https://cdn.gsmarena.com/imgroot/news/19/05/galaxy-note10-render/-727/gsmarena_001.jpg",
        "price": 15000000,
        "stock": 15,
        "createdAt": "2021-02-17T14:16:52.575Z",
        "updatedAt": "2021-02-17T14:16:52.575Z"
        }
* **Error Response:**

  * **Code:** 500  <br />
    **Content:** 
    ```javascript
    { 
      "Internal Server error" 
    }
   * **Code:** 400  <br />
     **If price input is empty:** 
     ```javascript
     { 
       "Price cannot be empty" 
     }
  * **Code:** 400  <br />
     **If stock input is empty:** 
     ```javascript
     { 
       "stock cannot be empty" 
     }
---
* **URL**

  `GET`/products/:id

* **Method:**

  `GET`
  
*  **URL Params**

   `id=[integer]`

* **Data Params**

  Request Headers: User `access_token=[string]`

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** 
    ```javascript
    
        {
        "id": 1,
        "name": "Galaxy Note 10",
        "image_url": "https://cdn.gsmarena.com/imgroot/news/19/05/galaxy-note10-render/-727/gsmarena_001.jpg",
        "price": 15000000,
        "stock": 15,
        "createdAt": "2021-02-17T14:16:52.575Z",
        "updatedAt": "2021-02-17T14:16:52.575Z"
        }
        
 
* **Error Response:**

  * **Code:** 404  <br />
    **Content:** `{ "error not found" }`
---
* **URL**

  `PUT`/products/:id

* **Method:**

  `PUT`
  
*  **URL Params**

   `id=[integer]`

* **Data Params**

  Request Body: `name=string`, `image_url=string`, `price=integer`, `stock=integer`

  Request Headers: User `access_token=[string]`

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** 
    ```javascript
        {
        "id": 1,
        "name": "Galaxy Note 10-edited",
        "image_url": "https://cdn.gsmarena.com/imgroot/news/19/05/galaxy-note10-render/-727/gsmarena_001.jpg",
        "price": 11000000,
        "stock": 10,
        "createdAt": "2021-02-17T14:16:52.575Z",
        "updatedAt": "2021-02-17T14:16:52.575Z"
        }
    
* **Error Response:**

  * **Code:** 500  <br />
    **Content:** 
    ```javascript
    { 
      "Internal Server error" 
    }
* **If User Id is not authorized**  <br /> 
  * **Code:** 400  <br />
    **Content:** 
    ```javascript
    { 
        "You are not authorized" 
    }
--- 
* **URL**

  `DELETE`/products/:id

* **Method:**

  `DELETE`
  
*  **URL Params**

   `id=[integer]`
 
* **Data Params**

  Request headers: User access_token=[string]

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** 
    ````
    {
      "Product Successfully deleted"
    }
 
* **Error Response:**
* **If Server Error**  <br /> 
  * **Code:** 500  <br />
    **Content:** 
    ```javascript
    { 
        "Internal Server error" 
    }
* **If id is not found**  <br />
    
  * **Code:** 404  <br />
    **Content:** `{ 
        "Error not found" 
        }`
* **If User Id is not authorized**  <br /> 
  * **Code:** 400  <br />
    **Content:** 
    ```javascript
    { 
        "You are not authorized" 
    }
---
* **URL**

  `POST`/users/register

* **Method:**

  `POST`
  
*  **URL Params**

   None

* **Data Params**

  Request Body: `email=string`, `password=string`

* **Success Response:**

  * **Code:** 201 <br />
    **Content:** 
    ```
        {
        "id": 1,
        "email": "admin1@mail.com",
        "password": "$2a$10$9btTdLCT7.WdWMqe8uMgCe1WCpUFJhOswbMo5RZLoqp840rrFBPC6"
        }
* **Error Response:**

  * **Code:** 500  <br />
    **Content:** 
    ```
    { 
      "Internal Server error" 
    }
  * **Code:** 400  <br />
  **If User didn't input a correct email format:** 
    ```
    { 
      "Invalid email format" 
    }
  * **Code:** 400  <br />
    **If User didn't input a min password length:** 
      ```
      { 
        "password must contain min 6 characters" 
      }
---
* **URL**

  `POST`/users/login

* **Method:**

  `POST`
  
*  **URL Params**

   None

* **Data Params**

  Request Body: `email=string`, `password=string`

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** 
    ```
        {
        "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJhZG1pbjFAbWFpbC5jb20iLCJpYXQiOjE2MTM4MDgyMjB9.HTWb_pYNgsK-bmjIq-Gag6b5aJYi5EaylHSez44Iyyo"
        }
* **Error Response:**

  * **Code:** 500  <br />
    **Content:** 
    ```
    { 
      "Internal Server error" 
    }
  * **Code:** 400  <br />
      **if email or password didn't match with database:** 
      ```
      { 
        "Invalid email or password" 
      }
---
**Ecommerce-Customer-Side**
----
  Ecommerce Customer Side is an application to monitor inventory of an online store. This app has:
*  **REST API**
 * **JSON formatted response**
---
# URL
```
Server URL : http://localhost:3000
or
Server URL : https://ecommerce-dody.herokuapp.com
```
---
* **URL**

  `GET`/cart

* **Method:**

  `GET`
  
*  **URL Params**

   None

* **Data Params**

  Request Headers: User `access_token=[string]`

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** 
    ```javascript
    [
      {
        "id": 1,
        "userId": 5,
        "productId": 4,
        "amount": 1,
        "totalPrice": 15000000,
        "createdAt": "2021-02-23T17:57:22.381Z",
        "updatedAt": "2021-02-23T17:57:22.381Z",
        "Product": {
            "id": 4,
            "name": "Galaxy Note 10",
            "image_url": "https://cdn.gsmarena.com/imgroot/news/19/05/galaxy-note10-render/-727/gsmarena_001.jpg",
            "price": 15000000,
            "stock": 15,
            "createdAt": "2021-02-17T14:16:52.575Z",
            "updatedAt": "2021-02-17T14:16:52.575Z"
        }
    },
    {
        "id": 12,
        "userId": 5,
        "productId": 5,
        "amount": 1,
        "totalPrice": 10000000,
        "createdAt": "2021-02-23T16:26:57.601Z",
        "updatedAt": "2021-02-23T16:26:57.601Z",
        "Product": {
            "id": 5,
            "name": "Motorola P30",
            "image_url": "https://cdn.gsmarena.com/imgroot/news/18/08/motorola-p30/-728/gsmarena_007.jpg",
            "price": 10000000,
            "stock": 10,
            "createdAt": "2021-02-17T14:17:33.020Z",
            "updatedAt": "2021-02-17T14:17:33.020Z"
        }
    }
    ]
 
* **Error Response:**

  * **Code:** 500  <br />
    **Content:** 
    ```javascript
    { 
      "Internal Server error" 
    }
---
* **URL**

  `POST`/cart

* **Method:**

  `POST`
  
*  **URL Params**

   None

* **Data Params**

  Request Body: `userId=integer`, `productId=integer`, `amount=integer`, `totalPrice=integer`

  Request Headers: User `access_token=[string]`

* **Success Response:**

  * **Code:** 201 <br />
    **Content:** 
    ```javascript
        {
        "id": 1,
        "userId": 5,
        "productId": 3,
        "amount": 1,
        "totalPrice": 7000000,
        "createdAt": "2021-02-23T17:57:22.381Z",
        "updatedAt": "2021-02-23T19:17:51.936Z"
        }
* **Error Response:**

  * **Code:** 500  <br />
    **Content:** 
    ```javascript
    { 
      "Internal Server error" 
    }
   * **Code:** 400  <br />
     **If amount input is empty:** 
     ```javascript
     { 
       "Amount cannot be empty" 
     }
  * **Code:** 400  <br />
     **If Total Price input is empty:** 
     ```javascript
     { 
       "Total Price cannot be empty" 
     }
---
* **URL**

  `PUT`/cart/:id

* **Method:**

  `PUT`
  
*  **URL Params**

   `id=[integer]`

* **Data Params**

  Request Body: `userId=integer`, `productId=integer`, `amount=integer`, `totalPrice=integer`

  Request Headers: User `access_token=[string]`

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** 
    ```javascript
        
        {
          "id": 1,
          "userId": 5,
          "productId": 4,
          "amount": 2,
          "totalPrice": 7000000,
          "createdAt": "2021-02-23T17:57:22.381Z",
          "updatedAt": "2021-02-23T19:17:51.936Z"
        }
        
    
* **Error Response:**

  * **Code:** 500  <br />
    **Content:** 
    ```javascript
    { 
      "Internal Server error" 
    }
--- 
* **URL**

  `DELETE`/products/:id

* **Method:**

  `DELETE`
  
*  **URL Params**

   `id=[integer]`
 
* **Data Params**

  Request headers: User access_token=[string]

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** 
    ````
    {
      "Cart Successfully deleted"
    }
 
* **Error Response:**
* **If Server Error**  <br /> 
  * **Code:** 500  <br />
    **Content:** 
    ```javascript
    { 
        "Internal Server error" 
    }
* **If id is not found**  <br />
    
  * **Code:** 404  <br />
    **Content:** `{ 
        "Error not found" 
        }`
---
* **URL**

  `POST`/users/register

* **Method:**

  `POST`
  
*  **URL Params**

   None

* **Data Params**

  Request Body: `email=string`, `password=string`

* **Success Response:**

  * **Code:** 201 <br />
    **Content:** 
    ```
        {
        "id": 1,
        "email": "user1@mail.com",
        "password": "$2a$10$9btTdLCT7.WdWMqe8uMgCe1WCpUFJhOswbMo5RZLoqp840rrFBPC6"
        }
* **Error Response:**

  * **Code:** 500  <br />
    **Content:** 
    ```
    { 
      "Internal Server error" 
    }
  * **Code:** 400  <br />
  **If User didn't input a correct email format:** 
    ```
    { 
      "Invalid email format" 
    }
  * **Code:** 400  <br />
    **If User didn't input a min password length:** 
      ```
      { 
        "password must contain min 6 characters" 
      }
---
* **URL**

  `POST`/users/login

* **Method:**

  `POST`
  
*  **URL Params**

   None

* **Data Params**

  Request Body: `email=string`, `password=string`

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** 
    ```
        {
        "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJhZG1pbjFAbWFpbC5jb20iLCJpYXQiOjE2MTM4MDgyMjB9.HTWb_pYNgsK-bmjIq-Gag6b5aJYi5EaylHSez44Iyyo"
        }
* **Error Response:**

  * **Code:** 500  <br />
    **Content:** 
    ```
    { 
      "Internal Server error" 
    }
  * **Code:** 400  <br />
      **if email or password didn't match with database:** 
      ```
      { 
        "Invalid email or password" 
      }
---


