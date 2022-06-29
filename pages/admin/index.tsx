import Link from 'next/link'
import LayoutAdmin from '../../components/layout/admin'
import Styles from '../../styles/dashboard.module.scss'
import { BsNewspaper } from'react-icons/bs'
import { MdAssignmentReturn } from'react-icons/md'
import {VscFeedback} from 'react-icons/vsc'

export default function admin () {
    return (
        <LayoutAdmin>
            <div className="containerz">
                <div className="row g-3 mt-3">
                    <div className="col-md-6">
                        <div className={Styles.logoCard}>
                            <span>
                                <BsNewspaper/>
                            </span>
                            <h5 className="mb-4 mt-1">Total Berita: 6</h5>

                            <Link href={'/employee/penggunaanAsset/proposeAsset'}>
                                <button className="btn">See News</button>
                            </Link>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className={Styles.logoCard}>
                            <span>
                                <VscFeedback/>
                            </span>
                            <h5 className="mb-4 mt-1">Total Feedback: 3</h5>

                            <Link href={'/employee/penggunaanAsset/myAsset'}>
                                <button className="btn">See Feedbacks</button>
                            </Link>
                        </div>
                    </div>
                    
                </div>
            </div>
        </LayoutAdmin>
    )
}