import Link from 'next/link'
import LayoutAdmin from '../../../components/layout/admin'
import Styles from '../../../styles/berita.module.scss'
import { BsNewspaper } from'react-icons/bs'
import { MdAssignmentReturn } from'react-icons/md'
import {VscFeedback} from 'react-icons/vsc'
import Image from 'next/image'
import { textTrunc } from '../../../helper'
import Button from '../../../components/tools/button'
import { useEffect, useState } from 'react'
import { request } from '../../../utils/axios-utils'
import Pagination from '../../../components/tools/pagination'
import ToastContainer from '../../../components/tools/toastContainer'
import { toast } from 'react-toastify'
import { useRouter } from 'next/router'

export default function admin () {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const router = useRouter()
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [data, setData] = useState([])
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [currentData,setCurrentData] = useState([])
    

    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(()=> {
        getData()
      },[])
    
      const getData = async ()=> {
        try {
          const response = await request({url: '/news'})
          console.log('response');
          setData(response.data[0])
          console.log(response);
          
          
        } catch (error) {
          console.log(error);
          
        }
      }

      const deleteHandler = async (id:any)=> {
          if (!confirm('Are you sure want to delete this data?')) return 0
          try {
              const res = await request({
                  url: `news/delete/${id}`,
                  method: 'DELETE'
              })
              toast.success('News deleted successfully!')
              const filteredData = data.filter((item:any)=> {
                  return item.id_news !== id && item
              })
              setData(filteredData)
              
          } catch (error) {
              console.log(error);
              
            alert('Something wrong..')
          }
      }




    return (
        <LayoutAdmin>
            <div className="containerz py-3">
                <ToastContainer/>

                <div className="d-flex justify-content-between">
                    <h4>Berita</h4>
                    <Button
                    name='Add News'
                    bgColor='#0091BE'
                    textColor='white'
                    onClick={ ()=> {
                        router.push('news/add')
                    }}
                    />
                </div>
                <div 
                className="row g-5 py-3"
                style={{
                    minHeight: '70vh'
                }}
                >
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
                        deleteHandler={deleteHandler}
                        />
                    )
                    }
                </div>
                <Pagination
                data={data}
                setCurrentData = {setCurrentData}
                itemsPerPage = {6}
                />
            </div>
        </LayoutAdmin>
    )
}

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
            <div className="bottom-0 start-50 translate-middle-x position-absolute d-flex justify-content-between w-100 flex-wrap px-5" style={{marginBottom:'50px'}}>
                <Link href={`/berita/detail/${id}`}>
                    <Button
                    name='See details'
                    bgColor='#088A8C'
                    textColor='white'
                    />
                </Link>
                <Button 
                name={'Delete'}
                bgColor={'red'}
                textColor={'white'}  
                onClick={()=>deleteHandler(id)}          
                />
            </div>
            <div className="card-footer text-muted position-absolute bottom-0 end-0 start-0">
              {waktu}
            </div>
          </div>
        </div>
      </div>
    )
  }