SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";

--
-- Database: `products`
--
CREATE DATABASE IF NOT EXISTS `products` DEFAULT CHARACTER SET latin1 COLLATE latin1_swedish_ci;
USE `products`;

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE IF NOT EXISTS `product` (
  `id` int(255) NOT NULL AUTO_INCREMENT,
  `ProductName` varchar(1000) NOT NULL,
  `ProductType` varchar(1000) NOT NULL,
  `Price` varchar(1000) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=5 ;

--
-- Dumping data for table `product`
--

INSERT INTO `book` (`id`, `ProductName`, `ProductType`, `Price`) VALUES
(1, 'Apple iPhone', 'Mobile', '38000'),
(2, 'Sony LED 32 inch', 'Electronics', '35000'),
(3, 'Node.js in Action', 'Book', '325'),
(4, 'Honda Active', 'Vehicle', '50000');