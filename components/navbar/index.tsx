import Image from 'next/image'
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';


interface LayoutProps {
    solidColor: boolean
}

export default function navbar(props: LayoutProps){
    const {solidColor} = props
    const [headerColor, setHeaderColor] = useState('rgba(207, 207, 207, 0.37)')
    
    useEffect(()=> {
        
        solidColor == true && setHeaderColor("#9399A1");
    },[])
    
    const pathname = useRouter().pathname
    console.log(pathname);
    
    return(
        <nav className="navbar navbar-light fixed-top" style={{backgroundColor: headerColor}}>
            <div className="container py-0">
            <Link href={'/'}>
                <a className="navbar-brand d-flex align-items-center" href="#">
                    <Image src={'/logo-header.png'} width={'147'} height={"31"} quality={100} className={'rounded align-middle'}></Image>
                </a>
            </Link>
                <div className='d-flex align-items-center'>
                    <Link href={'/'}>
                        <a 
                        href="#" 
                        className={`btn ${pathname=="/" ? 'btn-light' : 'btn-outline-light'} fw-bold px-2`}>
                            Home
                        </a>
                    </Link>
                    <hr className='vr py-3 border border-2 opacity-100 rounded-pill mx-3'/>
                    <div className="dropdown">
                        <a href="" className={`btn ${pathname.slice(0,8)=="/profile" ? 'btn-light' : 'btn-outline-light'} fw-bold`} role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                            Profile
                        </a>
                    <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenuLink">
                        <li>
                            <Link href={'/profile/sejarah'}>
                                <a className="dropdown-item" href="#">Sejarah</a>
                            </Link>
                        </li>
                        <li>
                            <Link href={'/profile/organisasi'}>
                                <a className="dropdown-item" href="#">Organisasi</a>
                            </Link>
                        </li>
                        <li>
                            <Link href={'/profile/kepengurusan'}>
                                <a className="dropdown-item" href="#">Kepengurusan</a>
                            </Link>
                        </li>
                    </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}