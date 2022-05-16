export default function navbar(props:any){
    return(
        <nav className="navbar navbar-light fixed-top" style={{backgroundColor:'rgba(255, 255, 255, 0.19)'}}>
            <div className="container py-0">
                <a className="navbar-brand" href="#">
                    <img src="/logo-header.png" alt="" width="150" className="d-inline-block rounded align-text-top"/>
                </a>
                <div className='d-flex align-items-center'>
                    <a href="#" className='btn btn-outline-light fw-bold px-4'>
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