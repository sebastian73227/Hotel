CREATE DATABASE IF NOT EXISTS roomsdb;

USE roomsdb;

CREATE TABLE IF NOT EXISTS rooms(
    id INT NOT NULL AUTO_INCREMENT,
    person VARCHAR(100) NOT NULL,
    numberPeople INT NOT NULL,
    entryDate DATETIME NOT NULL,
    outputDate DATETIME NOT NULL,
    PRIMARY KEY(id)
);

INSERT INTO rooms(person, numberPeople, entryDate, outputDate) VALUES
    ('Sebastian Carrasco', 1, '2022-12-12 20:00:00', '2022-12-13 10:00:00'),
    ('El otro', 3, '2022-12-12 16:00:00', '2022-12-14 12:30:00');