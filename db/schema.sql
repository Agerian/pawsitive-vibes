DROP DATABASE IF EXISTS pawsitive_vibes_db;

CREATE DATABASE pawsitive_vibes_db;

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
('Scruffy', 'Hey who you calling scruffy looking?', 12);
