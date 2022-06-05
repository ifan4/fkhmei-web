import { sosmas } from '../../../data/sosmas';

export default function handler(req:any, res:any){
    res.status(200).json(sosmas)
}