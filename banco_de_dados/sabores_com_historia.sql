-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema sabores_com_historia
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema sabores_com_historia
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `sabores_com_historia` DEFAULT CHARACTER SET utf8 ;
USE `sabores_com_historia` ;

-- -----------------------------------------------------
-- Table `sabores_com_historia`.`usuarios`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `sabores_com_historia`.`usuarios` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `username` VARCHAR(45) NOT NULL,
  `password` VARCHAR(45) NOT NULL,
  `email` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `username_UNIQUE` (`username` ASC) VISIBLE,
  UNIQUE INDEX `email_UNIQUE` (`email` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `sabores_com_historia`.`receitas`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `sabores_com_historia`.`receitas` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(45) NOT NULL,
  `descricao` TEXT(250) NOT NULL,
  `imagem` VARCHAR(45) NOT NULL,
  `classificacao` VARCHAR(45) NOT NULL,
  `fk_receita_usuario` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_receita_usuario_idx` (`fk_receita_usuario` ASC) VISIBLE,
  CONSTRAINT `fk_receita_usuario`
    FOREIGN KEY (`fk_receita_usuario`)
    REFERENCES `sabores_com_historia`.`usuarios` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `sabores_com_historia`.`destaques`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `sabores_com_historia`.`destaques` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `fk_destaque_receita` INT NOT NULL,
  `descricao` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_destaque_receita_idx` (`fk_destaque_receita` ASC) VISIBLE,
  CONSTRAINT `fk_destaque_receita`
    FOREIGN KEY (`fk_destaque_receita`)
    REFERENCES `sabores_com_historia`.`receitas` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `sabores_com_historia`.`historias`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `sabores_com_historia`.`historias` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `titulo` VARCHAR(45) NOT NULL,
  `texto` TEXT(250) NOT NULL,
  `imagem` VARCHAR(45) NOT NULL,
  `fk_historias_receitas` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_historias_receitas_idx` (`fk_historias_receitas` ASC) VISIBLE,
  CONSTRAINT `fk_historias_receitas`
    FOREIGN KEY (`fk_historias_receitas`)
    REFERENCES `sabores_com_historia`.`receitas` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `sabores_com_historia`.`preparos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `sabores_com_historia`.`preparos` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `preparo` TEXT(250) NOT NULL,
  `fk_preparo_receita` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_preparo_receita_idx` (`fk_preparo_receita` ASC) VISIBLE,
  CONSTRAINT `fk_preparo_receita`
    FOREIGN KEY (`fk_preparo_receita`)
    REFERENCES `sabores_com_historia`.`receitas` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `sabores_com_historia`.`ingredientes`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `sabores_com_historia`.`ingredientes` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `ingrediente` TEXT(250) NOT NULL,
  `fk_ingredientes_receitas` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_ingredientes_receitas_idx` (`fk_ingredientes_receitas` ASC) VISIBLE,
  CONSTRAINT `fk_ingredientes_receitas`
    FOREIGN KEY (`fk_ingredientes_receitas`)
    REFERENCES `sabores_com_historia`.`receitas` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

-- Preenchendo as Tabelas

use sabores_com_historia;


INSERT INTO usuarios(username,password,email)
VALUES ('Pedro','pedro123','pedro_23@gmail.com');
select * from usuarios;

INSERT INTO receitas(nome,descricao,imagem,classificacao,fk_receita_usuario)
VALUES 
('Polenta','A polenta é um prato tradicional italiano feito com farinha de milho.','./img/polenta2.jpg','petisco almoco jantar cafe',1);
select * from receitas;

INSERT INTO ingredientes(ingrediente.fk_ingredientes_receitas)
VALUES
('2 litros de água',1),
('400 g de fubá',1),
('2 colheres (sopa) de manteiga',1),
('1 colher (sopa) de sal',1);
select * from ingredientes;

INSERT INTO preparos(preparo,fk_preparo_receita)
VALUES
('Em uma panela, leve a água ao fogo e acrescente o sal e a manteiga.',1),
('Quando iniciar a fervura, acrescente o fuba e mexa sem parar para não empelotar.',1),
('Deixe a polenta cozinhar por 30 minutos em fogo baixo.',1),
('Despeje a polenta em um refratário, salpique com parmesão e cubra com o molho de sua preferência.',1);
select * from preparos;

SELECT receitas.*, ingredientes.ingrediente
FROM receitas
INNER JOIN ingredientes ON receitas.id = ingredientes.fk_ingredientes_receitas
WHERE receitas.id = 1;

SELECT receitas.*, preparos.preparo
FROM receitas
INNER JOIN preparos ON receitas.id = preparos.fk_preparo_receita
WHERE receitas.id = 1;
