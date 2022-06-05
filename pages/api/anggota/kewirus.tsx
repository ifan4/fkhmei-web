import { Kewirus } from '../../../data/Kewirus';

export default function handler(req:any, res:any){
    res.status(200).json(Kewirus)
}