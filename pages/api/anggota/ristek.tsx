import { ristek } from '../../../data/ristek';

export default function handler(req:any, res:any){
    res.status(200).json(ristek)
}