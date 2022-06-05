/* eslint-disable @next/next/no-img-element */
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/layout'
import Navbar from '../components/navbar'
import styles from '../styles/Home.module.css'
import { LazyLoadImage } from 'react-lazy-load-image-component';

const Home: NextPage = () => {
  return (
    <Layout solidColor={false}>
        <div className={styles.jumbotron}>
          {/* <MyImage 
          image={
            <Image src={'/halaman-utama-gambar-1.png'} layout="fill" objectFit="cover" quality={100}/>
          }
          /> */}
          <Image src={'/halaman-utama-gambar-1.png'} className="bg-secondary" layout="fill" objectFit="cover" quality={100} loading={'lazy'}/>
          <div className="container text-white text-center position-absolute top-50 start-50 translate-middle mt-4">
            <h3 className={styles.alice}>FKHMEI WILAYAH VII</h3>
            <p className={`py-0 fs-5 ${styles.raleway}`} style={{fontWeight:'100'}}>Forum Komunikasi Himpunan Mahasiswa Elektro Indonesia</p>
            <h5 className={styles.raleway} style={{fontWeight:'400'}}>#Jabar ngahiji, jabar kahiji</h5>

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
          <Image src={'/background-kertas.jpg'} layout="fill" objectFit="cover" quality={100} loading={'lazy'}></Image>
          <div  className="container text-white text-center position-absolute top-50 start-50 translate-middle">
            <h2 className='mb-3 mb-md5 fw-bold'>PROFIL SINGKAT</h2>
            <p className='px-md-5 py-0'>FKHMEI (Forum Komunikasi Himpunan Mahasiswa Elektro Indonesia) adalah organisasi seprofesi di bawah naungan dirjen Dikti. Wilayah 7 merupakan regional Jawa barat yang menjadi domisili FKHMEI Wilayah 7 berada. Dengan jargon &quot;Jabar ngahiji, Jabar Kahiji&quot; menjadi citra serta acuan dalam setiap gerakan wilayah 7. #Jabar ngahiji, Jabar Kahiji</p>
            <Image src={'/Koorwil.png'} width={300} height={300} className={styles.koorwil}></Image>
            <h4>AZI RAMA TIARA</h4>
            <p className='fw-lighter'>Koordinator Wilayah</p>
          </div>

          <div className={`${styles.watermark} text-white position-absolute bottom-0 end-0 p-3 text-end`}>
            <h5>FKHMEI WILAYAH VII</h5>
            <h6>#Jabar ngahiji, jabar kahiji</h6>
          </div>
        </div>

        <div className={styles.onGoing}>
          <Image src={'/background-kertas.jpg'} layout="fill" objectFit="cover" quality={100} loading="lazy"></Image>
          <div  className="container text-white text-center position-absolute top-50 start-50 translate-middle">
            <div className="row justify-content-center mb-5">
              <div className="col-6">
                <h2 className='mb-2 mb-md-4'>ON GOING</h2>
                <Image src={'/fkhmei-teknologi.jpg'} width={250} height={250} loading="lazy"></Image>
              </div>
            </div>
            <div className="row justify-content-evenly">
              <div className="col-5">
                  <h2 className='mb-2 mb-md-4'>LAST</h2>
                  <Image src={'/fkhmei-teknologi.jpg'} width={150} height={150} loading="lazy"></Image>
              </div>
              <div className="col-5">
                  <h2 className='mb-2 mb-md-4'>COMING SOON</h2>
                  <Image src={'/fkhmei-teknologi.jpg'} width={150} height={150} loading="lazy"></Image>
              </div>
            </div>
            
          </div>

          <div className={`${styles.watermark} text-white position-absolute bottom-0 end-0 p-3 text-end`}>
            <h5>FKHMEI WILAYAH VII</h5>
            <h6>#Jabar ngahiji, jabar kahiji</h6>
          </div>
        </div>

        <div className={styles.aspirasi}>
          <Image src={'/background-kertas.jpg'} layout="fill" objectFit="cover" quality={100} loading="lazy"></Image>
          <div  className="container text-white position-absolute top-50 start-50 translate-middle">
            <h2 className='mb-5 text-center fw-bold'>ASPIRASI</h2>
            <form action="" className='row g-3 justify-content-center'>
              <div className='col-md-4'>
                <label htmlFor="nama" className='form-label'>NAMA</label>
                <input type="text" className='form-control w-100' id='nama'/>
              </div>
              <div className='col-md-4'>
                <label htmlFor="email" className='form-label'>EMAIL</label>
                <input type="text" className='form-control w-100' id='email'/>
              </div>
              <div className="col-md-8">
                <label htmlFor="email" className='form-label'>PESAN</label>
                <textarea name="pesan" className='form-control' id="email" cols={30} rows={10}></textarea>
                <button type='submit' className='btn btn-secondary mt-4 w-100'>Submit</button>
              </div>
            </form>
          </div>

          <div className={`${styles.watermark} text-white position-absolute bottom-0 end-0 p-3 text-end`}>
            <h5>FKHMEI WILAYAH VII</h5>
            <h6>#Jabar ngahiji, jabar kahiji</h6>
          </div>
        </div>
    </Layout>
  )
}


export default Home
