import { PrismaClient } from "@prisma/client";
import { NextApiResponse, NextApiRequest } from "next";
const prisma = new PrismaClient()

export default async ({query: {id: filmId}}: NextApiRequest, res: NextApiResponse) =>{
    if(isNaN(filmId)){
        res.status(400).json({message: "The film id must be of type number!"})
        return
    }

    const movie = await  prisma.movie.findFirst({where: {id: +filmId}})
    res.json(movie);
}

