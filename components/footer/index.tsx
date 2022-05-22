
export default function footer(props:any){

    return(
        <div style={{backgroundColor: '#424851'}}>
          <div className="container py-5 text-white">
            <div className="d-flex align-items-center mb-4">
              <img src="/phone-call.png" alt="" className='me-3' width={70}/>
              <div>
                <p>Jl. A.H. Nasution No.105, Bandung, Jawa Barat 40614</p>
                <p>+62 899-3734-770</p>
                <p>Line : @jga4294g</p>
              </div>
            </div>

            <div className="d-flex justify-content-between">
              <div className="d-flex align-items-center justify-content-center">
                <a href="#" className='btn p-0'>
                  <img 
                  src="https://www.freepnglogos.com/uploads/instagram-logo-png-transparent-background-hd-3.png" 
                  alt="" 
                  height={'40px'}
                  className=""
                  />
                </a>
                <a href="#" className='btn p-0 mx-3'>
                  <img 
                  src="https://www.freepnglogos.com/uploads/line-messenger-logo-2.png" 
                  alt="" 
                  height={'40px'}
                  />
                </a>
                <a href="#" className='btn p-0'>
                  <img 
                  src="https://www.freepnglogos.com/uploads/youtube-play-red-logo-png-transparent-background-6.png" 
                  alt="" 
                  height={'40px'}/>
                </a>
              </div>
              <img src="/logo-fkhmei-wilayah-jabar.png" alt="" width={60}/>
            </div>
          </div>
        </div>
    )
}