CREATE DATABASE IF NOT EXISTS tacos_db;

USE tacos_db;

CREATE TABLE tacos(
id INTEGER NOT NULL AUTO_INCREMENT,
taco_name VARCHAR(30) NOT NULL,
shell VARCHAR(30) NOT NULL,
vegetarian BOOLEAN DEFAULT false,
picked_up BOOLEAN DEFAULT false,
PRIMARY KEY (id)
)

