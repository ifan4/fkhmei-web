import Link from 'next/link'
import LayoutAdmin from '../../components/layout/admin'
import Styles from '../../styles/dashboard.module.scss'
import { BsNewspaper } from'react-icons/bs'
import { MdAssignmentReturn } from'react-icons/md'
import {VscFeedback} from 'react-icons/vsc'
import { request } from '../../utils/axios-utils'
import { useEffect, useState } from 'react'

export default function admin () {
    const [count, setCount] = useState({
        news: 0,
        feedback: 0
    })

    useEffect(()=> {
        getCountNewsAndFeedback()
    },[])



    const getCountNewsAndFeedback = async ()=> {
        try {
            const [news,feedbacks] = await Promise.all([
                request({url: '/api/news'}),
                request({url:'/api/feedback'})
            ])
            setCount({
                news: news.data[0].length,
                feedback: feedbacks.data[0].length
            })
            console.log(news);
            console.log(feedbacks);
            

            

        } catch (error) {
            
        }
    }
    

    return (
        <LayoutAdmin>
            <div className="containerz">
                <div className="row g-3 mt-3">
                    <div className="col-md-6">
                        <div className={Styles.logoCard}>
                            <span>
                                <BsNewspaper/>
                            </span>
                            <h5 className="mb-4 mt-1">Total Berita: {count.news}</h5>

                            <Link href={'/admin/news'}>
                                <button className="btn">See News</button>
                            </Link>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className={Styles.logoCard}>
                            <span>
                                <VscFeedback/>
                            </span>
                            <h5 className="mb-4 mt-1">Total Feedback: {count.feedback}</h5>

                            <Link href={'/admin/feedbacks'}>
                                <button className="btn">See Feedbacks</button>
                            </Link>
                        </div>
                    </div>
                    
                </div>
            </div>
        </LayoutAdmin>
    )
}