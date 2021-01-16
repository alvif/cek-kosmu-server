-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Jan 17, 2021 at 04:13 AM
-- Server version: 5.7.24
-- PHP Version: 7.4.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_kos`
--

-- --------------------------------------------------------

--
-- Table structure for table `admins`
--

CREATE TABLE `admins` (
  `id_admin` int(5) NOT NULL,
  `nama_admin` varchar(100) DEFAULT NULL,
  `email_admin` varchar(30) DEFAULT NULL,
  `username_admin` varchar(30) DEFAULT NULL,
  `password_admin` varchar(30) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `admins`
--

INSERT INTO `admins` (`id_admin`, `nama_admin`, `email_admin`, `username_admin`, `password_admin`, `createdAt`, `updatedAt`) VALUES
(1, 'Alvif Sandana Mahardika', 'alvifsandana@gmail.com', 'alvif', '240800', '2020-12-24 18:54:10', '2020-12-24 18:54:10'),
(2, 'Khoirunnisa', 'khns1710@gmail.com', 'nisaa', '171000', '2020-12-24 18:54:10', '2020-12-24 18:54:10');

-- --------------------------------------------------------

--
-- Table structure for table `owners`
--

CREATE TABLE `owners` (
  `id_owner` int(11) NOT NULL,
  `nama_owner` varchar(255) DEFAULT NULL,
  `alamat_owner` varchar(255) DEFAULT NULL,
  `TTL` varchar(255) DEFAULT NULL,
  `jk` varchar(255) DEFAULT NULL,
  `no_telpon` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `username` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `owners`
--

INSERT INTO `owners` (`id_owner`, `nama_owner`, `alamat_owner`, `TTL`, `jk`, `no_telpon`, `email`, `username`, `password`, `createdAt`, `updatedAt`) VALUES
(1, 'Alvif Sandana Mahardika', 'Rogojampi', 'BWI, 24 Agustus 2000', 'L', '081345678900', 'asm240800@example.com', 'test', 'test12345', '2020-12-24 18:54:10', '2020-12-24 18:54:10'),
(2, 'Fangky Ristiawan', 'Singojuruh', 'BWI, 01 September 2000', 'L', '081234567890', 'pang@example.com', 'test1', 'test12345', '2020-12-24 18:54:10', '2020-12-24 18:54:10'),
(3, 'Dheta', 'Banyuwangi', 'null', 'P', 'null', 'null@example.com', 'test2', 'test12345', '2020-12-24 18:54:10', '2020-12-24 18:54:10'),
(4, 'foo', 'Rogojampi', 'BWI, 24 Agustus 2000', 'L', '081345678900', 'asm240800@example.com', 'test3', 'test12345', '2020-12-24 18:54:10', '2020-12-24 18:54:10'),
(5, 'boo', 'Kabat', 'null', 'L', '081345678900', 'boo@example.com', 'test4', 'test12345', '2020-12-24 18:54:10', '2020-12-24 18:54:10'),
(6, 'testowner', 'test place', NULL, 'L', NULL, 'test@ex.xom', '', '', '2021-01-13 07:21:58', '2021-01-13 07:21:58'),
(7, 'new@ex.com', NULL, NULL, 'L', NULL, NULL, 'testnew', '123456', '2021-01-13 07:34:15', '2021-01-13 07:34:15'),
(8, 'a', 'a', NULL, 'L', NULL, 'a@ex.com', 'a', '123456', '2021-01-13 07:38:25', '2021-01-13 07:38:25'),
(9, 'b', 'll', 'b1999-11-23', 'P', NULL, '23@g.com', 'b', '123456', '2021-01-13 07:47:27', '2021-01-13 07:47:27');

-- --------------------------------------------------------

--
-- Table structure for table `pemesanans`
--

CREATE TABLE `pemesanans` (
  `id_pesanan` int(11) NOT NULL,
  `id_user` int(11) DEFAULT NULL,
  `id_kos` int(11) DEFAULT NULL,
  `n_kamar` int(11) DEFAULT NULL,
  `lama_tinggal` int(11) DEFAULT NULL,
  `nominal` int(11) NOT NULL,
  `status_pesanan` varchar(255) DEFAULT NULL,
  `ketersediaan` text NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `pemesanans`
--

INSERT INTO `pemesanans` (`id_pesanan`, `id_user`, `id_kos`, `n_kamar`, `lama_tinggal`, `nominal`, `status_pesanan`, `ketersediaan`, `createdAt`, `updatedAt`) VALUES
(1, 1, 1, 1, 5, 0, 'lanjutpembayaran', 'tersedia', '2021-01-14 00:44:46', '2021-01-15 23:37:44'),
(3, 2, 3, 1, 8, 0, 'tersedia', 'tersedia', '2021-01-13 18:00:01', '2021-01-15 23:43:03'),
(4, 1, 2, 1, 4, 0, 'tersedia', 'tersedia', '2021-01-13 18:04:48', '2021-01-15 23:45:43'),
(5, 4, 3, 1, 5, 0, 'tersedia', 'tersedia', '2021-01-13 18:09:14', '2021-01-16 19:43:01'),
(6, 4, 3, 1, 2, 0, 'lanjutpembayaran', 'tersedia', '2021-01-13 18:12:18', '2021-01-15 19:17:45'),
(7, 3, 3, 1, 5, 0, 'unconfirmed', 'tersedia', '2021-01-14 04:33:21', '2021-01-14 18:11:27'),
(8, 2, 3, 1, 5, 0, 'unconfirmed', 'tersedia', '2021-01-14 04:41:14', '2021-01-14 18:12:37'),
(9, 3, 2, 1, 6, 0, 'unconfirmed', 'unconfirmed', '2021-01-14 05:02:07', '2021-01-14 05:02:07'),
(10, 1, 1, 1, 0, 0, 'tersedia', 'tersedia', '2021-01-14 05:14:01', '2021-01-15 23:45:50'),
(11, 1, 2, 1, 1, 0, 'unconfirmed', 'tersedia', '2021-01-14 05:17:06', '2021-01-14 18:18:06'),
(12, 1, 3, 1, 5, 0, 'unconfirmed', 'tersedia', '2021-01-14 05:20:37', '2021-01-14 18:17:21'),
(13, 4, 3, 1, 2, 704000, 'unconfirmed', 'unconfirmed', '2021-01-15 19:36:07', '2021-01-15 19:36:07');

-- --------------------------------------------------------

--
-- Table structure for table `sequelizemeta`
--

CREATE TABLE `sequelizemeta` (
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `sequelizemeta`
--

INSERT INTO `sequelizemeta` (`name`) VALUES
('20201118055612-create-users.js'),
('20201118161719-create-admin.js'),
('20201119084709-create-tbl-kos.js'),
('20201215173926-create-owners.js'),
('20201217164356-create-transaksi.js'),
('20210113165501-create-pemesanan.js');

-- --------------------------------------------------------

--
-- Table structure for table `tblkos`
--

CREATE TABLE `tblkos` (
  `id_kos` int(5) NOT NULL,
  `id_pemilik` int(11) NOT NULL,
  `nama_kos` varchar(100) DEFAULT NULL,
  `alamat_kos` varchar(255) DEFAULT NULL,
  `luas_kamar` int(5) DEFAULT NULL,
  `jarak_kos` int(5) DEFAULT NULL,
  `jumlah_kamar` int(5) DEFAULT NULL,
  `kamar_dipesan` int(5) DEFAULT NULL,
  `kamar_dihuni` int(5) DEFAULT NULL,
  `fasilitas` varchar(255) DEFAULT NULL,
  `harga_sewa` int(11) DEFAULT NULL,
  `status_kosan` varchar(255) DEFAULT NULL,
  `img` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tblkos`
