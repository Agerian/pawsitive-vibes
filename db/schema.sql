<<<<<<< HEAD
-- Drop the database if it exists
DROP DATABASE IF EXISTS user_db;

-- Create the database
CREATE DATABASE user_db;

-- Switch to the user_db database
USE user_db;

-- Create the user table
CREATE TABLE pawsitive_vibes.user (
  id INT PRIMARY KEY,
  name VARCHAR(50) NOT NULL,
  email VARCHAR(50) UNIQUE NOT NULL,
  password VARCHAR(50) NOT NULL,
  role VARCHAR(10) CHECK (role IN ('admin', 'user')) DEFAULT 'user',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);


-- Create the post table
CREATE TABLE pawsitive_vibes.post (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES pawsitive_vibes.user(id),
    content TEXT NOT NULL,
    image_url VARCHAR(255),
    likes INTEGER DEFAULT 0,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);


-- Create the comment table

CREATE TABLE pawsitive_vibes.comment (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES pawsitive_vibes.user(id),
    post_id INTEGER REFERENCES pawsitive_vibes.post(id),
    content TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
