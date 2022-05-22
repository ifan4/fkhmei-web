import Layout from "../../components/layout";
import Image from "next/image";

export default function sejarah(){
    return(
        <Layout solidColor={true}>
            <div className="container py-5 mt-5 text-center">
                <h1 className="fs-3 my-3">Sejarah FKHMEI</h1>
                <Image src={'/logo-fkhmei-wilayah-jabar.png'} width={'130px'} height={'147px'}/>
                <p className="mt-3">Forum Komunikasi Himpunan Mahasiswa Elektro Indonesia (FKHMEI) adalah salah satu organisasi mahasiswa se-profesi yang berdiri pada tahun 1990 dan menjadi salah satu anggota IOMS Ikatan Organisasi Mahasiswa Se-Profesi) di bawah naungan Direktorat Jenderal Pendidikan Tinggi Kementerian Pendidikan yang keberadaannya secara legal formal diakui oleh instansi tersebut dengan dikeluarkannya SK Dirjen DIKTI Nomor : 04/DIKTI/KEP/1991. Pertemuan di Universitas Indonesia pada tahun 1987. Kemudian dilanjutkan dengan pertemuan di Institut Teknologi Bandung pada 1988. Pada 5 November 1988 di Institut Teknologi 10 November Surabaya ditandailah persetujuan berkaitan dengan pembentukan wadah FKHMEI.
                </p>
                <p>
                Pembentukan FKHMEI berawal dari antara lain : Balai Sidang Senayan Jakarta pada Maret 1988Universitas Brawijaya Malang pada Maret 1989 dan diteruskan di Sekolah Tinggi Teknologi A. Yani Cimahi September 1989 Sebagai tindaklanjut dari hasil rapat dan diskusi serta dalam rangka membangun infrastruktur organisasi, maka dibentuklah sebuah kepengurusan FKHMEI yang pertama pada Musyawarah Nasional I FKHMEI di Universitas Udayana Bali pada tahun 1990. Maka 4 september 1990 DITETAPKAN menjadi hari lahir FKHMEI. Sebagai organisasi yang senantiasa eksis dalam menjalankan visi dan misi organisasi, FKHMEI terus berkembang mengikuti dinamika kehidupan organisasi kemahasiswaan.
                </p>
            </div>
        </Layout>
    )
}