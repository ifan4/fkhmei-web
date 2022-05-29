import { himpunans } from '../../../data/himpunans';

export default function handler(req:any, res:any){
    res.status(200).json(himpunans)
}