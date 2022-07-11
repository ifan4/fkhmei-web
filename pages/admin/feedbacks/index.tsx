import Layout from '../../../components/layout/admin/index'
import { useEffect, useState } from 'react'
import Pagination from '../../../components/tools/pagination'
import Modal from '../../../components/tools/modal/touchable'
import Styles from '../../../styles/feedbacks.module.scss'
import { request } from '../../../utils/axios-utils'
import { createContext, useContext } from "react";
import { textTrunc } from '../../../helper'
import Button from '../../../components/tools/button'
import { toast } from 'react-toastify'
import ToastContainer from '../../../components/tools/toastContainer'

type modalType = {
    openModal: boolean;
    setOpenModal: (val: boolean)=> void;
    setFeedbackModal: (val: {
        id: '',
        name: '',
        waktu: '',
        paragraph: ''
    })=> void;
}


const configModal = createContext<modalType | undefined>(undefined);

export default function feedbacks(){
    const [feedbacks, setFeedbacks] = useState([])
    const [currentFeedbacks, setCurrentFeedbacks] = useState([])
    const [feedbackModal, setFeedbackModal] = useState({
        id: '',
        name: '',
        waktu: '',
        paragraph: ''
    })
    const [openModal, setOpenModal] = useState(false)

    useEffect(()=> {
        getFeedbacks()
    },[])

    const getFeedbacks = async ()=> {
        try {
            const response = await request({url: '/api/feedback'})
            setFeedbacks(response.data[0])
        } catch (error) {
            console.log(error);
        }
    }

    const deleteFeedback = async (id:any)=> {
        if (! confirm("Are you sure want to delet this feedback?")) return 0

        try {
            const res = await request({
                url: `/api/feedback/delete/${id}`,
                method: 'DELETE'
            })
            const tempFeedbacks = feedbacks.filter((item:any)=> {
                return item.id_feedback !== id && item
            })
            setFeedbacks(tempFeedbacks)
            toast.success("Feedback deleted successfully!")
            setOpenModal(false)
        } catch (error) {
            console.log(error);
            toast.error('Something wrong...')
        }
    }

    return (
        <configModal.Provider value={{openModal,setOpenModal,setFeedbackModal}}>
            <Layout>
                <ToastContainer/>
                <h4 className={Styles.title}>Feedbacks Page</h4>
                <div 
                className="row g-4" 
                style={{
                    minHeight: '70vh'
                }}
                >
                {
                    currentFeedbacks.map((item:any,index:any)=> {
                    return(
                        <Card 
                        key={index}
                        id = {item.id_feedback}
                        name={item.email}
                        waktu={item.waktu}
                        paragraph={item.feedback}
                        />
                    )})
                }
                </div>

                <Pagination
                data={feedbacks}
                setCurrentData={setCurrentFeedbacks}
                itemsPerPage={9}
                />

                <Modal 
                    open={openModal}
                    setOpen={() => setOpenModal(!openModal)}
                    sx={{
                        position: 'absolute' as 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)'
                    }}             
                >
                    <div className={Styles.rectangleModal}>
                        <h4 className={Styles.name}>{feedbackModal.name}</h4>
                        <h6 className={Styles.email}>{feedbackModal.waktu}</h6>
                        <p className={Styles.paragraph}>{feedbackModal.paragraph}</p>
                        <Button
                        name='Delete'
                        bgColor='red'
                        textColor='white'
                        IsActive={true}
                        onClick = {
                            ()=> deleteFeedback(feedbackModal.id)
                        }
                        />
                    </div>
                </Modal>
            </Layout>
        </configModal.Provider>
    )
}

const Card = ({id,name,waktu,paragraph}:any)=> {
    const context  = useContext(configModal)
    
    return (
        <div className="col-md-4">
            <button className={Styles.button} 
            onClick={()=>{
                context?.setOpenModal(true)
                context?.setFeedbackModal({
                    id,
                    name,
                    waktu,
                    paragraph
                })
            }}>
                <div className={Styles.rectangleNormal}>
                    <h4 className={Styles.name}>{name}</h4>
                    <h6 className={Styles.email}>{waktu}</h6>
                    <p className={Styles.paragraph}>{textTrunc(paragraph,70)}</p>
                </div>
            </button>
        </div>
    )
}