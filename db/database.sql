CREATE DATABASE IF NOT EXISTS companydb;

USE coompanydb;

CREATE TABLE employee(
    id INT(11) NOT NULL AUTO_INCREMENT,
    name VARCHAR(45) DEFAULT NULL,
    salary INT(5) DEFAULT NULL,
    PRIMARY KEY(id)
);

INSERT INTO employee VALUES 
(1, 'Lazaro', 1000),
(2, 'Fer', 1000),
(3, 'Amanda', 1000),
(4, 'Jose', 1000),
(5, 'Vic', 1000);
