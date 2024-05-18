CREATE DATABASE  IF NOT EXISTS `sga_mt` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `sga_mt`;
-- MySQL dump 10.13  Distrib 8.0.36, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: sga_mt
-- ------------------------------------------------------
-- Server version	8.0.37

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


--
-- Table structure for table `tipo_usuario`
--

DROP TABLE IF EXISTS `tipo_usuario`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tipo_usuario` (
  `tipoUsuario` varchar(30) NOT NULL,
  `permissaoCriar` tinyint(1) DEFAULT NULL,
  `permissaoLer` tinyint(1) DEFAULT NULL,
  `permissaoAlterar` tinyint(1) DEFAULT NULL,
  `permissaoDeletar` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`tipoUsuario`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tipo_usuario`
--

LOCK TABLES `tipo_usuario` WRITE;
/*!40000 ALTER TABLE `tipo_usuario` DISABLE KEYS */;
INSERT INTO `tipo_usuario` VALUES ('Admin',1,1,1,1),('Aluno',0,1,1,0),('Funcionario',1,1,1,0);
/*!40000 ALTER TABLE `tipo_usuario` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usuarios` (
  `CPF` varchar(14) NOT NULL,
  `UsuarioTipo` varchar(30) DEFAULT NULL,
  `UsuarioNome` varchar(150) DEFAULT NULL,
  `UsuarioEmail` varchar(100) DEFAULT NULL,
  `UsuarioTelefone` varchar(14) DEFAULT NULL,
  `UsuarioSenha` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`CPF`),
  KEY `UsuarioTipo` (`UsuarioTipo`),
  CONSTRAINT `usuarios_ibfk_1` FOREIGN KEY (`UsuarioTipo`) REFERENCES `tipo_usuario` (`tipoUsuario`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuarios`
--

LOCK TABLES `usuarios` WRITE;
/*!40000 ALTER TABLE `usuarios` DISABLE KEYS */;
INSERT INTO `usuarios` VALUES ('10101010101','Aluno','Aluno5','aluno5@example.com','101010101','12345'),('11111111111','Admin','Admin1','admin1@example.com','111111111','12345'),('22222222222','Admin','Admin2','admin2@example.com','222222222','12345'),('33333333333','Funcionario','Funcionario1','funcionario1@example.com','333333333','12345'),('44444444444','Funcionario','Funcionario2','funcionario2@example.com','444444444','12345'),('55555555555','Funcionario','Funcionario3','funcionario3@example.com','555555555','12345'),('66666666666','Aluno','Aluno1','aluno1@example.com','666666666','12345'),('77777777777','Aluno','Aluno2','aluno2@example.com','777777777','12345'),('88888888888','Aluno','Aluno3','aluno3@example.com','888888888','12345'),('99999999999','Aluno','Aluno4','aluno4@example.com','999999999','12345');
/*!40000 ALTER TABLE `usuarios` ENABLE KEYS */;
UNLOCK TABLES;


--
-- Table structure for table `endereco`
--

