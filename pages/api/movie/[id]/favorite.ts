import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";
import { isValidId } from ".";

const prisma = new PrismaClient()

export default async (req: NextApiRequest, res: NextApiResponse) => {
    const filmId = req.query.id;
    
    if (!isValidId(filmId)) {
        res.status(400).json({ message: "Invalid data" })
        return
    }

    let movie;

    if (req.method === "POST") {
        movie = await prisma.movie.findFirst({ where: { id: +filmId } })
        try {
            const { isFavorite, image } = JSON.parse(req.body);
            if (movie) {
                movie = await prisma.movie.update({ where: { id: +filmId }, data: { isFavorite: isFavorite, image: image } })
            } else {
                movie = await prisma.movie.create({ data: { id: +filmId, isFavorite: isFavorite, image: image } })
            }
            res.json(movie)
            return
        } catch (error) {
            res.status(500).json(JSON.stringify(error))
            return
        }
    }

    // Checks if movie record exists and if it is in favorites
    movie = await prisma.movie.findFirst({ where: { id: +filmId, isFavorite: true } })

    res.json({ isFavorite: Boolean(movie) })


}