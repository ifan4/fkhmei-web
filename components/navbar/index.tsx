export default function navbar(props:any){
    return(
        <nav className="navbar fixed-top">
            <div className="container">
            <a className="navbar-brand" href="#">
                <img src="/logo-header.png" alt="" width="130" className="d-inline-block rounded align-text-top"/>
            </a>
            <div className='d-flex align-items-center'>
                <a href="" role={'button'} className='btn btn-light'>
                    Home
                </a>
                <hr className='vr py-3 border border-1 opacity-100 rounded-pill mx-2'/>
                <div className="dropdown">
                <a href="" role={'button'} className='btn btn-light' id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
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