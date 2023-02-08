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
-- Table structure for table `cli`
--

DROP TABLE IF EXISTS `cli`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cli` (
  `idcli` int NOT NULL AUTO_INCREMENT,
  `Vardas` varchar(100) DEFAULT NULL,
  `Pavarde` varchar(100) DEFAULT NULL,
  `elPastas` varchar(100) DEFAULT NULL,
  `telNr` varchar(100) DEFAULT NULL,
  `orgid` int NOT NULL,
  PRIMARY KEY (`idcli`),
  UNIQUE KEY `elPastas_UNIQUE` (`elPastas`),
  KEY `org_idx` (`orgid`),
  CONSTRAINT `org` FOREIGN KEY (`orgid`) REFERENCES `org` (`idorg`) ON DELETE CASCADE ON UPDATE RESTRICT
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf16 COMMENT='dalyviu lentele';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cli`
--

LOCK TABLES `cli` WRITE;
/*!40000 ALTER TABLE `cli` DISABLE KEYS */;
INSERT INTO `cli` VALUES (5,'Pupų','Dėdė','pupu@dėdė.lt','111',2),(6,'jon as','petraitis','112','w23',1),(7,'Juozas','Petrauskas','Juozukas@gmail.com','33',1),(8,'ghkk','dsad','3123','asda',1),(9,'dasdd','ad','ad','asda',1);
/*!40000 ALTER TABLE `cli` ENABLE KEYS */;
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
