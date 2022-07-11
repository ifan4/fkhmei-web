import { useState } from "react";
import { BiHide, BiShow } from "react-icons/bi";

export default function showPassword({fungsi}:any){
    const [isHovering, setIsHovering] = useState(false)
    const [isClicked, setIsClicked] = useState(false)
    const handleMouseEnter = () => {
        setIsHovering(true);
      };
    
      const handleMouseLeave = () => {
        setIsHovering(false);
      };
    const clickHandler = ()=> {
        fungsi()
        setIsClicked(!isClicked)
    }
    return(
        <button 
        className='position-absolute top-50 end-0 translate-middle-y me-1' 
        type="button" 
        style={{
            backgroundColor: 'Transparent',
            border: 0,
            color: isHovering ? '#1AA64A' : '',
          }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={clickHandler}
        >
            {
                !isClicked 
                ?   <BiShow/>
                :   <BiHide/>
            }
            
        </button>
    )
}