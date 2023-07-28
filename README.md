Project Examen for WIFI Wien: Ausbildung zum/zur geprüften Full Stack Javascript Developer (Education for certified Full Stack Javascript Developer)

---

#### Online Demo

[https://post-shop.onrender.com](https://post-shop.onrender.com/)

(Can take few seconds to wake up the free server resources)

---

### Graduation project

I develop a fictitious online shop named „Post Stamps and philately“, build on top of the latest MERN Stack technology and Redux

![Post Stamps and philately!](./frontend/src/assets/PostOnlineShop.png 'Post Stamps and philately')

### Project goals

About 100 development hours invested in all the project phases which includes:

- Project documentation
- Functional and object-oriented programming
- Client/Server communication, REST/CRUD
- User interface
- Use of arrow functions, promises, template strings
- Event listener
- NodeJS server application (File system, Routing, Proxy HTTP)
- Database and Data storage (MongoDB)
- Mongoose, the Object Data Modeling (ODM) library for MongoDB/Node.js
- Error handling
- Authentication, JWT
- MVC patterns
- Single page application with ReactJS
- ReactJS Components
- Encryption
- Security

#### The project main parts are:

- User profile with orders
- Admin product management
- Admin user management
- Admin Order details page
- Product search feature
- Top products carousel
- Product reviews and ratings
- Product pagination
- Orders delivered
- Checkout process (shipping, payment method, etc)
- Payment with PayPal / Credit card integration
- Seeder to generate test data

##### Mongoose Database Collections relationships:

![Post Stamps and philately!](./frontend/src/assets/collections_relationship.jpg 'Post Stamps and philately')

```
 User - Product  => 1 : 1 One User can have only one Product and one Product can have only one User*
                                                   *this is from a single transaction point of view

User - Order     => 1 : 1  One User can have only one Order and one Order can have only one User

Product - Review => 1 : Many One Product can have many Reviews and One Review can have only one Product

Order - Product  => 1 : Many One Order can have many Products but One Product can have only one Order

User - Review    => None No User can have any Review and no Review can have any user
```

---

#### How to use

##### Install Dependencies (frontend & backend)

```
npm install
cd frontend
npm install
```

##### Run

Rename env.example to .env and add your data
Run in development mode (:3000) & backend (:7000)

```
cd ../backend
npm run dev
```

##### Run backend only

```
npm run server
```

---

#### Build & Deploy

##### Create frontend prod build

```
cd frontend
npm run build
```

##### Sample User Logins

admin@gmail.com (Admin)
Password: 123123

max@gmail.com (User)
Password: 123123
