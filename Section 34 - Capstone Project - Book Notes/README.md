# My Book Review Site

## Setup Instructions
1. Clone the repository.
2. Install dependencies: `npm install`
3. Set up your PostgreSQL database:
   - Run the following commands to set up the database:
     ```sql
     CREATE DATABASE bookreviews;
     \c bookreviews
     CREATE TABLE books (
       id SERIAL PRIMARY KEY,
       title VARCHAR(255),
       author VARCHAR(255),
       rating INT CHECK (rating >= 1 AND rating <= 5),
       date_read DATE,
       notes TEXT,
       cover_url VARCHAR(255)
     );
     ```
4. Start the server: `npm start`
5. Visit `http://localhost:3000` to view your book collection!

## Features
- Add, update, and delete books.
- View and sort books by rating, recency, or title.
- Fetch book covers from Open Library API.
