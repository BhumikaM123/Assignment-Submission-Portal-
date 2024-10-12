
### **Assignment Submission Portal Documentation**

---

### **Objective:**
The assignment submission portal enables users to upload assignments and allows admins to manage the submitted tasks by accepting or rejecting them.

---

### **User Types:**

1. **Users**:
   - **Register/Login**: Users can register with a unique `userId` and password. Upon successful login, they receive a token for authentication.
   - **Upload Assignments**: Users can upload assignments to be reviewed by specific admins. The assignment includes the task description and the admin’s identifier.

2. **Admins**:
   - **Register/Login**: Admins can register and log in with their credentials, similar to users. They also receive a token for authenticated actions.
   - **View Assignments**: Admins can view assignments that are tagged to them.
   - **Accept/Reject Assignments**: Admins can either accept or reject an assignment based on their review.

---

### **Functionality Overview:**

1. **Authentication**:
   - Both users and admins authenticate using **JWT tokens**.
   - The token is included in the `Authorization` header when making requests to protected routes.

2. **Database**:
   - MongoDB is used to store user and admin data, as well as the assignments submitted.
   - Each assignment includes:
     - `userId`: The ID of the user who submitted the assignment.
     - `task`: The task content or description.
     - `admin`: The admin reviewing the task.
     - `status`: Status of the assignment (e.g., pending, accepted, rejected).
     - `timestamp`: The time the assignment was submitted.

3. **Role-Based Actions**:
   - **Users**:
     - Can register, log in, and upload assignments tagged to an admin.
   - **Admins**:
     - Can view all assignments assigned to them.
     - Can accept or reject assignments.
     - The decision is recorded in the database with a timestamp for tracking.

---

### **Validation:**
- Inputs are validated to ensure:
  - **Users/Admins**: Unique `userId`/`adminId` and valid passwords.
  - **Assignments**: Correctly formatted `task` and valid `adminId` when uploading.
  - **Error Handling**: Proper error messages are returned for invalid input or failed operations.

---

### **Workflow Example:**

1. **User Registration**:  
   - User provides a unique `userId` and password.
   - On successful registration, the user can log in.

2. **User Uploads Assignment**:  
   - Once logged in, the user can submit an assignment by specifying their `task` and selecting an `admin`.
   - The assignment is saved in the database, tagged to the specified admin.

3. **Admin Views Assignments**:  
   - Admin logs in and can see all assignments tagged to them.
   - Admin reviews the task details, including the timestamp and user information.

4. **Admin Accepts/Rejects Assignment**:  
   - Admin selects an assignment and chooses to either accept or reject it.
   - The decision is saved in the database, and the user can view the status.

---

### **Error Handling:**
- If a user or admin attempts to register with an existing `userId` or `adminId`, they receive an error message.
- If an assignment is uploaded with an invalid `adminId`, the user is notified of the error.
- Unauthorized access to protected routes will return a **401 Unauthorized** error.

<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).
