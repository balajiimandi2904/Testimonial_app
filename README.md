# Overview
A simple web application built with Node.js, Express, EJS, and MongoDB that allows users to submit testimonials/feedback and displays them on a public page.

# Setup Instructions

## Prerequisites
- Node.js (v14 or higher)
- npm (comes with Node.js)
- MongoDB (local instance)

## Installation

1. clone the repository
```
git clone https://github.com/balajiimandi2904/Testimonial_app.git
cd testimonial-app
```

2. install depenedencies
```
npm install
```

3. Setup your environment variables
- create a .env file in root directory
- add your mongoDB connection URL
  ```MONGODB_URL=mongodb://localhost:27017/testimonial-app```
- add port in .env file
  ```PORT=8080```
4. Start MongoDB: ensure the service is running
  
5. Run the Application:
```nodemon app.js```
or
```node app.js```

7. Access the application:
open your browser and your navigate to : ```http://localhost:8080```

# Usage

## Submit a Testimonial
- Navigate to the home page (/)
- Fill out the form with:
 - Your name
 - Email address
 - Feedback/testimonial
 - Click "Submit Testimonial"
- You'll be redirected to the testimonials page

## View Testimonials
- Navigate to the testimonials page (/testimonials)
- View all submitted testimonials in reverse chronological order

## Form Validation
### The application includes basic validation:
- All fields are required
- Email must be in valid format

# API Endpoints
1. GET / - Display testimonial submission form
2. POST /add-testimonial - Submit a new testimonial
3. GET /testimonials - Display all testimonials
