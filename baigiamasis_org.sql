-- MySQL dump 10.13  Distrib 8.0.32, for Win64 (x86_64)
--
-- Host: localhost    Database: baigiamasis
-- ------------------------------------------------------
-- Server version	8.0.32

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
-- Table structure for table `org`
--

DROP TABLE IF EXISTS `org`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `org` (
  `idorg` int NOT NULL AUTO_INCREMENT,
  `elPastas` varchar(255) NOT NULL,
  `vardas` varchar(100) DEFAULT NULL,
  `pavarde` varchar(100) DEFAULT NULL,
  `slaptazodis` varchar(100) NOT NULL,
  PRIMARY KEY (`idorg`),
  UNIQUE KEY `elPastas_UNIQUE` (`elPastas`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf16 COMMENT='Organizatoriu lentele';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `org`
--

LOCK TABLES `org` WRITE;
/*!40000 ALTER TABLE `org` DISABLE KEYS */;
INSERT INTO `org` VALUES (1,'jurgita@gmail.com','','','$2b$12$hL8Gl0hXHvsWESf0W7yZ.uSaSZps7J2kBRGJxY1KlkTe6VuskYn3W'),(2,'hhh@vvv.lt','Test','Vartotojas','$2b$12$PAptw7clpq6b/hMfEW7W6eM5R8LJGtt0RKRD1t3fU6Ot9EPTEBE5m'),(9,'hhhs@vvv.lt','','','$2b$12$RBOXQkrPTiVfp1xPduBENuZrFoi6ANyyb9ItUipm4s0aQpLyh9hhe'),(16,'test@www.ll','oooo','MMM','$2b$12$bs9A.KJAOKsguU8HIQk8c.IdePsqbBySCrCNDaCOrIpz4OVHIBCk2');
/*!40000 ALTER TABLE `org` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-02-07 22:33:57
