import { Children, ReactNode } from "react";
import Footer from "../footer";
import Navbar from "../navbar";

interface LayoutProps {
    children: ReactNode
}

export default function mainLayout(props: LayoutProps) {
    const {children} = props
    return(
        <>
            <Navbar/>
            {children}
            <Footer/>
        </>
    )
}