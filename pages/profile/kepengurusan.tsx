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
    const getAllData = async () => {
        try {
            let [exOfficio, advokom, ristek, sosmas, kewirus, psdm] = await Promise.all([
                fetch('/api/anggota/exOfficio'),
                fetch('/api/anggota/advokom'),
                fetch('/api/anggota/ristek'),
                fetch('/api/anggota/sosmas'),
                fetch('/api/anggota/kewirus'),
                fetch('/api/anggota/psdm')
            ])
            
            SetState({
                exOfficio: await exOfficio.json(),
                advokom: await advokom.json(),
                ristek: await ristek.json(),
                sosmas: await sosmas.json(),
                kewirus: await kewirus.json(),
                psdm: await psdm.json(),
            })
            
            
            
            
        } catch (error) {
            console.log('error bro');
        }
    }


    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(()=> {
       getAllData()
    },[])

    return(
        <Layout solidColor={true}>
            <div className="container py-5 my-5">
                <h1 className="my-3">Kepengurusan</h1>
                <div className="row py-2">
                    <div className="col-md-2">
                        <h3>Ex-Officio</h3>
                    </div>
                    <div className="col-md-10 d-flex">
                        <div className="me-md-3">:</div>
                        <Table head={['Nama', 'Jabatan', 'Himpunan']} content={state.exOfficio}/>
                    </div>
                </div>

                <div className="row py-2">
                    <div className="col-md-2">
                        <h3>Advokom</h3>
                    </div>
                    <div className="col-md-10 d-flex">
                        <div className="me-md-3">:</div>
                        <Table head={['Nama', 'Jabatan', 'Himpunan']} content={state.advokom}/>
                    </div>
                </div>

                <div className="row py-2">
                    <div className="col-md-2">
                        <h3>Ristek</h3>
                    </div>
                    <div className="col-md-10 d-flex">
                        <div className="me-md-3">:</div>
                        <Table head={['Nama', 'Jabatan', 'Himpunan']} content={state.ristek}/>
                    </div>
                </div>

                <div className="row py-2">
                    <div className="col-md-2">
                        <h3>Sosmas</h3>
                    </div>
                    <div className="col-md-10 d-flex">
                        <div className="me-md-3">:</div>
                        <Table head={['Nama', 'Jabatan', 'Himpunan']} content={state.sosmas}/>
                    </div>
                </div>

                <div className="row py-2">
                    <div className="col-md-2">
                        <h3>Kewirus</h3>
                    </div>
                    <div className="col-md-10 d-flex">
                        <div className="me-md-3">:</div>
                        <Table head={['Nama', 'Jabatan', 'Himpunan']} content={state.kewirus}/>
                    </div>
                </div>

                <div className="row py-2">
                    <div className="col-md-2">
                        <h3>PSDM</h3>
                    </div>
                    <div className="col-md-10 d-flex">
                        <div className="me-md-3">:</div>
                        <Table head={['Nama', 'Jabatan', 'Himpunan']} content={state.psdm}/>
                    </div>
                </div>
            </div>
        </Layout>
    )
}