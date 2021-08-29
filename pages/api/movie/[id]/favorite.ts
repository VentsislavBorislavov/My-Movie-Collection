import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";
const prisma = new PrismaClient()

interface FavoriteMovie {
    isFavorite: boolean,
    image: string
}
export default async (req: NextApiRequest, res: NextApiResponse) => {
    const filmId = req.query.id;
    if (isNaN(filmId)) {
        res.status(400).json({ message: "Invalid data" })
        return
    }

    let favorite;

    if (req.method === "POST") {
        favorite = await prisma.movie.findFirst({ where: { id: +filmId } })
        try {
            const { isFavorite, image } = req.body;
            if (favorite) {
                favorite = await prisma.movie.update({ where: { id: +filmId }, data: { isFavorite: isFavorite, image: image } })
            } else {
                favorite = await prisma.movie.create({ data: { id: +filmId, isFavorite: isFavorite, image: image } })
            }
            res.status(500).json(JSON.stringify(favorite))

            return
        } catch (error) {
            res.status(500).json(JSON.stringify(error))
            return
        }
    }

    // Checks if movie record exists and if it is in favorites
    favorite = await prisma.movie.findFirst({ where: { id: +filmId, isFavorite: true } })

    res.json({ isFavorite: Boolean(favorite) })


}