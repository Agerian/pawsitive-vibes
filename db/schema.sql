

-- Create the user table
/*CREATE TABLE pawsitive_vibes.user (
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

USE pawsitive_vibes_db;

CREATE TABLE tags (
    tag_id INT PRIMARY KEY AUTO_INCREMENT,
    tag_name VARCHAR(255) NOT NULL
);

CREATE TABLE pawsitive_vibes_db (
    post_id INT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(255) NOT NULL,
    content TEXT NOT NULL
);

ALTER TABLE pawsitive_vibes_db
ADD COLUMN tag_id INT,
ADD FOREIGN KEY (tag_id) REFERENCES tags(tag_id);

INSERT INTO pawsitive_vibes_db (title, content, tag_id) 
VALUES ('Beautiful', 'Beautiful Dog', 1);
('Cute', 'Cutie Pie', 2);
('Awww', 'So Adorable', 3);
('Majestic', 'Needs a Statue', 4);
('Stunning', 'Took My Breath Away', 5);
('Sweet', 'Snuggle Time', 6);
('Ugly but cute', 'You are so ugly its cute', 7);
('Meh', 'Not Great But Not Bad', 8);
('Ugly', 'U G L Y You Aint Got No Alibi', 9);
('Unattractive', 'Sorry But No', 10);
('Hideous', 'Hope they keep you inside', 11);
('Scruffy', 'Hey who you calling scruffy looking?', 12);*/

