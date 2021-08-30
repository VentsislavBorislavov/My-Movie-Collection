import { NextApiRequest, NextApiResponse } from "next";
import { isValidId } from ".";
import { prisma } from "../_base";

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
            const { isFavorite, image, title, year } = JSON.parse(req.body);
            if (movie) {
                movie = await prisma.movie.update({ where: { id: +filmId }, data: {  isFavorite,  image, title, year } })
            } else {
                movie = await prisma.movie.create({ data: { id: +filmId,  isFavorite, image, title, year } })
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