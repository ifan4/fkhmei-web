import styles from '../../styles/Login.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import AuthLayout from '../../components/layout/auth';
import { useState } from 'react';
// import Alert from '../../components/tools/alert';
// import cookies from 'js-cookie';
import { Router, useRouter } from 'next/router';
import axios from 'axios';
import { request } from '../../utils/axios-utils';
import Button from '../../components/tools/button';
import Cookies from 'js-cookie';


export default function login(){
    const router = useRouter()
    const [state,setState] = useState({
        email: '',
        password: '',
        status: '',
        message: ''
    })
    const [message,setMessage] = useState('')
    const [isLoading, setIsLoading] = useState(false)

    const onChangeHandler = (e:any) => {
        return setState(
            {
                ...state,
                [e.target.name]: e.target.value
            }
        )
    }

    const loginHandler = async (e:any)=> {
        setIsLoading(true)
        e.preventDefault()
        try {
            const res = await request({
                url: `/api/login`,
                method: 'POST',
                data: {
                    email: state.email,
                    password: state.password
                }
            })

            //Kondisi saat berhasil
            if (res.data.access_token){
                Cookies.set('accessToken', res.data.access_token.split('|')[1])
                return router.push('/admin')
            }
            setMessage('Password atau username salah!')
            
        } catch (error) {
            console.log('error');
            console.log(error);
            
        }

        setIsLoading(false)
    }

    return(
        <AuthLayout>
            <div className="container border p-5">
                <h5 className='mt-5'>Welcome To Admin Login!</h5>
                <p>Login to continue. </p>
                <form onSubmit={loginHandler}>
                    <div className="form-floating mb-3">
                        <input type="email" className="form-control" id="email" name='email' placeholder="name@tokocrypto.com" onChange={onChangeHandler}/>
                        <label htmlFor="floatingInput">Email address</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input type="password" className="form-control" id="password" name='password' placeholder="Password" onChange={onChangeHandler}/>
                        <label htmlFor="floatingPassword">Password</label>
                    </div>

                    {
                        message &&
                        <div className="alert alert-danger">
                            {message}
                        </div>
                    }
                    

                    <Button
                    name='Login'
                    width={100}
                    bgColor={'black'}
                    textColor={'white'}
                    isLoading={isLoading}
                    />
                </form>
            </div>
        </AuthLayout>
    )
}


