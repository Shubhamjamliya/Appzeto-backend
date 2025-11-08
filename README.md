# User Auth Backend

A secure, role-based authentication and user dashboard backend built using **Node.js**, **Express**, **MongoDB**, **JWT**, and **bcrypt**. This API supports user registration, login, protected routes, refresh tokens, logout, and admin-only access controls.

---

## 🚀 Features

* User Registration & Login
* Password Hashing using **bcrypt**
* Access Token (Short-lived) + Refresh Token (Long-lived)
* **HTTP-Only Cookies** for refresh token security
* Role-based Authorization (User / Admin)
* Protected User Routes
* Admin Dashboard + User Management
* Centralized Error Handling
* Input Validation (express-validator)
* Fully built using ES Modules (`import / export`)

---

## 🛠 Tech Stack

| Layer          | Technology                    |
| -------------- | ----------------------------- |
| Runtime        | Node.js                       |
| Framework      | Express.js                    |
| Database       | MongoDB + Mongoose            |
| Authentication | JWT (Access + Refresh Tokens) |
| Security       | bcrypt, cookie-parser         |
| Validation     | express-validator             |

---

## 📁 Project Structure

```
User-Auth-Backend/
├─ server.js
├─ package.json
├─ .env.example
├─ routes/
│  ├─ auth.js
│  ├─ user.js
│  └─ admin.js
├─ controllers/
│  ├─ authController.js
│  ├─ userController.js
│  └─ adminController.js
├─ models/
│  └─ User.js
├─ middleware/
│  ├─ auth.js
│  └─ admin.js
└─ config/
   └─ db.js
```

---

## ⚙️ Setup Instructions

### 1. Clone the repository

```bash
git clone <your-repo-link>
cd User-Auth-Backend
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure Environment Variables

Copy `.env.example` → `.env` and update:

```
PORT=4000
MONGO_URI=mongodb://localhost:27017/user-auth-db
JWT_SECRET=AppzetoJWTsecret501
JWT_EXPIRES_IN=15m

BCRYPT_SALT_ROUNDS=10
CORS_ORIGIN=http://localhost:3000

JWT_REFRESH_SECRET=AppzetoJWTsecret501
REFRESH_TOKEN_EXPIRE=7d
```

### 4. Start the Server

Development:

```bash
npm run dev
```

Production:

```bash
npm start
```

Server will run at:

```
http://localhost:4000
```

---

## 🔑 Authentication Flow

| Step | Action                                                                    |
| ---- | ------------------------------------------------------------------------- |
| 1    | User registers with email + password                                      |
| 2    | Password is hashed using bcrypt                                           |
| 3    | On login → Access Token returned, Refresh Token stored in httpOnly cookie |
| 4    | Protected routes require `Authorization: Bearer <token>`                  |
| 5    | If token expires → `/api/auth/refresh` generates a new Access Token       |
| 6    | Logout clears refresh token cookie                                        |

---

## 📡 API Endpoints

### Auth Routes

| Method | Endpoint             | Description          | Auth Required  |
| ------ | -------------------- | -------------------- | -------------- |
| POST   | `/api/auth/register` | Register new user    | No             |
| POST   | `/api/auth/login`    | Login & get tokens   | No             |
| GET    | `/api/auth/me`       | Get logged in user   | Yes            |
| GET    | `/api/auth/refresh`  | Refresh access token | Refresh Cookie |
| POST   | `/api/auth/logout`   | Logout user          | Yes            |

### User Routes

| Method | Endpoint              | Description         | Role       |
| ------ | --------------------- | ------------------- | ---------- |
| GET    | `/api/user/dashboard` | User dashboard info | user/admin |
| GET    | `/api/user/profile`   | Get profile         | user/admin |
| PUT    | `/api/user/profile`   | Update profile      | user/admin |

### Admin Routes

| Method | Endpoint               | Description           | Role  |
| ------ | ---------------------- | --------------------- | ----- |
| GET    | `/api/admin/dashboard` | Admin dashboard stats | admin |
| GET    | `/api/admin/users`     | Get all users         | admin |
| DELETE | `/api/admin/users/:id` | Delete a user         | admin |

---

## 🧪 Example Login Request

**Request:**

```json
POST /api/auth/login
{
  "email": "test@example.com",
  "password": "secret123"
}
```

**Response:**

```json
{
  "accessToken": "<JWT_ACCESS_TOKEN>"
}
```

Refresh token is stored in cookie automatically.

---

## 🧱 Create Admin User Manually

In MongoDB shell:

```js
db.users.updateOne({email: "test@example.com"}, {$set: {role: "admin"}})
```

---
## 🧱 Postman link:
https://winter-satellite-408845.postman.co/workspace/cb7ec392-0b12-4e4d-8f5c-9ab38d740e20/collection/32211594-5acfb9fe-b512-4181-92fe-0cbc8c093208?action=share&source=copy-link&creator=32211594


## 🏁 Conclusion

Your **User Auth Backend** is now fully set up with secure JWT authentication, refresh token rotation, and admin role authorization.

