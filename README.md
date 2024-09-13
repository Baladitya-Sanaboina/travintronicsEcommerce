Travintronics Ecommerce - README body { font-family: Arial, sans-serif; line-height: 1.6; margin: 0; padding: 20px; background-color: #f4f4f4; } h1, h2 { color: #333; } pre { background-color: #f0f0f0; padding: 10px; border-radius: 5px; overflow-x: auto; } code { font-family: "Courier New", Courier, monospace; background-color: #eee; padding: 2px 5px; border-radius: 4px; } a { color: #3498db; text-decoration: none; } a:hover { text-decoration: underline; } ul { list-style-type: disc; margin-left: 20px; } pre code { display: block; }

# Travintronics Ecommerce

**Travintronics Ecommerce** is a full-stack web application designed for online shopping, offering a seamless user experience. Users can browse products, manage their cart, and complete purchases. The project uses modern technologies including JSON server for backend API and Firebase for authentication.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Folder Structure](#folder-structure)
- [Contributing](#contributing)
- [License](#license)

## Features

- User-friendly interface to browse and search products.
- Add, update, and remove products from the shopping cart.
- Product filtering based on categories.
- Responsive design for different screen sizes.
- Secure user authentication with Firebase.
- JSON server to manage product data.

## Technologies Used

- **Frontend**: HTML, CSS, JavaScript, React.js
- **Backend**: JSON Server
- **Database**: JSON Server (Simulating Database)
- **Authentication**: Firebase
- **Version Control**: Git, GitHub

## Installation

### Prerequisites

- Node.js (v14+)
- Firebase Account

### Clone the Repository

    git clone https://github.com/Baladitya-Sanaboina/travintronicsEcommerce.git
    cd travintronicsEcommerce

### Install Dependencies

    # Install frontend dependencies
    cd client
    npm install

    # Install JSON server dependencies
    cd ../server
    npm install

### Firebase Configuration

1.  Create a project in [Firebase Console](https://console.firebase.google.com/).
2.  Add your Firebase configuration to the React project.

Create a `.env` file in the `client` folder and add the following variables:

    REACT_APP_FIREBASE_API_KEY=your_firebase_api_key
    REACT_APP_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
    REACT_APP_FIREBASE_PROJECT_ID=your_firebase_project_id
    REACT_APP_FIREBASE_STORAGE_BUCKET=your_firebase_storage_bucket
    REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_firebase_messaging_sender_id
    REACT_APP_FIREBASE_APP_ID=your_firebase_app_id

### Run the Application

    # Start the frontend
    cd client
    npm start

    # Start the JSON server
    cd ../server
    npm run json:server

The frontend will be running on `http://localhost:3000` and the JSON server backend on `http://localhost:5000`.

## Usage

1.  Open your browser and navigate to `http://localhost:3000`.
2.  Browse the available products and use filters for specific categories.
3.  Add products to your cart and proceed to checkout.
4.  Register or log in using Firebase authentication to complete the purchase.

## Folder Structure

    travintronicsEcommerce/
    │
    ├── client/           # React frontend
    │   ├── public/       # Public assets
    │   ├── src/          # React components, pages, and utilities
    │   ├── firebase.js   # Firebase configuration
    │   └── package.json  # Frontend dependencies
    │
    ├── server/           # JSON server backend
    │   ├── db.json       # JSON file simulating the database
    │   └── package.json  # JSON server dependencies
    │
    └── README.md         # Project documentation

## Contributing

Feel free to open issues or submit pull requests for any improvements or bug fixes. All contributions are welcome!

## License

This project is licensed under the MIT License - see the `LICENSE` file for details.
