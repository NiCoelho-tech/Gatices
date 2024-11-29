CREATE DATABASE Gatices;

USE Gatices;

CREATE TABLE usuario(
	idUsuario INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(45),
    email VARCHAR(45),
    senha VARCHAR(45)
);

CREATE TABLE gato (
    id INT AUTO_INCREMENT,
    nome VARCHAR(100),
    genero ENUM('M', 'F'), 
    raca VARCHAR(100),
    fkDono INT,
    PRIMARY KEY (id, fkDono),
    CONSTRAINT fkDonoGato FOREIGN KEY (fkDono) REFERENCES usuario(idUsuario)
);

CREATE TABLE status_gato (
    id INT AUTO_INCREMENT,
    fkGato INT,
    fkDono INT,
    fome INT,  -- valor que representa o nível de fome (pode ser de 0 a 100, por exemplo)
    sede INT,  -- valor que representa o nível de sede (pode ser de 0 a 100, por exemplo)
    dtHora TIMESTAMP,
    status_vida ENUM('VIVO', 'MORTO') DEFAULT 'VIVO',
    PRIMARY KEY (id, fkGato, fkDono),
    CONSTRAINT fkGatoStatus FOREIGN KEY (fkGato) REFERENCES gato(id),
    CONSTRAINT fkDonoStatus FOREIGN KEY (fkDono) REFERENCES usuario(idUsuario)
); 

