import { kewirus } from '../../../data/kewirus';

export default function handler(req:any, res:any){
    res.status(200).json(kewirus)
}