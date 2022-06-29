/* eslint-disable @next/next/no-img-element */
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Layout from '../../components/layout'
import Navbar from '../../components/navbar'
import styles from '../../styles/Home.module.css'
import styles2 from '../../styles/berita.module.scss'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { useEffect, useState } from 'react'
import { request } from '../../utils/axios-utils'
import axios from 'axios'
import Pagination from '../../components/tools/pagination'

const Home: NextPage = () => {
  const [data, setData] = useState([])
  const [currentData,setCurrentData] = useState([])

  useEffect(()=> {
    getData()
  },[])

  const getData = async ()=> {
    try {
      const response = await axios('https://jsonplaceholder.typicode.com/photos?limit=10')
      setData(response.data)
      
    } catch (error) {
      console.log(error);
      
    }
  }

  return (
    <Layout solidColor={false}>
        <div className={styles.jumbotron}>
          {/* <MyImage 
          image={
            <Image src={'/halaman-utama-gambar-1.png'} layout="fill" objectFit="cover" quality={100}/>
          }
          /> */}
          <Image src={'/halaman-utama-gambar-1.png'} className="bg-secondary" layout="fill" objectFit="cover" quality={100} loading={'lazy'}/>
          <div className={styles2.rectangle}></div>
          <div className="container text-dark text-start position-absolute top-50 start-50 translate-middle mt-4">
            <h1 className='mb-md-5'>BERITA, ARTIKEL DAN JURNAL</h1>
            <h3 className={styles.alice}>FKHMEI WILAYAH VII</h3>
            <p className={`py-0 fs-5 ${styles.raleway}`} style={{fontWeight:'100'}}>Forum Komunikasi Himpunan Mahasiswa Elektro <br/> Indonesia</p>
            <h5 className={styles.raleway} style={{fontWeight:'400'}}>#Jabar ngahiji, jabar kahiji</h5>

            <div className="d-flex align-items-center mt-md-5 mt-2">
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

        <div className="container py-5">
          <h1 className='mb-md-4 mb-2'>Berita</h1>
          <div className="row g-5 py-3">
            {
              currentData.map(
                (item:any,i:any) =>
                 <CardBerita 
                 key={i}
                 title = {item.title}
                 isi = {'Lorem ipsum dolor sit content Lorem ipsum dolor sit content Lorem ipsum dolor sit content'}
                 imageUrl = {item.url}
                 waktu = {'10 June 2022'}
                 />
              )
            }
          </div>
          <Pagination
          data={data}
          setCurrentData = {setCurrentData}
          itemsPerPage = {9}
          />
        </div>

        
    </Layout>
  )
}

//Kindly dibungkus menggunakan classname row dulu brokuh
const CardBerita = ({title,isi,imageUrl,waktu}:any) => {
  return (
    <div className="col-md-4">
      <div className="card" style={{minHeight: '400px'}}>
        <Image src={'https://pbs.twimg.com/profile_images/1455185376876826625/s1AjSxph_400x400.jpg'} className="card-img-top" alt="..." width={130} height={130} layout='fixed' loading={'lazy'}/>
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{isi}</p>
          <a href="#" className="btn btn-secondary mb-2 bottom-0 position-absolute mb-5 pb-1">Lihat Berita</a>
          <div className="card-footer text-muted position-absolute bottom-0 end-0 start-0">
            {waktu}
          </div>
        </div>
      </div>
    </div>
  )
}


export default Home
