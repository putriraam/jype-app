import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import React from "react";

export default function Template({children}: Readonly<{children: React.ReactNode}>) {
    return (
        <div>
            <Navbar/>
            {children}
            <div className="flex justify-end items-end">
                <Footer/>
            </div>
        </div>
    )
}