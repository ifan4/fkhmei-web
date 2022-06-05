import { exOfficio } from '../../../data/exOfficio';

export default function handler(req:any, res:any){
    res.status(200).json(exOfficio)
}