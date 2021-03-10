-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Mar 10, 2021 at 07:25 PM
-- Server version: 10.4.14-MariaDB
-- PHP Version: 7.4.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `balikpapanenak`
--

-- --------------------------------------------------------

--
-- Table structure for table `menu`
--

CREATE TABLE `menu` (
  `menu_id` int(11) NOT NULL,
  `resto_id` int(11) NOT NULL,
  `menu_name` varchar(200) NOT NULL,
  `menu_category` varchar(20) NOT NULL,
  `menu_price` varchar(20) NOT NULL,
  `menu_desc` text NOT NULL,
  `menu_created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `menu_updated_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `menu`
--

INSERT INTO `menu` (`menu_id`, `resto_id`, `menu_name`, `menu_category`, `menu_price`, `menu_desc`, `menu_created_at`, `menu_updated_at`) VALUES
(1, 1, 'Bale Salad', 'foods', '25000', 'Bale salad is a Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id egestas augue. Nam id commodo libero, at laoreet arcu. Proin pretium viverra nibh, eu suscipit nibh viverra in. Phasellus vel nunc quam. Quisque pulvinar eros ac tempus cursus. Nullam posuere non sem scelerisque commodo. In hac habitasse platea dictumst. Nulla posuere at ligula sed ultricies. Proin vel vulputate leo. Quisque libero enim, pretium a massa sit amet, vestibulum interdum ante. Donec in justo bibendum, ullamcorper odio sit amet, pharetra ipsum. Donec tincidunt, justo sit amet ultrices lacinia, neque velit ultrices dolor, lacinia finibus ante diam ut ante.', '2021-03-10 17:12:40', '2021-03-10 17:12:40'),
(2, 1, 'Bale Soup', 'foods', '20000', 'Bale soup is a Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id egestas augue. Nam id commodo libero, at laoreet arcu. Proin pretium viverra nibh, eu suscipit nibh viverra in. Phasellus vel nunc quam. Quisque pulvinar eros ac tempus cursus. Nullam posuere non sem scelerisque commodo. In hac habitasse platea dictumst. Nulla posuere at ligula sed ultricies. Proin vel vulputate leo. Quisque libero enim, pretium a massa sit amet, vestibulum interdum ante. Donec in justo bibendum, ullamcorper odio sit amet, pharetra ipsum. Donec tincidunt, justo sit amet ultrices lacinia, neque velit ultrices dolor, lacinia finibus ante diam ut ante.', '2021-03-10 17:16:57', '2021-03-10 17:16:57'),
(3, 1, 'Mie Ayam Bale', 'foods', '15000', 'Mie ayam bale is a Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id egestas augue. Nam id commodo libero, at laoreet arcu. Proin pretium viverra nibh, eu suscipit nibh viverra in. Phasellus vel nunc quam. Quisque pulvinar eros ac tempus cursus. Nullam posuere non sem scelerisque commodo. In hac habitasse platea dictumst. Nulla posuere at ligula sed ultricies. Proin vel vulputate leo. Quisque libero enim, pretium a massa sit amet, vestibulum interdum ante. Donec in justo bibendum, ullamcorper odio sit amet, pharetra ipsum. Donec tincidunt, justo sit amet ultrices lacinia, neque velit ultrices dolor, lacinia finibus ante diam ut ante.', '2021-03-10 17:19:31', '2021-03-10 17:19:31'),
(4, 2, 'Nasi Uduk', 'foods', '15000', 'Nasi uduk is a Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id egestas augue. Nam id commodo libero, at laoreet arcu. Proin pretium viverra nibh, eu suscipit nibh viverra in. Phasellus vel nunc quam. Quisque pulvinar eros ac tempus cursus. Nullam posuere non sem scelerisque commodo. In hac habitasse platea dictumst. Nulla posuere at ligula sed ultricies. Proin vel vulputate leo. Quisque libero enim, pretium a massa sit amet, vestibulum interdum ante. Donec in justo bibendum, ullamcorper odio sit amet, pharetra ipsum. Donec tincidunt, justo sit amet ultrices lacinia, neque velit ultrices dolor, lacinia finibus ante diam ut ante.', '2021-03-10 17:28:59', '2021-03-10 17:28:59'),
(5, 2, 'Ayam Goreng Mayo', 'foods', '45000', 'Ayam goreng mayo is a Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id egestas augue. Nam id commodo libero, at laoreet arcu. Proin pretium viverra nibh, eu suscipit nibh viverra in. Phasellus vel nunc quam. Quisque pulvinar eros ac tempus cursus. Nullam posuere non sem scelerisque commodo. In hac habitasse platea dictumst. Nulla posuere at ligula sed ultricies. Proin vel vulputate leo. Quisque libero enim, pretium a massa sit amet, vestibulum interdum ante. Donec in justo bibendum, ullamcorper odio sit amet, pharetra ipsum. Donec tincidunt, justo sit amet ultrices lacinia, neque velit ultrices dolor, lacinia finibus ante diam ut ante.', '2021-03-10 17:31:04', '2021-03-10 17:31:04'),
(6, 2, 'Gorengan Panas', 'foods', '2000', 'Gorengan panas is a Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id egestas augue. Nam id commodo libero, at laoreet arcu. Proin pretium viverra nibh, eu suscipit nibh viverra in. Phasellus vel nunc quam. Quisque pulvinar eros ac tempus cursus. Nullam posuere non sem scelerisque commodo. In hac habitasse platea dictumst. Nulla posuere at ligula sed ultricies. Proin vel vulputate leo. Quisque libero enim, pretium a massa sit amet, vestibulum interdum ante. Donec in justo bibendum, ullamcorper odio sit amet, pharetra ipsum. Donec tincidunt, justo sit amet ultrices lacinia, neque velit ultrices dolor, lacinia finibus ante diam ut ante.', '2021-03-10 17:35:13', '2021-03-10 17:35:13'),
(7, 3, 'Pizza Kembang', 'foods', '55000', 'Pizza Kembang is a Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id egestas augue. Nam id commodo libero, at laoreet arcu. Proin pretium viverra nibh, eu suscipit nibh viverra in. Phasellus vel nunc quam. Quisque pulvinar eros ac tempus cursus. Nullam posuere non sem scelerisque commodo. In hac habitasse platea dictumst. Nulla posuere at ligula sed ultricies. Proin vel vulputate leo. Quisque libero enim, pretium a massa sit amet, vestibulum interdum ante. Donec in justo bibendum, ullamcorper odio sit amet, pharetra ipsum. Donec tincidunt, justo sit amet ultrices lacinia, neque velit ultrices dolor, lacinia finibus ante diam ut ante.', '2021-03-10 17:35:13', '2021-03-10 17:35:13'),
(8, 3, 'Burger Kembang', 'foods', '38000', 'Burger kembang is a Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id egestas augue. Nam id commodo libero, at laoreet arcu. Proin pretium viverra nibh, eu suscipit nibh viverra in. Phasellus vel nunc quam. Quisque pulvinar eros ac tempus cursus. Nullam posuere non sem scelerisque commodo. In hac habitasse platea dictumst. Nulla posuere at ligula sed ultricies. Proin vel vulputate leo. Quisque libero enim, pretium a massa sit amet, vestibulum interdum ante. Donec in justo bibendum, ullamcorper odio sit amet, pharetra ipsum. Donec tincidunt, justo sit amet ultrices lacinia, neque velit ultrices dolor, lacinia finibus ante diam ut ante.', '2021-03-10 17:31:04', '2021-03-10 17:31:04'),
(9, 3, 'Pasta Kembang', 'foods', '49000', 'Pasta Kembang is a Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id egestas augue. Nam id commodo libero, at laoreet arcu. Proin pretium viverra nibh, eu suscipit nibh viverra in. Phasellus vel nunc quam. Quisque pulvinar eros ac tempus cursus. Nullam posuere non sem scelerisque commodo. In hac habitasse platea dictumst. Nulla posuere at ligula sed ultricies. Proin vel vulputate leo. Quisque libero enim, pretium a massa sit amet, vestibulum interdum ante. Donec in justo bibendum, ullamcorper odio sit amet, pharetra ipsum. Donec tincidunt, justo sit amet ultrices lacinia, neque velit ultrices dolor, lacinia finibus ante diam ut ante.', '2021-03-10 17:28:59', '2021-03-10 17:28:59'),
(10, 4, 'Bakso Bakar', 'foods', '65000', 'Bakso Bakar is a Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id egestas augue. Nam id commodo libero, at laoreet arcu. Proin pretium viverra nibh, eu suscipit nibh viverra in. Phasellus vel nunc quam. Quisque pulvinar eros ac tempus cursus. Nullam posuere non sem scelerisque commodo. In hac habitasse platea dictumst. Nulla posuere at ligula sed ultricies. Proin vel vulputate leo. Quisque libero enim, pretium a massa sit amet, vestibulum interdum ante. Donec in justo bibendum, ullamcorper odio sit amet, pharetra ipsum. Donec tincidunt, justo sit amet ultrices lacinia, neque velit ultrices dolor, lacinia finibus ante diam ut ante.', '2021-03-10 17:35:13', '2021-03-10 17:35:13'),
(11, 4, 'Ramen', 'foods', '25000', 'Ramen is a Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id egestas augue. Nam id commodo libero, at laoreet arcu. Proin pretium viverra nibh, eu suscipit nibh viverra in. Phasellus vel nunc quam. Quisque pulvinar eros ac tempus cursus. Nullam posuere non sem scelerisque commodo. In hac habitasse platea dictumst. Nulla posuere at ligula sed ultricies. Proin vel vulputate leo. Quisque libero enim, pretium a massa sit amet, vestibulum interdum ante. Donec in justo bibendum, ullamcorper odio sit amet, pharetra ipsum. Donec tincidunt, justo sit amet ultrices lacinia, neque velit ultrices dolor, lacinia finibus ante diam ut ante.', '2021-03-10 17:31:04', '2021-03-10 17:31:04'),
(12, 4, 'Nasi Goreng', 'foods', '14000', 'Nasi goreng is a Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id egestas augue. Nam id commodo libero, at laoreet arcu. Proin pretium viverra nibh, eu suscipit nibh viverra in. Phasellus vel nunc quam. Quisque pulvinar eros ac tempus cursus. Nullam posuere non sem scelerisque commodo. In hac habitasse platea dictumst. Nulla posuere at ligula sed ultricies. Proin vel vulputate leo. Quisque libero enim, pretium a massa sit amet, vestibulum interdum ante. Donec in justo bibendum, ullamcorper odio sit amet, pharetra ipsum. Donec tincidunt, justo sit amet ultrices lacinia, neque velit ultrices dolor, lacinia finibus ante diam ut ante.', '2021-03-10 17:28:59', '2021-03-10 17:28:59'),
(13, 5, 'Cappuccino', 'drinks', '24000', 'Cappuccino is a Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id egestas augue. Nam id commodo libero, at laoreet arcu. Proin pretium viverra nibh, eu suscipit nibh viverra in. Phasellus vel nunc quam. Quisque pulvinar eros ac tempus cursus. Nullam posuere non sem scelerisque commodo. In hac habitasse platea dictumst. Nulla posuere at ligula sed ultricies. Proin vel vulputate leo. Quisque libero enim, pretium a massa sit amet, vestibulum interdum ante. Donec in justo bibendum, ullamcorper odio sit amet, pharetra ipsum. Donec tincidunt, justo sit amet ultrices lacinia, neque velit ultrices dolor, lacinia finibus ante diam ut ante.', '2021-03-10 17:28:59', '2021-03-10 17:28:59'),
(14, 5, 'Black Tea', 'drinks', '20000', 'Black tea is a Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id egestas augue. Nam id commodo libero, at laoreet arcu. Proin pretium viverra nibh, eu suscipit nibh viverra in. Phasellus vel nunc quam. Quisque pulvinar eros ac tempus cursus. Nullam posuere non sem scelerisque commodo. In hac habitasse platea dictumst. Nulla posuere at ligula sed ultricies. Proin vel vulputate leo. Quisque libero enim, pretium a massa sit amet, vestibulum interdum ante. Donec in justo bibendum, ullamcorper odio sit amet, pharetra ipsum. Donec tincidunt, justo sit amet ultrices lacinia, neque velit ultrices dolor, lacinia finibus ante diam ut ante.', '2021-03-10 17:31:04', '2021-03-10 17:31:04'),
(15, 6, 'Es Krim', 'drinks', '55000', 'Es krim is a Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id egestas augue. Nam id commodo libero, at laoreet arcu. Proin pretium viverra nibh, eu suscipit nibh viverra in. Phasellus vel nunc quam. Quisque pulvinar eros ac tempus cursus. Nullam posuere non sem scelerisque commodo. In hac habitasse platea dictumst. Nulla posuere at ligula sed ultricies. Proin vel vulputate leo. Quisque libero enim, pretium a massa sit amet, vestibulum interdum ante. Donec in justo bibendum, ullamcorper odio sit amet, pharetra ipsum. Donec tincidunt, justo sit amet ultrices lacinia, neque velit ultrices dolor, lacinia finibus ante diam ut ante.', '2021-03-10 17:35:13', '2021-03-10 17:35:13');

-- --------------------------------------------------------

--
-- Table structure for table `menu_image`
--

CREATE TABLE `menu_image` (
  `image_id` int(11) NOT NULL,
  `menu_id` int(11) NOT NULL,
  `image_name` varchar(255) NOT NULL,
  `image_created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `image_updated_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `menu_image`
--

INSERT INTO `menu_image` (`image_id`, `menu_id`, `image_name`, `image_created_at`, `image_updated_at`) VALUES
(1, 1, '2021-03-10T17-13-05.963Zdan-gold-4_jhDO54BYg-unsplash.jpg', '2021-03-10 17:13:06', '2021-03-10 17:13:06'),
(2, 1, '2021-03-10T17-13-15.470Zanna-pelzer-IGfIGP5ONV0-unsplash.jpg', '2021-03-10 17:13:15', '2021-03-10 17:13:15'),
(3, 1, '2021-03-10T17-13-28.087Zsina-piryae-bBzjWthTqb8-unsplash.jpg', '2021-03-10 17:13:28', '2021-03-10 17:13:28'),
(4, 2, '2021-03-10T17-17-22.223Zmegan-markham-qav5LFLbSUk-unsplash.jpg', '2021-03-10 17:17:22', '2021-03-10 17:17:22'),
(5, 2, '2021-03-10T17-17-29.829Zerik-mclean-J8rOU9Igips-unsplash.jpg', '2021-03-10 17:17:29', '2021-03-10 17:17:29'),
(6, 2, '2021-03-10T17-17-37.194Zcala-w6ftFbPCs9I-unsplash.jpg', '2021-03-10 17:17:37', '2021-03-10 17:17:37'),
(7, 3, '2021-03-10T17-19-48.616Zikhsan-baihaqi-RwAXb8Hv_sU-unsplash.jpg', '2021-03-10 17:19:48', '2021-03-10 17:19:48'),
(8, 3, '2021-03-10T17-19-55.772Zikhsan-baihaqi-pbc2wXbQYpI-unsplash.jpg', '2021-03-10 17:19:55', '2021-03-10 17:19:55'),
(9, 3, '2021-03-10T17-20-04.579Zmisbahul-aulia-9Yhg4I2nOKY-unsplash.jpg', '2021-03-10 17:20:04', '2021-03-10 17:20:04'),
(10, 4, '2021-03-10T17-29-04.686Zlouis-hansel-shotsoflouis-U6-KvV7HlMk-unsplash.jpg', '2021-03-10 17:29:04', '2021-03-10 17:29:04'),
(11, 4, '2021-03-10T17-29-15.671Zlaura-lanckriet-z32XV0TGSzc-unsplash.jpg', '2021-03-10 17:29:15', '2021-03-10 17:29:15'),
(12, 4, '2021-03-10T17-29-24.763Zjanesfairytale-IkaxonGjwSY-unsplash.jpg', '2021-03-10 17:29:24', '2021-03-10 17:29:24'),
(13, 5, '2021-03-10T17-32-55.630Zleo-roza-j2ofdcpPpP0-unsplash.jpg', '2021-03-10 17:32:55', '2021-03-10 17:32:55'),
(14, 5, '2021-03-10T17-33-05.211Zleo-roza-r20iS8tjyKc-unsplash.jpg', '2021-03-10 17:33:05', '2021-03-10 17:33:05'),
(15, 5, '2021-03-10T17-33-14.789Zjos-schuurmans-ul3WmicYnow-unsplash.jpg', '2021-03-10 17:33:14', '2021-03-10 17:33:14'),
(16, 6, '2021-03-10T17-35-37.546Zben-libby-8bQerniZJYY-unsplash.jpg', '2021-03-10 17:35:37', '2021-03-10 17:35:37'),
(17, 6, '2021-03-10T17-35-44.763Zfiliz-elaerts-0lnWmfVxEmw-unsplash.jpg', '2021-03-10 17:35:44', '2021-03-10 17:35:44'),
(18, 6, '2021-03-10T17-35-52.763Zanuja-mary-tilj-TCl76VrK-zU-unsplash.jpg', '2021-03-10 17:35:52', '2021-03-10 17:35:52'),
(19, 7, '2021-03-10T17-50-17.463Zkarthik-garikapati-oBbTc1VoT-0-unsplash.jpg', '2021-03-10 17:50:19', '2021-03-10 17:50:19'),
(20, 7, '2021-03-10T17-50-33.812Zshourav-sheikh-a66sGfOnnqQ-unsplash (1).jpg', '2021-03-10 17:50:34', '2021-03-10 17:50:34'),
(21, 7, '2021-03-10T17-50-42.025Zivan-torres-MQUqbmszGGM-unsplash (1).jpg', '2021-03-10 17:50:42', '2021-03-10 17:50:42'),
(22, 8, '2021-03-10T17-51-35.741Zilya-mashkov-mkVa2hLJgnI-unsplash.jpg', '2021-03-10 17:51:35', '2021-03-10 17:51:35'),
(23, 8, '2021-03-10T17-51-47.922Zsk-CK6tjAIMJWM-unsplash.jpg', '2021-03-10 17:51:47', '2021-03-10 17:51:47'),
(24, 8, '2021-03-10T17-51-54.832Zamirali-mirhashemian-sc5sTPMrVfk-unsplash.jpg', '2021-03-10 17:51:54', '2021-03-10 17:51:54'),
(25, 9, '2021-03-10T17-52-36.012Zamirali-mirhashemian-v2z6Yhp_6Gc-unsplash.jpg', '2021-03-10 17:52:36', '2021-03-10 17:52:36'),
(26, 9, '2021-03-10T17-52-48.514Zdanijela-prijovic-qits91IZv1o-unsplash.jpg', '2021-03-10 17:52:48', '2021-03-10 17:52:48'),
(27, 9, '2021-03-10T17-53-23.221Znatalia-y-ljVSRqHCP2U-unsplash.jpg', '2021-03-10 17:53:23', '2021-03-10 17:53:23'),
(28, 10, '2021-03-10T17-58-08.892Zthe-lore-com-tGfdZKcny7E-unsplash.jpg', '2021-03-10 17:58:09', '2021-03-10 17:58:09'),
(29, 10, '2021-03-10T17-58-17.191Zemiliano-vittoriosi-OFismyezPnY-unsplash.jpg', '2021-03-10 17:58:17', '2021-03-10 17:58:17'),
(30, 10, '2021-03-10T17-58-26.747Zjoice-kelly-dhZwPcDWauQ-unsplash.jpg', '2021-03-10 17:58:26', '2021-03-10 17:58:26'),
(31, 11, '2021-03-10T17-59-01.717Zcharles-deluvio-nAV0ojj-m4k-unsplash.jpg', '2021-03-10 17:59:01', '2021-03-10 17:59:01'),
(32, 11, '2021-03-10T17-59-13.059Zm-w-rlHF50qkYqE-unsplash.jpg', '2021-03-10 17:59:13', '2021-03-10 17:59:13'),
(33, 11, '2021-03-10T17-59-25.455Zmae-mu-en4qp-aK1h4-unsplash.jpg', '2021-03-10 17:59:25', '2021-03-10 17:59:25'),
(34, 12, '2021-03-10T18-00-02.536Zannie-spratt-oT7_v-I0hHg-unsplash.jpg', '2021-03-10 18:00:02', '2021-03-10 18:00:02'),
(35, 12, '2021-03-10T18-00-19.892Zlouis-hansel-shotsoflouis-CvLZ6hbIemI-unsplash.jpg', '2021-03-10 18:00:19', '2021-03-10 18:00:19'),
(36, 12, '2021-03-10T18-00-39.652Zpixzolo-photography-Qtd5z7g4thc-unsplash.jpg', '2021-03-10 18:00:39', '2021-03-10 18:00:39'),
(37, 13, '2021-03-10T18-05-43.076Zalbert-s-FkNfVgHVzkI-unsplash.jpg', '2021-03-10 18:05:43', '2021-03-10 18:05:43'),
(38, 13, '2021-03-10T18-05-59.839Zlouis-hansel-shotsoflouis-e96ST3p7tn4-unsplash.jpg', '2021-03-10 18:05:59', '2021-03-10 18:05:59'),
(39, 13, '2021-03-10T18-06-10.325Zdavid-fanuel-FTkd671TBt8-unsplash.jpg', '2021-03-10 18:06:10', '2021-03-10 18:06:10'),
(40, 14, '2021-03-10T18-06-39.284Zcontent-pixie-m-gqDRzbJLQ-unsplash.jpg', '2021-03-10 18:06:39', '2021-03-10 18:06:39'),
(41, 14, '2021-03-10T18-06-50.130Zdrew-jemmett-qEcWgrTG578-unsplash.jpg', '2021-03-10 18:06:50', '2021-03-10 18:06:50'),
(42, 14, '2021-03-10T18-06-57.940Zmanki-kim-L82-kkEBOd0-unsplash.jpg', '2021-03-10 18:06:57', '2021-03-10 18:06:57'),
(43, 15, '2021-03-10T18-07-32.642Zbrooke-lark-8beTH4VkhLI-unsplash.jpg', '2021-03-10 18:07:32', '2021-03-10 18:07:32'),
(44, 15, '2021-03-10T18-07-42.861Zlama-roscu-Wpg3Qm0zaGk-unsplash.jpg', '2021-03-10 18:07:42', '2021-03-10 18:07:42'),
(45, 15, '2021-03-10T18-07-49.118Zamerican-heritage-chocolate-SRYAhnTHSck-unsplash.jpg', '2021-03-10 18:07:49', '2021-03-10 18:07:49');

-- --------------------------------------------------------

--
-- Table structure for table `reputation`
--

CREATE TABLE `reputation` (
  `reputation_id` int(11) NOT NULL,
  `resto_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `reputation_comment` text NOT NULL,
  `reputation_rating` tinyint(1) NOT NULL,
  `reputation_created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `reputation_updated_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `reputation`
--

INSERT INTO `reputation` (`reputation_id`, `resto_id`, `user_id`, `reputation_comment`, `reputation_rating`, `reputation_created_at`, `reputation_updated_at`) VALUES
(1, 1, 7, 'semua makanan disini sangat enak', 5, '2021-03-10 18:10:31', '2021-03-10 18:10:31'),
(2, 2, 7, 'recommended', 4, '2021-03-10 18:10:52', '2021-03-10 18:10:52'),
(3, 3, 7, 'top banget, harus dicoba', 4, '2021-03-10 18:11:12', '2021-03-10 18:11:12'),
(4, 4, 7, 'kurang sesuai selera', 2, '2021-03-10 18:11:27', '2021-03-10 18:11:27'),
(5, 5, 7, 'pelayanan sangat baik, makanan enak', 3, '2021-03-10 18:11:45', '2021-03-10 18:11:45'),
(6, 6, 7, 'harus kesini tiap hari', 4, '2021-03-10 18:11:59', '2021-03-10 18:11:59'),
(7, 1, 8, 'enak bangeettttt', 4, '2021-03-10 18:12:19', '2021-03-10 18:12:19'),
(8, 2, 8, 'bikin ketagihan', 5, '2021-03-10 18:12:32', '2021-03-10 18:12:32'),
(9, 3, 8, 'juara rasanya', 5, '2021-03-10 18:12:48', '2021-03-10 18:12:48'),
(10, 6, 8, 'ini selera aku banget', 4, '2021-03-10 18:13:13', '2021-03-10 18:13:13'),
(11, 4, 9, 'gila, rasanya mantap', 4, '2021-03-10 18:13:32', '2021-03-10 18:13:32'),
(12, 5, 9, 'pelayanan kurang ramah', 1, '2021-03-10 18:13:45', '2021-03-10 18:13:45'),
(13, 6, 9, 'enak banget es krimnya', 3, '2021-03-10 18:14:00', '2021-03-10 18:14:00'),
(14, 1, 9, 'bikin candu', 4, '2021-03-10 18:14:16', '2021-03-10 18:14:16'),
(15, 2, 10, 'ga ada obat', 4, '2021-03-10 18:14:29', '2021-03-10 18:14:29'),
(16, 3, 10, 'juara', 5, '2021-03-10 18:14:44', '2021-03-10 18:14:44'),
(17, 6, 10, 'rasanya  nendang', 5, '2021-03-10 18:15:05', '2021-03-10 18:15:05'),
(18, 3, 11, 'rasanya  aneh', 3, '2021-03-10 18:15:22', '2021-03-10 18:15:22'),
(19, 4, 11, 'enak2 semua makanan disini', 4, '2021-03-10 18:15:43', '2021-03-10 18:15:43'),
(20, 5, 11, 'enak2 semua makanan disini', 4, '2021-03-10 18:15:55', '2021-03-10 18:15:55'),
(21, 6, 11, 'menu sedikit sekali', 3, '2021-03-10 18:16:21', '2021-03-10 18:16:21'),
(22, 5, 12, 'kurang enak', 3, '2021-03-10 18:16:34', '2021-03-10 18:16:34'),
(23, 4, 12, 'gaada obat men', 5, '2021-03-10 18:16:47', '2021-03-10 18:16:47'),
(24, 2, 12, 'gaada obat men', 5, '2021-03-10 18:16:53', '2021-03-10 18:16:53'),
(25, 1, 12, 'gaada obat men', 5, '2021-03-10 18:16:56', '2021-03-10 18:16:56');

-- --------------------------------------------------------

--
-- Table structure for table `resto`
--

CREATE TABLE `resto` (
  `resto_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `resto_name` varchar(255) DEFAULT NULL,
  `resto_address` varchar(255) DEFAULT NULL,
  `resto_kelurahan` varchar(255) DEFAULT NULL,
  `resto_kecamatan` varchar(50) DEFAULT NULL,
  `resto_open_hour` time DEFAULT NULL,
  `resto_close_hour` time DEFAULT NULL,
  `resto_open_day` varchar(30) DEFAULT NULL,
  `resto_close_day` varchar(30) DEFAULT NULL,
  `resto_phone` varchar(20) DEFAULT NULL,
  `resto_desc` text DEFAULT NULL,
  `resto_created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `resto_updated_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `resto`
--

INSERT INTO `resto` (`resto_id`, `user_id`, `resto_name`, `resto_address`, `resto_kelurahan`, `resto_kecamatan`, `resto_open_hour`, `resto_close_hour`, `resto_open_day`, `resto_close_day`, `resto_phone`, `resto_desc`, `resto_created_at`, `resto_updated_at`) VALUES
(1, 1, 'Warung Bale', 'Jl.Pahlawan no.34', 'Sepinggan Baru', 'Balikpapan Selatan', '08:00:00', '18:00:00', 'monday', 'sunday', '0888888888', 'warung bale adalah resto yang menyediakan segala makanan khas banjar', '2021-03-10 17:04:51', '2021-03-10 09:07:23'),
(2, 2, 'Warung Nganjuk', 'Jl.Penegak no.19 RT.09', 'Damai', 'Balikpapan Kota', '08:00:00', '17:00:00', 'monday', 'saturday', '0888888888', 'warung nganjuk adalah warung yang menyediakan makanan sehari-hari dengan menu khas Balikpapan', '2021-03-10 17:20:21', '2021-03-10 09:26:21'),
(3, 3, 'Warung Kembangan', 'Jl.Timur no.07 RT.44', 'Manggar', 'Balikpapan Timur', '08:00:00', '18:00:00', 'monday', 'sunday', '0888888888', 'warung kembangan adalah resto yang menyediakan segala makanan rumahan', '2021-03-10 17:04:51', '2021-03-10 09:07:23'),
(4, 4, 'Resto cika', 'Jl.Kurir no.10 RT.18', 'Kariangau', 'Balikpapan Barat', '08:00:00', '17:00:00', 'monday', 'saturday', '0888888888', 'Resto Cika adalah warung yang menyediakan makanan sehari-hari dengan menu khas Balikpapan', '2021-03-10 17:20:21', '2021-03-10 09:26:21'),
(5, 5, 'Warung Nasi Nusantara', 'Jl.Tengah no.88 RT.23', 'Martadinata', 'Balikpapan Tengah', '08:00:00', '18:00:00', 'monday', 'sunday', '0888888888', 'Warung nasi nusantara adalah resto yang menyediakan segala makanan rumahan', '2021-03-10 17:04:51', '2021-03-10 09:07:23'),
(6, 6, 'Resto Lombok Pedas', 'Jl.Kurir no.10 RT.18', 'Batu Ampar', 'Balikpapan Utara', '08:00:00', '17:00:00', 'monday', 'saturday', '0888888888', 'Resto Lombok Pedas adalah warung yang menyediakan makanan sehari-hari dengan menu khas Balikpapan', '2021-03-10 17:20:21', '2021-03-10 09:26:21');

-- --------------------------------------------------------

--
-- Table structure for table `resto_image`
--

CREATE TABLE `resto_image` (
  `image_id` int(11) NOT NULL,
  `resto_id` int(11) NOT NULL,
  `image_name` varchar(255) NOT NULL,
  `image_created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `image_updated_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `resto_image`
--

INSERT INTO `resto_image` (`image_id`, `resto_id`, `image_name`, `image_created_at`, `image_updated_at`) VALUES
(1, 1, '2021-03-10T17-09-23.166Znick-karvounis-Ciqxn7FE4vE-unsplash (1).jpg', '2021-03-10 17:09:23', '2021-03-10 17:09:23'),
(2, 1, '2021-03-10T17-09-37.686Zmichael-browning-MtqG1lWcUw0-unsplash.jpg', '2021-03-10 17:09:37', '2021-03-10 17:09:37'),
(3, 1, '2021-03-10T17-09-49.675Zshawn-ang-nmpW_WwwVSc-unsplash.jpg', '2021-03-10 17:09:49', '2021-03-10 17:09:49'),
(4, 2, '2021-03-10T18-19-22.164Zmitchell-hollander-Yx-lrVk1ZHY-unsplash.jpg', '2021-03-10 18:19:22', '2021-03-10 18:19:22'),
(5, 2, '2021-03-10T18-19-28.930Zaleks-marinkovic--dlVOoZSYf0-unsplash.jpg', '2021-03-10 18:19:28', '2021-03-10 18:19:28'),
(6, 2, '2021-03-10T18-19-38.461Zsangga-rima-roman-selia-wY0EQ_cgBhU-unsplash.jpg', '2021-03-10 18:19:38', '2021-03-10 18:19:38'),
(7, 3, '2021-03-10T18-20-37.666Zdaan-evers-tKN1WXrzQ3s-unsplash.jpg', '2021-03-10 18:20:37', '2021-03-10 18:20:37'),
(8, 3, '2021-03-10T18-20-46.291Zandy-falconer-dwQRixazu9I-unsplash.jpg', '2021-03-10 18:20:46', '2021-03-10 18:20:46'),
(9, 3, '2021-03-10T18-20-53.324Zdrew-coffman-jUOaONoXJQk-unsplash.jpg', '2021-03-10 18:20:53', '2021-03-10 18:20:53'),
(10, 4, '2021-03-10T18-22-24.059Zkelvin-ang-XDX8gdo8QUU-unsplash.jpg', '2021-03-10 18:22:24', '2021-03-10 18:22:24'),
(11, 4, '2021-03-10T18-22-40.684Zsung-shin-KvFz3IXf8MM-unsplash.jpg', '2021-03-10 18:22:40', '2021-03-10 18:22:40'),
(12, 4, '2021-03-10T18-22-48.997Zsyed-ahmad-kgjQ1AGDwE0-unsplash.jpg', '2021-03-10 18:22:49', '2021-03-10 18:22:49'),
(13, 5, '2021-03-10T18-23-32.627Zjo-jo-wI__5oGrpf4-unsplash.jpg', '2021-03-10 18:23:32', '2021-03-10 18:23:32'),
(14, 5, '2021-03-10T18-23-43.224Zscott-madore-1-WRkDjm_K4-unsplash.jpg', '2021-03-10 18:23:43', '2021-03-10 18:23:43'),
(15, 5, '2021-03-10T18-23-55.639Zrobin-stickel-tzl1UCXg5Es-unsplash.jpg', '2021-03-10 18:23:55', '2021-03-10 18:23:55'),
(16, 6, '2021-03-10T18-24-43.218Zerwan-hesry-OlQ-NaEyVmQ-unsplash.jpg', '2021-03-10 18:24:43', '2021-03-10 18:24:43'),
(17, 6, '2021-03-10T18-24-53.499Zlindsay-moe-sKM8RK2C-YI-unsplash.jpg', '2021-03-10 18:24:53', '2021-03-10 18:24:53'),
(18, 6, '2021-03-10T18-25-06.004Zwesual-click-zgl4LvTL06c-unsplash.jpg', '2021-03-10 18:25:06', '2021-03-10 18:25:06');

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `user_id` int(11) NOT NULL,
  `user_email` varchar(150) NOT NULL,
  `user_password` varchar(255) NOT NULL,
  `user_role` tinyint(1) NOT NULL,
  `user_key` varchar(255) DEFAULT NULL,
  `user_status` tinyint(1) NOT NULL DEFAULT 0,
  `user_created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `user_updated_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`user_id`, `user_email`, `user_password`, `user_role`, `user_key`, `user_status`, `user_created_at`, `user_updated_at`) VALUES
(1, 'rizqonmaulana5@gmail.com', '$2b$10$neuYk7sLEYZyW.WwizwoQOYRAOmSXPnnralqqp1tIiSpY3o29EqSq', 1, NULL, 1, '2021-03-10 09:04:51', '2021-03-10 17:04:51'),
(2, 'maulanasblog@gmail.com', '$2b$10$pFTq95saKftnoFssV9LN.uzPZPgBmH9Jxh0o724m1N10Vwtknn0IC', 1, NULL, 1, '2021-03-10 09:20:21', '2021-03-10 17:20:21'),
(3, 'warungkembangan@gmail.com', '$2b$10$neuYk7sLEYZyW.WwizwoQOYRAOmSXPnnralqqp1tIiSpY3o29EqSq', 1, NULL, 1, '2021-03-10 09:04:51', '2021-03-10 17:04:51'),
(4, 'restocika@gmail.com', '$2b$10$pFTq95saKftnoFssV9LN.uzPZPgBmH9Jxh0o724m1N10Vwtknn0IC', 1, NULL, 1, '2021-03-10 09:20:21', '2021-03-10 17:20:21'),
(5, 'nasinusantara@gmail.com', '$2b$10$neuYk7sLEYZyW.WwizwoQOYRAOmSXPnnralqqp1tIiSpY3o29EqSq', 1, NULL, 1, '2021-03-10 09:04:51', '2021-03-10 17:04:51'),
(6, 'lombokpedas@gmail.com', '$2b$10$pFTq95saKftnoFssV9LN.uzPZPgBmH9Jxh0o724m1N10Vwtknn0IC', 1, NULL, 1, '2021-03-10 09:20:21', '2021-03-10 17:20:21'),
(7, 'andi@gmail.com', '$2b$10$neuYk7sLEYZyW.WwizwoQOYRAOmSXPnnralqqp1tIiSpY3o29EqSq', 0, NULL, 1, '2021-03-10 09:04:51', '2021-03-10 17:04:51'),
(8, 'sugi@gmail.com', '$2b$10$pFTq95saKftnoFssV9LN.uzPZPgBmH9Jxh0o724m1N10Vwtknn0IC', 0, NULL, 1, '2021-03-10 09:20:21', '2021-03-10 17:20:21'),
(9, 'andre@gmail.com', '$2b$10$neuYk7sLEYZyW.WwizwoQOYRAOmSXPnnralqqp1tIiSpY3o29EqSq', 0, NULL, 1, '2021-03-10 09:04:51', '2021-03-10 17:04:51'),
(10, 'kira@gmail.com', '$2b$10$pFTq95saKftnoFssV9LN.uzPZPgBmH9Jxh0o724m1N10Vwtknn0IC', 0, NULL, 1, '2021-03-10 09:20:21', '2021-03-10 17:20:21'),
(11, 'salma@gmail.com', '$2b$10$neuYk7sLEYZyW.WwizwoQOYRAOmSXPnnralqqp1tIiSpY3o29EqSq', 0, NULL, 1, '2021-03-10 09:04:51', '2021-03-10 17:04:51'),
(12, 'yoko@gmail.com', '$2b$10$pFTq95saKftnoFssV9LN.uzPZPgBmH9Jxh0o724m1N10Vwtknn0IC', 0, NULL, 1, '2021-03-10 09:20:21', '2021-03-10 17:20:21');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `menu`
--
ALTER TABLE `menu`
  ADD PRIMARY KEY (`menu_id`);

--
-- Indexes for table `menu_image`
--
ALTER TABLE `menu_image`
  ADD PRIMARY KEY (`image_id`);

--
-- Indexes for table `reputation`
--
ALTER TABLE `reputation`
  ADD PRIMARY KEY (`reputation_id`);

--
-- Indexes for table `resto`
--
ALTER TABLE `resto`
  ADD PRIMARY KEY (`resto_id`);

--
-- Indexes for table `resto_image`
--
ALTER TABLE `resto_image`
  ADD PRIMARY KEY (`image_id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`user_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `menu`
--
ALTER TABLE `menu`
  MODIFY `menu_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT for table `menu_image`
--
ALTER TABLE `menu_image`
  MODIFY `image_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=46;

--
-- AUTO_INCREMENT for table `reputation`
--
ALTER TABLE `reputation`
  MODIFY `reputation_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;

--
-- AUTO_INCREMENT for table `resto`
--
ALTER TABLE `resto`
  MODIFY `resto_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `resto_image`
--
ALTER TABLE `resto_image`
  MODIFY `image_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
