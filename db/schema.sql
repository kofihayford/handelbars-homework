### Schema 

CREATE DATABASE burgerdb;

USE burgerdb;

CREATE TABLE burgers
(
	id int NOT NULL AUTO_INCREMENT,
	burger_name varchar(255) NOT NULL,
    devoured boolean not null default 0,
	PRIMARY KEY (id)
);