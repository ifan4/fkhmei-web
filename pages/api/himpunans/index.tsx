import { himpunans } from '../../../data/himpunans';

export default function handler(req, res){
    res.status(200).json(himpunans)
}