--

INSERT INTO `tblkos` (`id_kos`, `id_pemilik`, `nama_kos`, `alamat_kos`, `luas_kamar`, `jarak_kos`, `jumlah_kamar`, `kamar_dipesan`, `kamar_dihuni`, `fasilitas`, `harga_sewa`, `status_kosan`, `img`, `createdAt`, `updatedAt`) VALUES
(1, 2, 'joo1', 'Belakang STIKOM', 10, 1, 15, 0, 0, 'tes,tes1,tes2', 325000, 'verified', 'image-1608049910729.png', '2020-12-24 18:54:10', '2021-01-15 23:15:45'),
(2, 1, 'foo2', 'Belakang STIKOM', 6, 1, 7, 0, 0, 'tes,tes1,tes2', 400000, 'verified', 'image-1605902576753.png', '2020-12-24 18:54:10', '2021-01-15 23:16:37'),
(3, 1, 'foo3', 'Belakang STIKOM', 10, 1, 12, 1, 0, 'tes,tes1,tes2', 352000, 'verified', 'image-1608049910729.png', '2020-12-24 18:54:10', '2021-01-16 00:53:48'),
(4, 5, 'Kosan Titor', 'Belakang STIKOM', 10, 1, 8, 0, 0, 'tes,tes1,tes2', 677000, 'after register', 'image-1608049910729.png', '2020-12-24 18:54:10', '2021-01-15 21:54:42'),
(5, 4, 'Kosan Terang', 'Belakang STIKOM', 10, 1, 10, 0, 0, 'tes,tes1,tes2', 567000, 'after register', 'image-1608049910729.png', '2020-12-24 18:54:10', '2021-01-15 21:52:08'),
(6, 3, 'Kosan Damai', 'Jl. Percobaan No. 1 Banyuwangi', 6, 1, 20, 0, 0, 'tes, tes1, tes2, tes3, tes4', 450000, 'verified', 'foo.png', '2021-01-05 06:21:20', '2021-01-15 21:58:15');

-- --------------------------------------------------------

--
-- Table structure for table `transaksis`
--

