import Image from 'next/image'
import { useRouter } from 'next/router';

export default function navbar(props:any){
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const pathname = useRouter().pathname
    console.log(pathname);
    
    return(
        <nav className="navbar navbar-light fixed-top" style={{backgroundColor:'rgba(255, 255, 255, 0.19)'}}>
            <div className="container py-0">
                <a className="navbar-brand d-flex align-items-center" href="#">
                    <Image src={'/logo-header.png'} width={'147'} height={"31"} quality={100} className={'rounded align-middle'}></Image>
                </a>
                <div className='d-flex align-items-center'>
                    <a 
                    href="#" 
                    className={`btn ${pathname=="/" ? 'btn-light' : 'btn-outline-light'} fw-bold px-2`}>
                        Home
                    </a>
                    <hr className='vr py-3 border border-2 opacity-100 rounded-pill mx-3'/>
                    <div className="dropdown">
                    <a href="" className='btn btn-outline-light fw-bold' role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                        Profile
                    </a>
                    <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenuLink">
                        <li><a className="dropdown-item" href="#">Sejarah</a></li>
                        <li><a className="dropdown-item" href="#">Organisasi</a></li>
                        <li><a className="dropdown-item" href="#">Kepengurusan</a></li>
                    </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}