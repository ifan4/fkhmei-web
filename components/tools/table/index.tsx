/* eslint-disable react-hooks/rules-of-hooks */
import { Key, useEffect, useState } from "react"

export default function table({head,content}:any){
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [data, setData] = useState([])


    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(
        () => {
            setData(content)
            console.log(data);
            
        }
    )
    
    
       
    return (
        <table className="table table-bordered table-light table-hover">
            <thead>
                <tr>
                    {
                        head.map( (d:any,key:Key) => {
                            return(
                                <th scope="col" key={key}>{d}</th>
                            )
                        })
                    }
                </tr>
            </thead>
            <tbody>


                {
                    data.length > 0 
                    ?
                    data.map( (row:any,key:Key) => {
                        return(
                            <TableRow datas={row} key={key}/>
                        )
                    } )
                    :
                    <tr> 
                        <td colSpan={3} className={'text-center'}>loading...</td>
                    </tr>
                }
            </tbody>
        </table>
    )
}

const TableRow = ({datas}:any) => {
    return (
        <tr>
            {
                Object.values(datas).map( (data:any,key:Key) => {
                    if (data != datas.id) return <td key={key}>{data}</td>
                    
                })
            }
        </tr>
    )
}