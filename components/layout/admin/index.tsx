import Image from 'next/image';
import { BiHomeAlt,BiHistory } from 'react-icons/bi';
import {BsChatLeftQuote, BsNewspaper} from 'react-icons/bs'
import Header from '../../navbar/admin'
import Link from "next/link";
import { useRouter } from "next/router";
import Styles from '../../../styles/sidebar.module.scss'
import { ReactNode } from 'react';

interface LayoutProps {
    children: ReactNode
}
export default function admin(props: LayoutProps){
    const { children } = props;
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const router = useRouter();

    return(
        <div className="d-flex">
            <div>
                <ul className={"nav flex-column shadow "+ Styles.sidebarAdmin}>
                    <li className="text-center py-3">
                        <Image 
                        src="/images/Logo.png" 
                        width={133} 
                        height={45} 
                        className="p-1"/>
                        <hr className="text-white"/>
                    </li>


                    <li className="nav-item">
                        <Link href={'/admin'}>
                            <a 
                            className={`nav-link d-flex align-items-center link-light ${router.pathname == "/admin" && Styles.active}`} 
                            aria-current="page" 
                            href="home">
                                <BiHomeAlt className="me-2"/>
                                <span>Dashboard</span>
                            </a>
                        </Link>
                    </li>
                    
                   
                  
                    <li className="nav-item">
                        <Link href={'/admin/news'}>
                            <a className={`nav-link d-flex align-items-center link-light  ${router.pathname.slice(0,11) == "/admin/news" && Styles.active}`}
                            href="#">
                                <BsNewspaper className="me-2"/>
                                <span>News Management</span>
                            </a>
                        </Link>
                    </li>

                    <li className="nav-item">
                        <Link href={'/admin/feedbacks'}>
                            <a 
                            className={`nav-link d-flex align-items-center link-light ${router.pathname.slice(0,16) == "/admin/feedbacks" && Styles.active}`} 
                            aria-current="page" 
                            href="home">
                                <BsChatLeftQuote className="me-2"/>
                                <span>Feedbacks</span>
                            </a>
                        </Link>
                    </li>
                 
                </ul>
            </div>
            <div className={"w-100 " + Styles.rightSide}>
                <Header/>
                <div className="container content-admin px-4">
                    {children}
                </div>
            </div>
            

        </div>
    )
}