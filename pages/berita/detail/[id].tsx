import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Layout from '../../../components/layout'
import Navbar from '../../../components/navbar'
// import styles from '../../styles/Home.module.css'
import Styles from '../../../styles/berita.module.scss'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { useEffect, useState } from 'react'
import { request } from '../../../utils/axios-utils'
import axios from 'axios'
import Pagination from '../../../components/tools/pagination'
import { useRouter } from 'next/router'
import Link from 'next/link'

const Home: NextPage = () => {
  const [data, setData] = useState({
      title: '',
      content: '',
      date: '',
      image: '',
      creator: ''
  })
  const [currentData,setCurrentData] = useState([])

  const router = useRouter()
  const { id } = router.query

  useEffect(()=> {
    if (router.isReady){
        getData()
    }
  },[router.isReady])

  const getData = async ()=> {
    try {
      const response = await request({
          url: `/news/edit/${id}`
      })
      console.log('response');
      setData({
          ...data,
          title: response.data.title,
          content: response.data.content_news,
          date: response.data.time,
          image: response.data.image,
          creator: response.data.creator
      })
      console.log(response);
      
      
    } catch (error) {
      console.log(error);
      
    }
  }

  return (
    <Layout solidColor={true}>
        <div 
        className="container py-5"
        style={{
            minHeight: '67vh',
            marginTop: '100px'
        }}>
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                        <Link href={'../'}>
                            <a href="#" className='link-secondary'>Berita</a>
                        </Link>
                        
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">Detail</li>
                </ol>
            </nav>
            <h4 className='m-0 mb-2 p-0'>{data.title}</h4>
            <figcaption className='text-secondary mb-md-5 mb-3' style={{fontSize: '12px'}}>
            Created by: {data.creator} | {data.date}
            </figcaption>

            <div 
            className={Styles.imageContainer}
            >
                <Image src={'https://fkhmei-web.ifandri.com/imageNews/' + data.image}  layout='fill'
    objectFit='contain' loading={'lazy'}
                className={Styles.image}
                />

            </div>


            <p dangerouslySetInnerHTML={{__html: data.content}} className={'mt-3'}></p>

        </div>
        
    </Layout>
  )
}




export default Home
