import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/navbar'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.main}>
        <div className={styles.jumbotron}>
        <Navbar/>
          <div className="container text-white text-center position-absolute top-50 start-50 translate-middle">
            <h3>FKHMEI WILAYAH VII</h3>
            <p className='py-0'>Forum Komunikasi Himpunan Mahasiswa Elektro Indonesia</p>
            <h5>#Jabar ngahiji, jabar kahiji</h5>

            <div className="d-flex align-items-center justify-content-center mt-5">
              <button className='btn btn-outline-light'>
                BERITA
              </button>
              <hr className='vr py-4 border border-1 opacity-100 rounded-pill mx-3'/>
              <button className='btn btn-outline-light'>
                SHOP
              </button>
            </div>
            <div className="d-flex align-items-center justify-content-center">
              <a href="#" className='btn p-0'>
                <img 
                src="https://www.freepnglogos.com/uploads/instagram-logo-png-transparent-background-hd-3.png" 
                alt="" 
                height={'40px'}
                className=""
                />
              </a>
              <a href="#" className='btn p-0 mx-3'>
                <img 
                src="https://www.freepnglogos.com/uploads/line-messenger-logo-2.png" 
                alt="" 
                height={'40px'}
                />
              </a>
              <a href="#" className='btn p-0'>
                <img 
                src="https://www.freepnglogos.com/uploads/youtube-play-red-logo-png-transparent-background-6.png" 
                alt="" 
                height={'40px'}/>
              </a>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Home
