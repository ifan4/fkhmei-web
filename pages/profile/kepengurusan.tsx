import { useEffect, useState } from "react";
import Layout from "../../components/layout";
import Table from "../../components/tools/table";

export default function kepengurusan(){
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [state, SetState] = useState( {
        exOfficio: '',
        advokom: '',
        ristek: '',
        sosmas: '',
        kewirus: '',
        psdm: ''
    } )
    const getExOfficio = async () => {
        try {
            const res = await fetch('/api/anggota/exOfficio')
            .then(
                res => res.json()
            )
            .then(
                res => {
                    SetState({...state, exOfficio: res})
                }
            )
        } catch (error) {
            console.log(error);
        }
    }

    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(()=> {
        getExOfficio()
    },[])

    return(
        <Layout solidColor={true}>
            <div className="container py-5 my-5">
                <Table head={['Nama', 'Jabatan', 'Himpunan']} content={state.exOfficio}/>
            </div>
        </Layout>
    )
}