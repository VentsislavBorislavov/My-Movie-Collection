import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";

const prisma = new PrismaClient()

export default async (req: NextApiRequest, res: NextApiResponse) => {
    const favoriteMovies = await prisma.movie.findMany({where:{isFavorite: true}})
    res.json(favoriteMovies);
}