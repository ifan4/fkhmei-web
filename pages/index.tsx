import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/layout'
import Navbar from '../components/navbar'
import styles from '../styles/Home.module.css'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import Router from 'next/router'
import { request } from '../utils/axios-utils'
import { useState } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { Input, TextArea } from '../components/tools/input'
import Button from '../components/tools/button'
import ToastContainer from '../components/tools/toastContainer'
import { toast } from 'react-toastify'

const Home: NextPage = () => {

  const {
    register,
    handleSubmit,
    formState: {errors,isSubmitting},
    reset,
  } = useForm()

  const [feedback, setFeedback] = useState({
    email: '',
    feedback: ''
  })

  const sendFeedback = async()=> {
    try {
      
    } catch (error) {
      
    }
  }

  const SubmitHandler:SubmitHandler<any> = async (data)=> {
    
    try {
      // Send feedback
      const res = await request({
        url: '/feedback/create',
        method: 'POST',
        data: {
          email: data.email,
          feedback: data.feedback
        }
      })
      toast.success("Berhasil mengirim feedback, terimakasih!")
      reset()
    } catch (error) {
      toast.error("Ada kesalahan..")
    }
  }




  return (
    <Layout solidColor={false}>
        <ToastContainer/>
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
              <button 
              className='btn btn-outline-light'
              onClick={()=> Router.push('berita')}
              >
                BERITA
              </button>
              <hr className='vr py-4 border border-1 opacity-100 rounded-pill mx-3'/>
              <a className='btn btn-outline-light' href="https://instagram.com/store.fkhmei7?igshid=YmMyMTA2M2Y=" target="_blank" rel="noopener noreferrer">
                SHOP
              </a>
            </div>
            <div className="d-flex align-items-center justify-content-center">
              <a href="#" className='btn p-0'>
                <a href="https://instagram.com/fkhmeiwil7?igshid=YmMyMTA2M2Y=" target={'_blank'} className='btn p-0'></a>
                <img 
                src="https://www.freepnglogos.com/uploads/instagram-logo-png-transparent-background-hd-3.png" 
                alt="" 
                height={'40px'}
                className=""
                />
              </a>
              <a href="#" className='btn p-0 mx-3'>
                <a href="https://liff.line.me/1645278921-kWRPP32q/?accountId=jga4294g" target={'_blank'} className='btn p-0 mx-3'></a>
                <img 
                src="https://www.freepnglogos.com/uploads/line-messenger-logo-2.png" 
                alt="" 
                height={'40px'}
                />
              </a>
              <a href="#" className='btn p-0'>
              <a href="https://youtube.com/channel/UCVapmaJ1gxLvAgzA6QwyFMg" target={'_blank'} className='btn p-0 mx-3'></a>
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
                <a href="#" target={'_blank'}>
                  <Image src={'/fkhmei-teknologi.jpg'} width={250} height={250} loading="lazy"></Image>
                </a>
              </div>
            </div>
            <div className="row justify-content-evenly">
              <div className="col-5">
                  <h2 className='mb-2 mb-md-4'>LAST</h2>
                  <a href="https://www.instagram.com/p/CgGvQ3DJB6y/?igshid=YmMyMTA2M2Y=" target={'_blank'}>
                    <Image src={'/SEMNAS.jpeg'} width={150} height={150} loading="lazy"></Image>
                  </a>
              </div>
              <div className="col-5">
                  <h2 className='mb-2 mb-md-4'>COMING SOON</h2>
                  <a href="#" target={'_blank'}>
                    <Image src={'/fkhmei-teknologi.jpg'} width={150} height={150} loading="lazy"></Image>
                  </a>
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
            <form className='row g-3 justify-content-center' onSubmit={handleSubmit(SubmitHandler)}>
              <div className="col-md-4">
                <Input
                label_name={'Nama'}
                register = {
                  {...register('name', {
                    required: 'Nama tidak boleh kosong'
                  })}
                }
                errors = { errors.name }
                />
              </div>
              <div className="col-md-4">
                <Input
                type ={ 'email' }
                label_name={'Email'}
                register = {
                  {...register('email', {
                    required: 'Email tidak boleh kosong'
                  })}
                }
                errors = { errors.email }
                />
              </div>
              <div className="col-md-8">
                <TextArea
                label_name = {'Feedback'}
                register = {
                  {...register('feedback', {
                    required: 'Isi feedback tidak boleh kosong',
                    maxLength: {
                      value: 255,
                      message: 'Maksimal feedback 255 huruf'
                    }
                  })}
                }
                errors = { errors.feedback }
                />
              </div>
              <div className="col-md-8">
                <Button 
                name='Kirim'
                width={100}
                bgColor ={'black'}
                textColor = {'white'}
                isLoading = {isSubmitting}
                />
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
