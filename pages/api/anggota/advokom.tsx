import { advokom } from '../../../data/advokom';

export default function handler(req:any, res:any){
    res.status(200).json(advokom)
}