import styles from '../../styles/Login.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import AuthLayout from '../../components/layout/auth';
import { useState } from 'react';
// import Alert from '../../components/tools/alert';
// import cookies from 'js-cookie';
import { useRouter } from 'next/router';
import axios from 'axios';


export default function login(){
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const router = useRouter()
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [state,setState] = useState({
        email: '',
        password: '',
        status: '',
        message: ''
    })

    const onChangeHandler = (e:any) => {
        return setState(
            {
                ...state,
                [e.target.name]: e.target.value
            }
        )

    }
    return(
        <AuthLayout>
            <div className="container border p-5">
                <h5 className='mt-5'>Welcome To Admin Login!</h5>
                <p>Login to continue. </p>
                <form>
                    <div className="form-floating mb-3">
                        <input type="email" className="form-control" id="email" name='email' placeholder="name@tokocrypto.com" onChange={onChangeHandler}/>
                        <label htmlFor="floatingInput">Email address</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input type="password" className="form-control" id="password" name='password' placeholder="Password" onChange={onChangeHandler}/>
                        <label htmlFor="floatingPassword">Password</label>
                    </div>
                    

                    <button type="submit" className="btn btn-success w-100 mb-2">Login</button>
                    <Link href="forgotPassword">
                        <a role={'button'} type="submit" className="btn btn-outline-dark w-100">Forgot Password</a>
                    </Link>
                </form>
            </div>
        </AuthLayout>
    )
}


