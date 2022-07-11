import axios from 'axios';
import Cookies from 'js-cookie'
import Router from 'next/router'


const client = axios.create( {baseURL: process.env.NEXT_PUBLIC_URL} )

export const request = ( {...options} ) => {
    // if (!Cookies.get('accessToken')) {
    //     refreshToken(Cookies.get('refreshToken'))
    // }
    
    // client.defaults.headers.common.Authorization = `Bearer ${Cookies.get('accessToken')}`


    return client(options)
}
