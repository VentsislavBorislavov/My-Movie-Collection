import { prisma } from "./_base";
import { NextApiRequest, NextApiResponse } from "next";

export default async (req: NextApiRequest, res: NextApiResponse) => {
    const favoriteMovies = await prisma.movie.findMany({where:{isFavorite: true}})
    res.json(favoriteMovies);
}