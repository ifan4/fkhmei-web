import { psdm } from '../../../data/psdm';

export default function handler(req:any, res:any){
    res.status(200).json(psdm)
}