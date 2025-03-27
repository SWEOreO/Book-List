# Book-List

## Overview
BookBuddy is an online public library service designed to provide users with seamless access to a digital book catalog. This project focuses on building the **frontend** of the application, while another team has already developed the backend API. The application enables users to browse books, view details, register accounts, log in, and manage book checkouts.

## Features

### Tier I - Basic Frontend Application
All users (logged in or not) can:
- View all books available in the library's catalog.
- View detailed information about a specific book.
- Register a new account.
- Log in to an existing account.

### Tier II - Logged-in User Functionality
Once logged in, users can:
- Check out an available book.
- View their account details, including:
  - Name
  - Email
  - Books currently checked out
- Return books they have previously checked out.

## Getting Started

### Installation
1. Clone this repository:
   ```sh
   git clone https://github.com/your-username/bookbuddy.git
   ```
2. Navigate into the project directory:
   ```sh
   cd bookbuddy
   ```
3. Install dependencies:
   ```sh
   npm install
   ```
4. Start the development server:
   ```sh
   npm start
   ```

### API Integration
- The application communicates with the BookBuddy API to fetch data and manage user authentication.
- JSON Web Tokens (JWT) are used for authentication.
- The API allows CRUD operations on books and user accounts.

## Deployment
Once development is complete, deploy the application and provide the link for client access.

## Submission
Submit the link to the deployed application to Calliope for client review.

## Technologies Used
- **Frontend:** React, JavaScript, CSS
- **State Management:** React Hooks (useState, useEffect)
- **Authentication:** JSON Web Token (JWT)
- **API Communication:** Fetch API / Axios

## Contributing
If you'd like to contribute to this project, follow these steps:
1. Fork the repository.
2. Create a feature branch (`git checkout -b feature-branch`).
3. Commit your changes (`git commit -m 'Add new feature'`).
4. Push to the branch (`git push origin feature-branch`).
5. Open a Pull Request.

## License
This project is licensed under the MIT License.

---
