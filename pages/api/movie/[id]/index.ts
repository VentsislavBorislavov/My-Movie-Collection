import { prisma } from "../_base";
import { NextApiResponse, NextApiRequest } from "next";

export default async ({ query: { id: filmId } }: NextApiRequest, res: NextApiResponse) => {
    if (!isValidId(filmId)) {
        res.status(400).json({ message: "Invalid film id" })
        return
    }

    const movie = await prisma.movie.findFirst({ where: { id: +filmId } })
    movie?
    res.json(movie): res.json({});
}

export const isValidId = (id: any) => {
    return isNaN(id) || id % 1 === 0;
}