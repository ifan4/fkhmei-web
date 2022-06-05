import { Key, useEffect, useState } from "react"

export default function table({head,content}:any){
    console.log('ini content');
    console.log(content);
    
    
       
    return (
        <table className="table table-bordered">
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


                {/* {
                    content.map( (row:any,key:Key) => {
                        return(
                            <tr key={key}>
                                {
                                    row.map( (col:any,key:Key) => {
                                        return(
                                            <td key={key}>{col}</td>
                                        )
                                    })
                                }
                                
                            </tr>
                        )
                    } )
                } */}
            </tbody>
        </table>
    )
}