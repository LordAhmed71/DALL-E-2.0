# DALL·E 2.0 

## Overview
DALL·E 2.0 is an innovative web application that harnesses the power of OpenAI's technology to generate unique images based on user-provided prompts. This project integrates React.js for the frontend, Node.js with Express.js for the backend, MongoDB for database management, and OpenAI's API for image creation.

## Features
### -Image Generation
Users can input prompts and receive AI-generated images based on those prompts. This enables the creation of diverse and imaginative visual content.

### -Hover Details
On the home page, hovering over each generated image reveals the original prompt used for its creation and details about the creator.

#### Two Distinct Pages
### Home Page:
Displays a gallery of all generated images. Users can interact with images, view associated prompts, and share their favorite creations with the community.

### Image Generation Page:
Allows users to input prompts, create their images, and provides a "Surprise Me" feature, offering random prompts from a selection of 50 predefined options.

## Technologies Used
### Frontend
- React.js: For building the interactive user interface.
- Axios: Handling HTTP requests to the backend server.
- React Query: For efficient data fetching and management.
- React Lazy Loading: Optimizing image loading for better performance.
- SASS: Used for styling and maintaining scalable stylesheets.
- React-hot-toast : For Notifications and alerts 
### Backend
- Node.js with Express.js: Creating the server and managing backend functionalities.
- MongoDB: Storing generated images, associated metadata, and user information.
- OpenAI API: Utilized for generating images based on user prompts.

## Installation
To set up the project locally, follow these steps:

- Clone the repository: git clone https://github.com/LordAhmed71/DALL-E-2.0.git
- Navigate to the project directory: cd DALL-E-2.0
- Install dependencies:
   - For frontend: cd client && npm install
   - For backend: cd server && npm install

- Set up environment variables:
  - Create .env files in both the frontend and backend directories and add necessary configurations (API keys, MongoDB connection strings, etc.).
- Run the application:
  - Frontend: cd frontend && npm start
  - Backend: cd backend && npm start

## Usage
1- Access the application through the provided URL or localhost port. <br/>
2- Navigate between the home page and image generation page using the navigation menu. <br/>
3- Generate images by inputting prompts or using the "Surprise Me" feature for random prompts. <br/>
4- Explore the home page gallery, hover over images to view associated prompts and creator details. <br/>
5- Share your favorite images with the community using the "Share with Community" button. <br/>

## Contributing
### Contributions to this project are welcome! To contribute:

- Fork the repository.
- Create a new branch: git checkout -b feature/your-feature-name
- Implement changes or enhancements.
- Test thoroughly.
- Create a pull request, providing a detailed explanation of the changes made.
