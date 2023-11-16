import { Request, Response } from 'express';
export const getHTMLPage = async (req : Request, res : Response) => {
    try{
        res.sendFile(__dirname + '/index.html');
    }catch (e) {
        res.status(500).send({error:e});
    }
};