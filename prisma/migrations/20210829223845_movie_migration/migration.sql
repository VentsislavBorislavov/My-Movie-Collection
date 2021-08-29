-- CreateTable
CREATE TABLE `Movie` (
    `id` INTEGER NOT NULL,
    `note` VARCHAR(191) NOT NULL DEFAULT '',
    `rating` INTEGER NOT NULL DEFAULT 0,
    `isFavorite` BOOLEAN NOT NULL DEFAULT false,
    `image` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