DROP TABLE IF EXISTS `endereco`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `endereco` (
  `enderecoId` int NOT NULL AUTO_INCREMENT,
  `usuarioId` varchar(14) NOT NULL,
  `enderecoCEP` int DEFAULT NULL,
  `enderecoLogradouro` varchar(20) DEFAULT NULL,
  `enderecoNomeLogradouro` varchar(150) DEFAULT NULL,
  `enderecoNumero` int DEFAULT NULL,
  `enderecoComplemento` varchar(45) DEFAULT NULL,
  `enderecoBairro` varchar(45) DEFAULT NULL,
  `enderecoCidade` varchar(70) DEFAULT NULL,
  `enderecoEstado` varchar(2) DEFAULT NULL,
  PRIMARY KEY (`enderecoId`),
  KEY `usuarioId` (`usuarioId`),
  CONSTRAINT `endereco_ibfk_1` FOREIGN KEY (`usuarioId`) REFERENCES `usuarios` (`CPF`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `endereco`
--

LOCK TABLES `endereco` WRITE;
/*!40000 ALTER TABLE `endereco` DISABLE KEYS */;
INSERT INTO `endereco` VALUES (1,'11111111111',12345678,'Rua A','Centro',100,'Apto 101','Bairro A','Cidade A','AA'),(2,'22222222222',87654321,'Rua B','Centro',200,'Apto 102','Bairro B','Cidade B','BB'),(3,'33333333333',13579246,'Rua C','Centro',300,'Sala 201','Bairro C','Cidade C','CC'),(4,'44444444444',24681357,'Rua D','Centro',400,'Sala 202','Bairro D','Cidade D','DD'),(5,'55555555555',98765432,'Rua E','Centro',500,'Sala 203','Bairro E','Cidade E','EE'),(6,'66666666666',36925814,'Rua F','Centro',600,'Apto 301','Bairro F','Cidade F','FF'),(7,'77777777777',25814736,'Rua G','Centro',700,'Apto 302','Bairro G','Cidade G','GG'),(8,'88888888888',14736925,'Rua H','Centro',800,'Apto 303','Bairro H','Cidade H','HH'),(9,'99999999999',36925814,'Rua I','Centro',900,'Apto 304','Bairro I','Cidade I','II'),(10,'10101010101',25814736,'Rua J','Centro',1000,'Apto 305','Bairro J','Cidade J','JJ');
/*!40000 ALTER TABLE `endereco` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `eventos`
--

DROP TABLE IF EXISTS `eventos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `eventos` (
  `eventoId` int NOT NULL AUTO_INCREMENT,
  `usuarioId` varchar(14) DEFAULT NULL,
  `eventoTipo` varchar(45) DEFAULT NULL,
  `eventoNome` varchar(45) DEFAULT NULL,
  `eventoData` date DEFAULT NULL,
  `eventoDescricao` longtext,
  `eventoMaisInfo` longtext,
  PRIMARY KEY (`eventoId`),
  KEY `usuarioId` (`usuarioId`),
  CONSTRAINT `eventos_ibfk_1` FOREIGN KEY (`usuarioId`) REFERENCES `usuarios` (`CPF`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `eventos`
--

LOCK TABLES `eventos` WRITE;
/*!40000 ALTER TABLE `eventos` DISABLE KEYS */;
/*!40000 ALTER TABLE `eventos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `contas`
--

DROP TABLE IF EXISTS `contas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `contas` (
  `contaId` int NOT NULL AUTO_INCREMENT,
  `usuarioId` varchar(14) DEFAULT NULL,
  `contaTipo` varchar(45) DEFAULT NULL,
  `contaValor` decimal(12,2) DEFAULT NULL,
  `contaVencimento` date DEFAULT NULL,
  `contaFoiPago` varchar(3) DEFAULT NULL,
  `contaMaisInfo` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`contaId`),
  KEY `usuarioId` (`usuarioId`),
  CONSTRAINT `contas_ibfk_1` FOREIGN KEY (`usuarioId`) REFERENCES `usuarios` (`CPF`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `contas`
--

LOCK TABLES `contas` WRITE;
/*!40000 ALTER TABLE `contas` DISABLE KEYS */;
/*!40000 ALTER TABLE `contas` ENABLE KEYS */;
UNLOCK TABLES;


--
-- Temporary view structure for view `vw_usuarios_endereco`
--

DROP TABLE IF EXISTS `vw_usuarios_endereco`;
/*!50001 DROP VIEW IF EXISTS `vw_usuarios_endereco`*/;
SET @saved_cs_client     = @@character_set_client;
/*!50503 SET character_set_client = utf8mb4 */;
/*!50001 CREATE VIEW `vw_usuarios_endereco` AS SELECT 
 1 AS `CPF`,
 1 AS `UsuarioTipo`,
 1 AS `UsuarioNome`,
 1 AS `UsuarioEmail`,
 1 AS `UsuarioTelefone`,
 1 AS `enderecoId`,
 1 AS `enderecoCEP`,
 1 AS `enderecoLogradouro`,
 1 AS `enderecoNomeLogradouro`,
 1 AS `enderecoNumero`,
 1 AS `enderecoComplemento`,
 1 AS `enderecoBairro`,
 1 AS `enderecoCidade`,
 1 AS `enderecoEstado`*/;
SET character_set_client = @saved_cs_client;

--
-- Final view structure for view `vw_usuarios_endereco`
--

/*!50001 DROP VIEW IF EXISTS `vw_usuarios_endereco`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb3 */;
/*!50001 SET character_set_results     = utf8mb3 */;
/*!50001 SET collation_connection      = utf8mb3_general_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `vw_usuarios_endereco` AS select `u`.`CPF` AS `CPF`,`u`.`UsuarioTipo` AS `UsuarioTipo`,`u`.`UsuarioNome` AS `UsuarioNome`,`u`.`UsuarioEmail` AS `UsuarioEmail`,`u`.`UsuarioTelefone` AS `UsuarioTelefone`,`e`.`enderecoId` AS `enderecoId`,`e`.`enderecoCEP` AS `enderecoCEP`,`e`.`enderecoLogradouro` AS `enderecoLogradouro`,`e`.`enderecoNomeLogradouro` AS `enderecoNomeLogradouro`,`e`.`enderecoNumero` AS `enderecoNumero`,`e`.`enderecoComplemento` AS `enderecoComplemento`,`e`.`enderecoBairro` AS `enderecoBairro`,`e`.`enderecoCidade` AS `enderecoCidade`,`e`.`enderecoEstado` AS `enderecoEstado` from (`usuarios` `u` left join `endereco` `e` on((`u`.`CPF` = `e`.`usuarioId`))) */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-05-18 18:02:39
