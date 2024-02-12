-- Create the user table
CREATE TABLE user (
  id INT PRIMARY KEY,
  name VARCHAR(50) NOT NULL,
  email VARCHAR(50) UNIQUE NOT NULL,
  password VARCHAR(50) NOT NULL,
 
);

-- Create the post table
CREATE TABLE post (
  id INT PRIMARY KEY, -- a unique identifier for each post
  title VARCHAR(255) NOT NULL, -- the title of the post
  content TEXT NOT NULL, -- the content of the post
  user_id INT NOT NULL, -- the id of the author who wrote the post
  date DATE NULL, -- the date when the post was published
  category VARCHAR(255), -- the category of the post, such as dog, cat, etc.
  FOREIGN KEY (author_id) REFERENCES author(id) -- a reference to the author table
);


-- Create the comment table
CREATE TABLE comment (
  comment_id INT PRIMARY KEY,
  user_id INT NOT NULL,
  service_id INT NOT NULL,
  rating INT CHECK (rating BETWEEN 1 AND 5),
  feedback TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES user (user_id),
  FOREIGN KEY (service_id) REFERENCES service (service_id)
);
