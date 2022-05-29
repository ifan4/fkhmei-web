import Layout from "../../components/layout";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function organisasi(){
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [himpunans, setHimpunans] = useState([])

    const getHimpunans = async () => {
        const res = await fetch('/api/himpunans')
        
        const data = await res.json();  
        setHimpunans(data)
        console.log(himpunans);
        
        
        
    }

    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(()=> {
        getHimpunans()
        
    },[])

    const Table = (props:any) => {
        return(
            <tr>
                <th scope="row" className="text-center px-0">{props.id}</th>
                <td>{props.name}</td>
            </tr>
        )
    }

    return(
        <Layout solidColor={true}>
            <div className="container text-center mt-5 pt-5 pb-2 mb-2">
                <h3 className="py-3">Profile FKHMEI Wilayah VII</h3>
                <Image src={'/logo-fkhmei-wilayah-jabar.png'} width={'130px'} height={'147px'}/>
                <p className="mt-3">FKHMEI (Forum Komunikasi Himpunan Mahasiswa Elektro Indonesia) adalah organisasi seprofesi di bawah naungan dirjen Dikti. Wilayah 7 merupakan regional Jawa barat yang menjadi domisili FKHMEI WIL 7 berada. Dengan jargon &quot;Jabar ngahiji, Jabar Kahiji&quot; menjadi citra serta acuan dalam setiap gerakan wilayah 7.</p>
            </div>

            <div className="container text-center my-2 py-2">
                <h3 className="py-3">Visi dan Misi FKHMEI Wilayah VII</h3>
                <h5 className="fw-bold">VISI</h5>
                <p className="mt-3">Merevitalisasi Peran Relasi FKHMEI Serta Eksistensi di Masyarakat Melalui Kegiatan Yang Bernilai Esensial.</p>

                <h5 className="fw-bold">Misi</h5>
                <p className="mt-3">Melakukan Audiensi Dengan Instansi Pemerintahan Atau yang Berkaitan Sebagai Implementasi Ruang Relasi. Terus Berkomunikasi dan Menambah Silaturahmi Dengan HME yang Ada di Jawa Barat. Melaksanakan Peran Fungsi Mahasiswa.
                </p>
                <p>Membuat WEB FKHMEI Wilayah VII Sebagai Propaganda Demi Terciptanya Ruang Eksistensi. Kolaborasi Dengan Berbagai Organisasi Agar Terciptaya Rasa Saling Membesarkan Dalam Organisasi.</p>
            </div>
            <div className="container my-2 py-2">
                <h3 className="py-3">Daftar Anggota FKHMEI Wilayah VII Jawa Barat</h3>
                <p>FKHMEI Wilayah VII Jawa Barat sampai saat ini terdiri dari 32 perguruan tinggi. Berikut daftar anggota FKHMEI Wilayah VII Jawa Barat :</p>
                
                <table className="table table-bordered table-light table-hover">
                    <thead>
                        <tr>
                            <th scope="col" className="text-center px-0">NO</th>
                            <th scope="col">Himpunan</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            himpunans.map((data:any)=> {
                                return(
                                    <Table 
                                    key={data.id}
                                    id={data.id}
                                    name={data.name}
                                    />
                                )
                            })
                        }
                        
                    </tbody>
                </table>
            </div>

            
            
        </Layout>
    )
}