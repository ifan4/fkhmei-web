import { Key, useEffect, useState } from "react"

export default function table({head,content}:any){
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [data, setData] = useState()


    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(()=> {
        console.log('this is useEffect');
        
        setData(content)
        console.log(data);
        
    })
    
    
       
    return (
        <>
            {
                data.array.forEach((data:any) => {
                    console.log("test");
                    
                })
            }
        </>
    )
}