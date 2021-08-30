import { NextApiRequest, NextApiResponse } from "next";
import { isValidId } from ".";
import { prisma } from "../_base";


export default async (req: NextApiRequest, res: NextApiResponse) => {
    const filmId = req.query.id;
    const rating = +req.body
    
    if (!isValidId(filmId) || rating > 5 || rating < 0) {
        res.status(400).json({ message: "Invalid data" })
        return
    }
    
    let movie = await prisma.movie.findFirst({ where: { id: +filmId } })

    if (req.method === "POST") {
        try {
            if (movie) {
                movie = await prisma.movie.update({ where: { id: +filmId }, data: { rating: +req.body } })
            } else {
                movie = await prisma.movie.create({ data: { id: +filmId, rating: +req.body } })
            }
        } catch (error) {
            res.status(500).json(JSON.stringify(error))
        }
    }
    movie ?
        res.json({rating: movie.rating}) : res.json({ rating: 0 });

}