CREATE TABLE `transaksis` (
  `id_transaksi` int(5) NOT NULL,
  `kode_transaksi` varchar(255) DEFAULT NULL,
  `tgl_transaksi` datetime DEFAULT NULL,
  `id_penyewa` int(11) DEFAULT NULL,
  `id_kosan` int(11) DEFAULT NULL,
  `n_kamar` int(11) DEFAULT NULL,
  `nominal` int(11) DEFAULT NULL,
  `status_transaksi` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `transaksis`
--

INSERT INTO `transaksis` (`id_transaksi`, `kode_transaksi`, `tgl_transaksi`, `id_penyewa`, `id_kosan`, `n_kamar`, `nominal`, `status_transaksi`, `createdAt`, `updatedAt`) VALUES
(18, 'kosmu2021-4-3', '2021-01-15 20:28:11', 4, 3, 1, 0, 'selesai(user)OK', '2021-01-15 20:28:11', '2021-01-16 01:03:21'),
(19, 'kosmu2021-4-3', '2021-01-15 20:35:51', 4, 3, 1, 704000, 'selesai(user)', '2021-01-15 20:35:51', '2021-01-15 21:10:18'),
(20, 'kosmu2021-4-3', '2021-01-16 00:53:33', 4, 3, 1, 0, 'lanjutpembayaran', '2021-01-16 00:53:33', '2021-01-16 00:53:33');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id_user` int(11) NOT NULL,
  `nama_user` varchar(255) DEFAULT NULL,
  `alamat_user` varchar(255) DEFAULT NULL,
  `telpon_user` varchar(255) DEFAULT NULL,
  `email_user` varchar(255) DEFAULT NULL,
  `username` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `tgllahir` datetime DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id_user`, `nama_user`, `alamat_user`, `telpon_user`, `email_user`, `username`, `password`, `tgllahir`, `createdAt`, `updatedAt`) VALUES
(1, 'Alvif Sandana', 'Kebalen Lor', '081386219341', 'alvifsandana@example.com', 'alvifsan', 'test12345', '2020-12-24 18:54:10', '2020-12-24 18:54:10', '2020-12-24 18:54:10'),
(2, 'Khoirunnisa', 'Indragiri', '081775512345', 'nisaa@example.com', 'nisaa', 'test12345', '2020-12-24 18:54:10', '2020-12-24 18:54:10', '2020-12-24 18:54:10'),
(3, 'Asrofi Hamdani', 'Kebalen Lor', '081345678901', 'asrofi@example.com', 'rofi', 'test12345', '2020-12-24 18:54:10', '2020-12-24 18:54:10', '2020-12-24 18:54:10'),
(4, 'Laura Deswita Putri', 'Kebalen Lor', '082345678900', 'laura@example.com', 'lauraa', 'test12345', '2020-12-24 18:54:10', '2020-12-24 18:54:10', '2020-12-24 18:54:10'),
(5, 'Naura Salsabila', 'Kebalen Kidul', '081245654321', 'rara@example.com', 'raraa', 'test12345', '2020-12-24 18:54:10', '2020-12-24 18:54:10', '2020-12-24 18:54:10'),
(6, 'dandott', 'Kebalen', '0891234567', 'tes@ex.ample', 'dandott', 'dandott', '2000-11-10 17:00:00', '2021-01-16 01:07:13', '2021-01-16 01:07:13'),
(8, 'doni', 'Benelan', '089123456789', 'doni@example.com', 'doni', 'doni12345', '2001-07-06 17:00:00', '2021-01-16 01:12:00', '2021-01-16 01:12:00');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admins`
--
ALTER TABLE `admins`
  ADD PRIMARY KEY (`id_admin`);

--
-- Indexes for table `owners`
--
ALTER TABLE `owners`
  ADD PRIMARY KEY (`id_owner`);

--
-- Indexes for table `pemesanans`
--
ALTER TABLE `pemesanans`
  ADD PRIMARY KEY (`id_pesanan`);

--
-- Indexes for table `sequelizemeta`
--
ALTER TABLE `sequelizemeta`
  ADD PRIMARY KEY (`name`),
  ADD UNIQUE KEY `name` (`name`);

--
-- Indexes for table `tblkos`
--
ALTER TABLE `tblkos`
  ADD PRIMARY KEY (`id_kos`);

--
-- Indexes for table `transaksis`
--
ALTER TABLE `transaksis`
  ADD PRIMARY KEY (`id_transaksi`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id_user`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `admins`
--
ALTER TABLE `admins`
  MODIFY `id_admin` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `owners`
--
ALTER TABLE `owners`
  MODIFY `id_owner` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `pemesanans`
--
ALTER TABLE `pemesanans`
  MODIFY `id_pesanan` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT for table `tblkos`
--
ALTER TABLE `tblkos`
  MODIFY `id_kos` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `transaksis`
--
ALTER TABLE `transaksis`
  MODIFY `id_transaksi` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id_user` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
