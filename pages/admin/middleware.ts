// import axios from 'axios';
import axios from 'axios';
import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'

export function middleware(request: NextRequest) {
    console.log("MASUK ANJINGGGG")
    const response = NextResponse.next()
    const url = request.url;
    const accessToken = request.cookies.get('accessToken')
    const authentication = async ()=> {
        try {
            const res = await axios.get('https://fkhmei-web.ifandri.com/api//user', {
                headers: {
                    authorization: "Bearer " + accessToken
                }
            })
            if (res.status == 200){
                console.log("Berhasil masukkkk");
                
                return NextResponse.redirect(new URL('/admin/dashboard', request.url))
            }

        } catch (error) {
            return NextResponse.redirect(new URL('/', request.url))
        }
    }

    authentication()
}

// export function middleware(request: NextRequest) {
    
    
//     if (request.nextUrl.pathname.startsWith('/admin')) {
//       // This logic is only applied to /about
//       console.log("masuk memek");
      
//     }
  
//     if (request.nextUrl.pathname.startsWith('/dashboard')) {
//       // This logic is only applied to /dashboard
//     }
//   }


