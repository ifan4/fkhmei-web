/* eslint-disable @next/next/no-img-element */
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/navbar'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.main}>
        <Navbar/>
        <div className={styles.jumbotron}>
          <div className="container text-white text-center position-absolute top-50 start-50 translate-middle mt-4">
            <h3 className='fw-bold'>FKHMEI WILAYAH VII</h3>
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

        <div className={styles.profilSingkat}>
          <div  className="container text-white text-center position-absolute top-50 start-50 translate-middle">
            <h2 className='mb-5 fw-bold'>PROFIL SINGKAT</h2>
            <div className="d-inline-block bg-light" style={{width:'150px',height:'150px'}}/>
          </div>

          <div className='text-white position-absolute bottom-0 end-0 p-3 text-end'>
            <h5 style={{fontSize:'12px'}}>FKHMEI WILAYAH VII</h5>
            <h6 style={{fontSize: '12px'}}>#Jabar ngahiji, jabar kahiji</h6>
          </div>
        </div>

        <div className={styles.onGoing}>
          <div  className="container text-white text-center position-absolute top-50 start-50 translate-middle">
            <div className="row justify-content-center mb-5">
              <div className="col-6">
                <h2 className='mb-2'>ON GOING</h2>
                <div className="d-inline-block bg-light" style={{width:'190px',height:'190px'}}/>
              </div>
            </div>
            <div className="row justify-content-evenly">
              <div className="col-5">
                  <h2 className='mb-2'>LAST</h2>
                  <div className="d-inline-block bg-light" style={{width:'150px',height:'150px'}}/>
              </div>
              <div className="col-5">
                  <h2 className='mb-2'>COMING SOON</h2>
                  <div className="d-inline-block bg-light" style={{width:'150px',height:'150px'}}/>
              </div>
            </div>
            
          </div>

          <div className='text-white position-absolute bottom-0 end-0 p-3 text-end'>
            <h5 style={{fontSize:'12px'}}>FKHMEI WILAYAH VII</h5>
            <h6 style={{fontSize: '12px'}}>#Jabar ngahiji, jabar kahiji</h6>
          </div>
        </div>

        <div className={styles.aspirasi}>
          <div  className="container text-white position-absolute top-50 start-50 translate-middle">
            <h2 className='mb-5 text-center fw-bold'>ASPIRASI</h2>
            <form action="" className='row g-3 justify-content-center'>
              <div className='col-md-4'>
                <label htmlFor="nama" className='form-label'>NAMA</label>
                <input type="text" className='form-text w-100' id='nama'/>
              </div>
              <div className='col-md-4'>
                <label htmlFor="email" className='form-label'>EMAIL</label>
                <input type="text" className='form-text w-100' id='email'/>
              </div>
              <div className="col-md-8">
                <label htmlFor="email" className='form-label'>PESAN</label>
                <textarea name="pesan" className='form-control' id="email" cols={30} rows={10}></textarea>
              </div>
            </form>
          </div>

          <div className='text-white position-absolute bottom-0 end-0 p-3 text-end'>
            <h5 style={{fontSize:'12px'}}>FKHMEI WILAYAH VII</h5>
            <h6 style={{fontSize: '12px'}}>#Jabar ngahiji, jabar kahiji</h6>
          </div>
        </div>

        <div className={styles.footer}>
          <div className="container py-5 text-white">
            <div className="d-flex align-items-center mb-4">
              <img src="phone-call.png" alt="" className='me-3' width={70}/>
              <div>
                <p>Jl. A.H. Nasution No.105, Bandung, Jawa Barat 40614</p>
                <p>+62 899-3734-770</p>
                <p>Line : @jga4294g</p>
              </div>
            </div>

            <div className="d-flex justify-content-between">
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
              <img src="logo-footer.png" alt="" width={60}/>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Home
