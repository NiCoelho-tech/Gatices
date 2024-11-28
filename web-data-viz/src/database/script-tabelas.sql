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

CREATE TABLE status_gato (
    id INT PRIMARY KEY AUTO_INCREMENT,
    fkGato INT,
    fome INT,  -- valor que representa o nível de fome (pode ser de 0 a 100, por exemplo)
    sede INT,  -- valor que representa o nível de sede (pode ser de 0 a 100, por exemplo)
    dtHora TIMESTAMP,
    CONSTRAINT fkGatoStatus FOREIGN KEY (fkGato) REFERENCES gato(id)
); 

