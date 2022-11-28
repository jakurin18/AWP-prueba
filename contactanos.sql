-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 30-10-2022 a las 02:02:22
-- Versión del servidor: 10.4.11-MariaDB
-- Versión de PHP: 7.4.5

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `contactanos`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `name` varchar(250) COLLATE utf16_spanish_ci NOT NULL,
  `number` varchar(20) COLLATE utf16_spanish_ci NOT NULL,
  `email` varchar(200) COLLATE utf16_spanish_ci NOT NULL,
  `mensaje` varchar(500) COLLATE utf16_spanish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf16 COLLATE=utf16_spanish_ci;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`name`, `number`, `email`, `mensaje`) VALUES
('Christopher Zamora Guzman', '7581038106', '19307003@utcgg.edu.mx', 'YIPPEE KI YAY!!!'),
('Jacqueline Vargas', '7581090318', '19307024@utcgg.edu.mx', 'Hola Todos!!!'),
('Luis Eduardo', '75881022', 'lzuissoldier1@gmail.com', 'Ayuda'),
('Oscar David', '7551417757', '19307041@utcgg.edu.mx', 'Hola guapos!!!');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`name`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
