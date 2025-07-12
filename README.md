# BBook Client Side

![React](https://img.shields.io/badge/React-18.0+-blue)
![React Router](https://img.shields.io/badge/React_Router-6.0+-CA4245)
![Firebase](https://img.shields.io/badge/Firebase-9.0+-orange)
![Bootstrap](https://img.shields.io/badge/Bootstrap-5.0+-7952B3)

A modern, responsive book warehouse management application frontend built with React. This application provides an intuitive interface for managing book inventory, tracking sales, and streamlining warehouse operations for bookstores of all sizes.

## Important Links

[![Live Demo](https://img.shields.io/badge/Live_Demo-Visit_Site-2ea44f?style=for-the-badge&logo=vercel)](https://bbook.onrender.com/)
[![Client Repository](https://img.shields.io/badge/Client_Code-GitHub-blue?style=for-the-badge&logo=github)](https://github.com/azizerorahman/bbook_client-side)
[![Server Repository](https://img.shields.io/badge/Server_Code-GitHub-blue?style=for-the-badge&logo=github)](https://github.com/azizerorahman/bbook_server-side)

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [Usage](#usage)
- [Project Structure](#project-structure)

## Features

- **Comprehensive Inventory Management**: Add, update, and remove books from inventory with ease
- **User Authentication**: Secure Firebase authentication with Google and GitHub login options
- **Real-time Updates**: Immediate reflection of inventory changes without page refresh
- **Custom Confirmation Modals**: Safe deletion with user confirmation dialogs
- **Responsive Design**: Works seamlessly across desktop, tablet, and mobile devices
- **Protected Routes**: Secure access to inventory management features
- **Personal Book Collection**: Users can manage their own book collections
- **Advanced Search & Filter**: Easy navigation through large inventories
- **Toast Notifications**: Real-time feedback for user actions
- **Loading States**: Smooth user experience with loading indicators

## Technologies Used

- **React**: Frontend library for building the user interface
- **React Router**: Navigation and routing for single-page application
- **Firebase**: Authentication service for secure user management
- **React Bootstrap**: UI component library for responsive design
- **React Firebase Hooks**: Simplified Firebase integration with React hooks
- **React Toastify**: Toast notification library for user feedback
- **React Confirm Alert**: Custom confirmation dialogs for critical actions

## Prerequisites

Before you begin, ensure you have the following installed:

- Node.js (v14 or higher)
- npm or yarn
- Firebase account and project setup
- The BBook backend API running (see [Server Repository](https://github.com/azizerorahman/bbook_server-side))

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/azizerorahman/bbook_client-side.git
   cd bbook_client-side
   ```

2. Install dependencies:

   ```bash
   npm install
   # or
   yarn install
   ```

3. Create a `.env` file in the root directory:

   ```env
   REACT_APP_apiKey=your_firebase_api_key
   REACT_APP_authDomain=your_firebase_auth_domain
   REACT_APP_projectId=your_firebase_project_id
   REACT_APP_storageBucket=your_firebase_storage_bucket
   REACT_APP_messagingSenderId=your_firebase_messaging_sender_id
   REACT_APP_appId=your_firebase_app_id
   ```

4. Start the development server:

   ```bash
   npm start
   # or
   yarn start
   ```

5. Open your browser and navigate to `http://localhost:3000`

## Environment Variables

| Variable | Description |
|----------|-------------|
| REACT_APP_apiKey | Firebase API key for authentication |
| REACT_APP_authDomain | Firebase authentication domain |
| REACT_APP_projectId | Firebase project ID |
| REACT_APP_storageBucket | Firebase storage bucket |
| REACT_APP_messagingSenderId | Firebase messaging sender ID |
| REACT_APP_appId | Firebase application ID |

## Usage

### Home Page

The main interface displays featured books, user reviews, and quick access to inventory management features.

### Authentication

- Sign up or sign in using email/password or social login (Google, GitHub)
- Secure access to protected routes and personal collections

### Inventory Management

Navigate to `/manage-inventories` to view, edit, and delete books from the warehouse inventory. Features include:

- Tabular view of all books with sorting capabilities
- Edit book details inline
- Delete books with confirmation dialogs
- Add new books to inventory

### Personal Collection

Users can manage their personal book collections at `/my-books`, separate from the main warehouse inventory.

### Book Details

Click on any book to view detailed information and update stock levels, pricing, and other attributes.

## Project Structure

```text
bbook_client-side/
├── node_modules/
├── public/
│   ├── index.html
│   ├── favicon.png
│   └── manifest.json
├── src/
│   ├── components/
│   │   ├── AddBook/
│   │   │   └── AddBook.js
│   │   ├── Banner/
│   │   │   ├── Banner.css
│   │   │   └── Banner.js
│   │   ├── Blogs/
│   │   │   └── Blogs.js
│   │   ├── Book/
│   │   │   ├── Book.css
│   │   │   └── Book.js
│   │   ├── Footer/
│   │   │   ├── Footer.css
│   │   │   └── Footer.js
│   │   ├── Header/
│   │   │   ├── Header.css
│   │   │   └── Header.js
│   │   ├── Home/
│   │   │   └── Home.js
│   │   ├── Loading/
│   │   │   ├── Loading.css
│   │   │   └── Loading.js
│   │   ├── ManageInventories/
│   │   │   ├── ManageInventories.css
│   │   │   └── ManageInventories.js
│   │   ├── MyBooks/
│   │   │   └── MyBooks.js
│   │   ├── SignIn/
│   │   │   ├── SignIn.css
│   │   │   └── SignIn.js
│   │   ├── SignUp/
│   │   │   ├── SignUp.css
│   │   │   └── SignUp.js
│   │   ├── SocialLogin/
│   │   │   ├── SocialLogin.css
│   │   │   └── SocialLogin.js
│   │   └── Update/
│   │       ├── Update.css
│   │       └── Update.js
│   ├── hooks/
│   │   ├── useBook.js
│   │   ├── useBooks.js
│   │   ├── useMyBooks.js
│   │   ├── useToken.js
│   │   └── useUserReviews.js
│   ├── icons/
│   ├── images/
│   ├── App.css
│   ├── App.js
│   ├── firebase.init.js
│   ├── index.css
│   └── index.js
├── .env
├── .gitignore
├── package-lock.json
├── package.json
├── README.md
└── tailwind.config.js
```
