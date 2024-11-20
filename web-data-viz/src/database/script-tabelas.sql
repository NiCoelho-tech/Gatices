CREATE DATABASE Gatices;

USE Gatices;

CREATE TABLE usuario(
	idUsuario INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(45),
    email VARCHAR(45),
    senha VARCHAR(45)
);

CREATE TABLE gato (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100),
    genero ENUM('M', 'F'), 
    raca VARCHAR(100)
);

