import { prisma } from "../_base";
import { NextApiRequest, NextApiResponse } from "next";
import { isValidId } from ".";


export default async (req: NextApiRequest, res: NextApiResponse) => {
    const filmId = req.query.id;
    if (!isValidId(filmId)) {
        res.status(400).json({ message: "Invalid data" })
        return
    }

    let note = await prisma.movie.findFirst({ where: { id: +filmId } })

    if (req.method === "POST") {
        try {
            const {note: newNote} = JSON.parse(req.body)
            if (typeof req.body !== "string") {
                res.status(400).json({ message: "Invalid data" })
            }
            if (note) {
                note = await prisma.movie.update({ where: { id: +filmId }, data: { note: newNote } })
            } else {
                note = await prisma.movie.create({ data: { id: +filmId, note: newNote } })
            }
        } catch (error) {
            res.status(500).json(JSON.stringify(error))
        }
    }
    note ?
        res.json(note) : res.status(404).json({ message: "Note not found" });

}