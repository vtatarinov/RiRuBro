-- phpMyAdmin SQL Dump
-- version 4.8.1
-- https://www.phpmyadmin.net/
--
-- Хост: 127.0.0.1:3306
-- Время создания: Июл 06 2018 г., 17:46
-- Версия сервера: 5.7.20
-- Версия PHP: 5.6.32

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данных: `rirubro`
--

-- --------------------------------------------------------

--
-- Структура таблицы `blocks`
--

CREATE TABLE `blocks` (
  `id_block` int(11) NOT NULL,
  `floor` int(11) NOT NULL,
  `area` int(11) NOT NULL,
  `rate_year` int(11) NOT NULL,
  `rate_month` int(11) NOT NULL,
  `object_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `blocks`
--

INSERT INTO `blocks` (`id_block`, `floor`, `area`, `rate_year`, `rate_month`, `object_id`) VALUES
(1, 2, 250, 61500, 1281200, 1),
(2, 2, 307, 61500, 1573300, 1),
(3, 2, 320, 61500, 1639900, 1),
(4, 3, 430, 61500, 2303750, 1),
(5, 3, 400, 61500, 2050000, 1),
(6, 4, 400, 61500, 2050000, 1),
(7, 4, 320, 61500, 1639900, 1),
(8, 4, 250, 61500, 1281200, 1),
(9, 3, 1222, 45000, 4582500, 2),
(10, 4, 550, 55000, 2520830, 2),
(11, 5, 455, 55000, 2085410, 2);

-- --------------------------------------------------------

--
-- Структура таблицы `objects`
--

CREATE TABLE `objects` (
  `id_object` int(11) NOT NULL,
  `name` varchar(45) NOT NULL,
  `address` varchar(45) NOT NULL,
  `photopath` varchar(45) NOT NULL,
  `photoalt` varchar(45) NOT NULL,
  `url` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `objects`
--

INSERT INTO `objects` (`id_object`, `name`, `address`, `photopath`, `photoalt`, `url`) VALUES
(1, 'Бизнес-центр &laquo;Белые сады&raquo;', 'Лесная улица, 7', 'img/belie_sadi.png', 'belie sadi', '1_belie_sadi'),
(2, 'Бизнес-центр &laquo;Морозов&raquo;', 'Улица Льва Толстого, 16', 'img/morozov.png', 'morozov', '2_morozov');

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `blocks`
--
ALTER TABLE `blocks`
  ADD PRIMARY KEY (`id_block`),
  ADD KEY `blocks-objects_idx` (`object_id`);

--
-- Индексы таблицы `objects`
--
ALTER TABLE `objects`
  ADD PRIMARY KEY (`id_object`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `blocks`
--
ALTER TABLE `blocks`
  MODIFY `id_block` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- Ограничения внешнего ключа сохраненных таблиц
--

--
-- Ограничения внешнего ключа таблицы `blocks`
--
ALTER TABLE `blocks`
  ADD CONSTRAINT `blocks-objects` FOREIGN KEY (`object_id`) REFERENCES `objects` (`id_object`) ON DELETE NO ACTION ON UPDATE NO ACTION;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
