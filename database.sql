CREATE DATABASE SaiGiovanna;

USE SaiGiovanna;

CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    role ENUM('admin', 'user') NOT NULL
);

CREATE DATABASE beatsync;

USE beatsync;

CREATE TABLE usuarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(35) NOT NULL,
    email VARCHAR(35) NOT NULL,
    dataNasc DATE,
    senha VARCHAR(20) NOT NULL
);