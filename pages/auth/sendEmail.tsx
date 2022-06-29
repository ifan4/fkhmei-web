import styles from '../../styles/Login.module.scss';
import Image from 'next/image';
import AuthLayout from '../../components/layout/auth';
export default function sendEmail(){
    return(
        <AuthLayout>
            <h5 className='mt-5'>Check your email</h5>
            <p>You'll receive a link to reset your account password.</p>
            <form>
                <button type="submit" className="btn btn-success w-100 my-4">Resend Email</button>
            </form>
        </AuthLayout>
    )
}