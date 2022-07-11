// import axios from 'axios';
import axios from 'axios';
import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'
import type { NextApiRequest, NextApiResponse } from 'next'
export function middleware(request: NextRequest, respon: NextApiResponse) {
    const response = NextResponse.next()
    const url = request.url;
    console.log(request.nextUrl.pathname.startsWith('/admin'));
    const accessToken = request.cookies.get('accessToken')
    
    

    

    
    if (request.nextUrl.pathname.startsWith('/admin')) {
        // This logic is only applied to /about

        if (!accessToken){
            return NextResponse.redirect(new URL('/', request.url))

        }
    }
    if (request.nextUrl.pathname.startsWith('/auth')) {
        // This logic is only applied to /about

        if (accessToken){
            return NextResponse.redirect(new URL('/admin', request.url))

        }
    }

    
}


// const authentication = async (accessToken:any,url:any)=> {

//     const res =  await fetch(`${process.env.NEXT_PUBLIC_URL}/user`,{
//         method: 'GET',
//         headers: {
//             Authorization: "Bearer " + accessToken
//         },
//     })

//     if (res.status !==  200){
//         console.log("masuk bukan 200");
        
//         return  NextResponse.redirect(new URL('/', url))
//     }

    
// }



export const config = {
    matcher: ['/admin/:path*', '/auth/:path*'],
  }