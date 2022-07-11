import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Layout from '../../components/layout'
import Navbar from '../../components/navbar'
import styles from '../../styles/Home.module.css'
import Styles from '../../styles/berita.module.scss'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { useEffect, useState } from 'react'
import { request } from '../../utils/axios-utils'
import axios from 'axios'
import Pagination from '../../components/tools/pagination'
import Link from 'next/link'
import { textTrunc } from '../../helper'
import Button from '../../components/tools/button'

const Home: NextPage = () => {
  const [data, setData] = useState([])
  const [currentData,setCurrentData] = useState([])

  useEffect(()=> {
    getData()
  },[])

  const getData = async ()=> {
    try {
      const response = await axios('https://fkhmei-web.ifandri.com/api/news')
      console.log('response');
      setData(response.data[0])
      console.log(response);
      
      
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
          <Image 
          src={'/halaman-utama-gambar-1.png'} 
          className="bg-secondary" 
          layout="fill" 
          alt='fkhmei'
          objectFit="cover" 
          quality={100} 
          loading={'lazy'}/>
          <div className={Styles.rectangle}></div>
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
                 id={item.id_news}
                 title = {item.title}
                 isi = {item.content_news}
                 imageUrl = {'https://fkhmei-web.ifandri.com/imageNews/'+item.image}
                 waktu = {item.time}
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
const CardBerita = ({id,title,isi,imageUrl,waktu,deleteHandler}:any) => {
  return (
      <div className="col-md-4">
      <div className="card" style={{height: '470px'}}>
        <div className={Styles.imageContainer}>
          <Image src={imageUrl} className={Styles.image} alt={title} layout="fill" loading={'lazy'}/>
        </div>
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text" dangerouslySetInnerHTML={{__html: textTrunc(isi,80)}}>
        </p>
          
              <Link href={`/berita/detail/${id}`}>
              <Button
                  name='Lihat Berita'
                  bgColor='black'
                  textColor='white'
                  IsActive = {true}
                  />
              </Link>
          
          <div className="card-footer text-muted position-absolute bottom-0 end-0 start-0">
            {waktu}
          </div>
        </div>
      </div>
    </div>
  )
}


export default Home
