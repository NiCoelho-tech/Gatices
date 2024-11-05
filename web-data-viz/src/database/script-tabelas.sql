CREATE DATABASE Gatices;

USE Gatices;

CREATE TABLE usuario(
	idUsuario INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(45),
    email VARCHAR(45),
    senha VARCHAR(45)
);

