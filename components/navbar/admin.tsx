import { FaBars } from 'react-icons/fa';
import Image from 'next/image';
import Cookies from 'js-cookie';
import Router from 'next/router';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Link from 'next/link';

const logoutHandler = () => {
    Cookies.remove("refreshToken");
    Cookies.remove("accessToken")

    console.log("Token Has Beeen Removed");
    Router.replace('/auth/login')
}

export default function header(){
    const [profileImage, setProfileImage] = useState('');
    const [profileName, setProfileName] = useState('Admin');
   
    
    

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm mb-3">
            <div className="container px-4">
                <a className="navbar-brand" href="#">
                    <FaBars />
                </a>
                <ul className="navbar-nav">
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle d-flex align-items-center" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            <span className='me-1'>{profileName}</span>
                            
                        </a>
                    <ul className="dropdown-menu dropdown-menu-lg-end" aria-labelledby="navbarDropdownMenuLink">
                        
                        <li><a className="dropdown-item" href="#" onClick={logoutHandler}>Logout</a></li>
                    </ul>
                    </li>
                </ul>
            </div>
        </nav>
    )
}