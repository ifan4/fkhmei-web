import { Children, ReactNode } from "react";
import Footer from "../footer";
import Navbar from "../navbar";

interface LayoutProps {
    solidColor: boolean
    children: ReactNode
}

export default function mainLayout(props: LayoutProps) {
    const {children,solidColor} = props
    
    return(
        <>
            <Navbar solidColor={solidColor}/>
            {children}
            <Footer/>
        </>
    )
}