DROP DATABASE IF EXISTS burgers_DB;
CREATE DATABASE burgers_DB;

USE burgers_DB;

CREATE TABLE burgers(
  id INT AUTO_INCREMENT PRIMARY KEY,
  burgerName VARCHAR(255),
  devoured BOOLEAN
);


INSERT INTO burgers(burgerName, devoured)
VALUES("Double Double", FALSE),
("Big Mac", TRUE),
("Quarter Pounder", TRUE);