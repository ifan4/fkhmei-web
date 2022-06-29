import { ReactNode, useState } from "react";
import Image from 'next/image';
import styles from '../../../styles/Login.module.scss';
import { useRouter } from "next/router";

interface LayoutProps {
    children: ReactNode
}
export default function admin(props: LayoutProps){
    const {children} = props;
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const router = useRouter();

    return(
        <div className='container-fluid'>
            <div className="row">
                <div className={`col-md-5 d-none d-md-flex justify-content-center align-items-center ${styles.colLeft}`}>
                    <div className='text-white m-5'>
                        <h1>FKHMEI WIL VII</h1>
                    </div>
                </div>
                <div className={`col-md-7 col-12 d-flex align-items-center justify-content-center ${styles.colRight}`}>
                    <div>
                        {children}
                    </div>
                </div>
            </div>
        </div>
    )
}