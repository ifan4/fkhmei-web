import { ReactNode } from "react"

interface  btnProps{
    name:string,
    bgColor?: string,
    width?: number,
    textColor?: string,
    IsActive?:boolean,
    isLoading?: boolean,
    dropdownToggle?: boolean,
    type?: 'submit' | 'reset' | 'button',
    onClick?: () => void ,
    id?: string,
    children?: ReactNode
}

export default function button(props: btnProps){
    let {
        name, 
        bgColor, 
        width, 
        textColor='black',
        IsActive=false,
        isLoading=false,
        dropdownToggle=false,
        type='submit',
        onClick,
        id,
        children
    } = props
    const border = bgColor
    
    


    let temp:any = ''
    if (!IsActive){
        temp = bgColor
        bgColor = textColor
        textColor = temp
    }

    return(
        <button 
        id={id ? id : ''}
        className={`btn ${dropdownToggle && 'dropdown-toggle'}`}
        type={type}
        style={{
            backgroundColor: bgColor,
            borderRadius: '8px',
            color: textColor,
            width: `${width}%`,
            border: `2px solid ${border}`,
            margin: '4px'
        }}
        onClick={onClick}
        disabled = {isLoading}
        >
            {
                isLoading &&
                <span className="spinner-border spinner-border-sm me-1" role="status" aria-hidden="true"></span>
            }
            {children}
            {name}
        </button>
    )
}